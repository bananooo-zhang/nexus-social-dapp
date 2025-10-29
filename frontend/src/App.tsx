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
      setError('无法加载系统叫牌，请检查网络连接。')
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
      setResult('🎲 正在揭晓结果...')
      
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
              setResult(`✅ 系统诚实！\n\n🎴 系统声称: ${claimedCardDisplay}\n🎴 真实手牌: ${realCardDisplay}\n\n😊 这次系统没有撒谎！`)
            } else {
              setResult(`🎉 抓到了！系统在说谎！\n\n🎴 系统声称: ${claimedCardDisplay}\n🎴 真实手牌: ${realCardDisplay}\n\n🏆 你成功识破了系统的谎言！`)
            }
            gameResultFound = true
            break
          }
        } catch (e) {
          // Not the event we are looking for, continue
        }
      }

      if (!gameResultFound) {
        setError("未能解析游戏结果，请检查合约事件。")
      }
      
      await loadSystemClaim()
    } catch (err: any) {
      console.error('Challenge error:', err)
      setError(`挑战失败: ${err.shortMessage || err.message || '未知错误'}`)
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
        ← 返回首页
      </button>

      <div className="connect-button-wrapper top-right">
        <ConnectButton 
          label="连接钱包"
          accountStatus="address"
          chainStatus="icon"
          showBalance={false}
        />
      </div>

      <div className="game-card-container">
        <h1 className="game-title">🎲 机密游戏</h1>
        <p className="game-subtitle">Nexus Social - 链上机密挑战</p>

        {isConnected ? (
          <div className="game-content">
            <div className="claim-section">
              <div className="claim-display">
                <h2>系统声称</h2>
                <div className="card-value">{getCardDisplay(systemClaim)}</div>
                <p className="hint">你相信吗？点击下方挑战！</p>
              </div>

              <button 
                className="challenge-btn" 
                onClick={handleChallenge}
                disabled={loading || systemClaim === 0}
              >
                {loading ? '挑战中...' : '🎯 挑战！'}
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
              <h3>游戏说明</h3>
              <p>1. 系统已经秘密选择了一张牌</p>
              <p>2. 系统公开声称是某张牌</p>
              <p>3. 你可以挑战系统是否在说谎</p>
              <p>4. FHE 技术将保证结果的公正性</p>
            </div>
          </div>
        ) : (
          <div className="please-connect-section">
            <p>请先连接钱包开始游戏</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default GamePage
