import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useWalletClient, usePublicClient } from 'wagmi'
import { parseAbi, decodeEventLog, Log } from 'viem'
import './App.css'

const CONTRACT_ADDRESS = '0xc82996db14d66c70586E1670d44A0E89cED4aced' as `0x${string}`
const contractAbi = parseAbi([
  "function challenge() public returns (bool)",
  "function claimedCard() public view returns (uint8)",
  "event GameResult(address indexed player, bool wasHonest, uint8 realCard, uint8 claimedCard)"
])

// 卡牌映射
const CARD_NAMES: { [key: number]: string } = {
  1: 'A', 11: 'J', 12: 'Q', 13: 'K'
}

function GamePage() {
  const navigate = useNavigate()
  const { address, isConnected } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()
  
  const [systemClaim, setSystemClaim] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string>('')
  const [error, setError] = useState<string>('')

  // 获取系统叫牌
  const loadSystemClaim = async () => {
    if (!publicClient) return
    try {
      const claim = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractAbi,
        functionName: 'claimedCard',
      })
      setSystemClaim(Number(claim))
    } catch (err) {
      console.error('Failed to load claim:', err)
      setError("Could not load system's claim. Please check your network connection.")
    }
  }

  useEffect(() => {
    if (isConnected && publicClient) {
      loadSystemClaim()
    }
  }, [isConnected, publicClient, address])

  const handleChallenge = async () => {
    if (!walletClient || !publicClient || !address) return

    try {
      setLoading(true)
      setError('')
      setResult('')

      setResult('🎲 Revealing the result...')
      
      const hash = await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractAbi,
        functionName: 'challenge',
        account: address,
      })
      
      const receipt = await publicClient.waitForTransactionReceipt({ hash })

      let gameResultFound = false
      for (const log of receipt.logs as Log[]) {
        try {
          const decodedEvent = decodeEventLog({
            abi: contractAbi,
            data: log.data,
            topics: log.topics,
          })
          if (decodedEvent.eventName === 'GameResult') {
            const { wasHonest, realCard, claimedCard } = decodedEvent.args as { wasHonest: boolean, realCard: bigint, claimedCard: bigint }
            const realCardDisplay = getCardDisplay(Number(realCard))
            const claimedCardDisplay = getCardDisplay(Number(claimedCard))
            
            if (wasHonest) {
              setResult(`✅ The system was honest!\n\n🎴 System Claimed: ${claimedCardDisplay}\n🎴 Real Card: ${realCardDisplay}\n\n😊 The system told the truth this time!`)
            } else {
              setResult(`🎉 Gotcha! The system was lying!\n\n🎴 System Claimed: ${claimedCardDisplay}\n🎴 Real Card: ${realCardDisplay}\n\n🏆 You successfully called the bluff!`)
            }
            gameResultFound = true
            break
          }
        } catch (e) {
          // Not the event we are looking for, continue
        }
      }

      if (!gameResultFound) {
        setError("Failed to parse game result. Please check the contract event.")
      }
      
      await loadSystemClaim()
    } catch (err: any) {
      console.error('Challenge error:', err)
      setError(`Challenge failed: ${err.shortMessage || err.message || 'Unknown error'}`)
      setResult('')
    } finally {
      setLoading(false)
    }
  }

  const getCardDisplay = (num: number): string => {
    return CARD_NAMES[num] || num.toString()
  }

  return (
    <div className="game-page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <div className="connect-button-wrapper top-right">
        <ConnectButton 
          label="Connect Wallet"
          accountStatus="address"
          chainStatus="icon"
          showBalance={false}
        />
      </div>

      <div className="game-card-container">
        <h1 className="game-title">🎲 The Confidential Game</h1>
        <p className="game-subtitle">Nexus Social - On-Chain Confidential Challenge</p>

        {isConnected ? (
          <div className="game-content">
            <div className="claim-section">
              {systemClaim > 0 && (
                <div className="claim-display">
                  <h2>System Claims</h2>
                  <div className="card-value">{getCardDisplay(systemClaim)}</div>
                  <p className="hint">Do you believe it? Hit challenge below!</p>
                </div>
              )}

              <button 
                className="challenge-btn" 
                onClick={handleChallenge}
                disabled={loading || systemClaim === 0}
              >
                {loading ? 'Challenging...' : '🎯 Challenge!'}
              </button>
            </div>
            
            {result && (
              <div className="result-section success" style={{ whiteSpace: 'pre-wrap' }}>
                {result}
              </div>
            )}
            {error && (
              <div className="result-section error">
                ❌ {error}
              </div>
            )}
            
            <div className="instructions">
              <h3>How to Play</h3>
              <p>1. The system secretly holds a card.</p>
              <p>2. It makes a public claim about its card.</p>
              <p>3. You challenge whether it's telling the truth.</p>
              <p>4. FHE technology ensures a fair result.</p>
            </div>
          </div>
        ) : (
          <div className="please-connect-section">
            <p>Please connect your wallet to start.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GamePage
