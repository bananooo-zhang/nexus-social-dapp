import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Powered by Zama FHE</div>
          <h1 className="hero-title">
            The Social Gaming Platform
            <br />
            <span className="highlight">Built for Crypto Communities</span>
          </h1>
          <p className="hero-subtitle">
            Nexus Social is the first Web3 social gaming platform powered by Fully Homomorphic Encryption (FHE).
            <br />
            We bring true confidentiality to on-chain gaming, providing a novel solution for crypto community engagement.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/game')}>
              🎮 Play Demo
            </button>
            <a 
              className="btn-secondary" 
              href="https://github.com/bananooo-zhang/nexus-social-dapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              📖 View Code
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="card-stack">
            <div className="card card-1">
              <img src="/zama-logo.svg" alt="Zama" className="card-logo" />
            </div>
            <div className="card card-2">
              <img src="/zama-logo.svg" alt="Zama" className="card-logo" />
            </div>
            <div className="card card-3">
              <img src="/zama-logo.svg" alt="Zama" className="card-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">The Struggle of Community Gaming Events</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>Difficult & Unfair Data Tracking</h3>
              <p>Game rankings and participation often rely on manual, error-prone, and opaque statistics, leading to doubts about fairness among community members.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💎</div>
              <h3>Contributions Go Unrecognized</h3>
              <p>User engagement cannot be tracked long-term or quantified, causing their valuable contributions to the community to be severely undervalued and overlooked.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧩</div>
              <h3>High Barriers & Fragmented Experience</h3>
              <p>Community event tools are scattered across different platforms, forcing users to learn new systems for each event and preventing a unified, coherent experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">The Nexus Social Solution</h2>
          <div className="solution-content">
            <div className="solution-text">
              <h3>🎯 Positioning: The Premier Platform for Crypto Community Events</h3>
              <p>
              Nexus Social is not just a game, but a <strong>social gaming platform</strong>. 
              We focus on providing fun, fair, and user-friendly social tools for crypto project communities.
              </p>
              <ul className="solution-list">
                <li>
                  <strong>💎 Secured by FHE Technology</strong>
                  <p>Leveraging Zama's Fully Homomorphic Encryption, we achieve true on-chain data confidentiality, ensuring a fair and transparent gaming process.</p>
                </li>
                <li>
                  <strong>🧩 One-Stop Gaming Hub for Seamless Participation</strong>
                  <p>Providing a unified gaming platform for all community events. Users learn once and can seamlessly join activities across different communities.</p>
                </li>
                <li>
                  <strong>📈 Traceable Contributions, Permanent On-Chain Proof</strong>
                  <p>All engagement is recorded on-chain, creating a transparent and immutable proof of contribution, which completely solves the trust issues of manual tracking.</p>
                </li>
                <li>
                  <strong>🌐 Cross-Community Identity, Rediscovering Value</strong>
                  <p>A user's participation data builds their on-chain reputation. This reputation persists across communities, incentivizing long-term engagement.</p>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <div className="tech-badge">
                <div className="tech-icon">🔐</div>
                <div className="tech-text">
                  <div className="tech-label">Full Homomorphic Encryption</div>
                  <div className="tech-name">Full Homomorphic Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Tech Core: The First Game Example</h2>
          <p className="section-subtitle">
            We use our first confidential social game, "Dark Cards," to demonstrate how Nexus Social works and how FHE technology ensures fairness.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Encrypted Hands</h3>
              <p>The system generates an encrypted hand for a game round and records it on-chain. Throughout the game, no one but the contract can see the real hand.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Public Claim</h3>
              <p>The system makes a public claim about its hand (which could be true or a bluff). Community members can then decide whether to challenge based on their judgment.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Confidential Verification</h3>
              <p>The smart contract computes on the encrypted data on-chain (e.g., using FHE.eq()), verifying the claim directly on the ciphertext and publishing the result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Core Advantages</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Absolute Fairness</h3>
              <p>Using FHE, core game data is encrypted and computed on-chain, eliminating cheating and information leaks to ensure every interaction is completely fair.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Easy to Play</h3>
              <p>We focus on lightweight social gameplay with simple, intuitive rules, allowing any community member to join in and enjoy the pure fun of the game.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 Native</h3>
              <p>Built entirely on decentralized networks, with logic executed automatically by smart contracts and seamless integration with mainstream wallets.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Incentive Mechanism</h3>
              <p>The platform natively supports custom reward mechanisms, allowing projects to use tokens or NFTs to activate the community and reward contributors.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Partnership</h3>
              <p>We are more than just a tool; we are a partner to communities. We offer flexible event configuration options to become the go-to platform for Web3 events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Sustainable Growth</h3>
              <p>By focusing on social interaction and contribution history, Nexus Social's value is decoupled from token price, creating a truly sustainable growth model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Join Nexus Social?</h2>
          <p className="cta-subtitle">Experience the next generation of on-chain social gaming powered by FHE!</p>
          <button className="btn-primary" onClick={() => navigate('/game')}>
            🎮 Play Demo
          </button>
          <div className="cta-info">
            <p>Deployed on Sepolia Testnet | Wallet Connection Required | Fully Open Source</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-left">
            <h3>Nexus Social</h3>
            <p>The Web3 Social Gaming Platform Powered by Zama FHE</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/bananooo-zhang/nexus-social-dapp" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced" target="_blank" rel="noopener noreferrer">Contract</a>
            <a href="https://docs.zama.ai/protocol" target="_blank" rel="noopener noreferrer">Zama Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

