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
            Built for Crypto Communities
            <br />
            <span className="highlight">The Social Gaming Platform</span>
          </h1>
          <p className="hero-subtitle">
            Nexus Social is the first Web3 social gaming platform powered by Fully Homomorphic Encryption (FHE).
            <br />
            We bring true confidentiality to on-chain gaming, offering a novel solution for crypto community engagement.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/game')}>
              🎮 Try the Demo
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
            <div className="card card-1">🃏</div>
            <div className="card card-2">🎴</div>
            <div className="card card-3">🂠</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">The Challenge of Community Gaming Events</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>Data Tracking is Difficult, Fairness is Questioned</h3>
              <p>Game rankings and participation often rely on manual tracking, which is error-prone and opaque, leading to community doubts about fairness.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💎</div>
              <h3>Contributions are Fleeting, Value is Overlooked</h3>
              <p>User engagement isn't permanently recorded or quantified, causing their contributions to the community to be undervalued and ignored.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧩</div>
              <h3>High Barriers to Entry, Fragmented Experience</h3>
              <p>Community tools are scattered across different platforms, forcing users to learn new interfaces for each event and preventing a unified, seamless experience.</p>
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
              <h3>🎯 Mission: The Go-To Platform for Crypto Community Events</h3>
              <p>
                Nexus Social is more than just a game; it's a <strong>social gaming platform</strong>.
                We focus on providing fun, fair, and accessible social tools for crypto communities.
              </p>
              <h3>✨ Core Advantage: FHE-Powered On-Chain Confidentiality</h3>
              <p>
                Leveraging Zama's <strong>Fully Homomorphic Encryption (FHE)</strong>, Nexus Social achieves absolute on-chain confidentiality.
                This means critical game data (like a player's hand) remains encrypted on-chain at all times and is only verified under specific conditions, completely eliminating cheating and data leaks.
              </p>
              <h3>🚀 Platform Vision & Sustainable Growth</h3>
              <p>
                We aim to be the cornerstone of community engagement, offering a scalable platform that supports diverse games and interactions to build a vibrant Web3 social ecosystem.
              </p>
            </div>
            <ul className="solution-features">
              <li>
                <strong>🔒 Absolute On-Chain Confidentiality</strong>
                <p>Powered by FHE, core game data is processed on-chain while encrypted, preventing cheating and data leaks.</p>
              </li>
              <li>
                <strong>🧩 One-Stop Hub, Seamless Participation</strong>
                <p>A unified platform for all community events. Users learn once and can seamlessly join activities across different communities.</p>
              </li>
              <li>
                <strong>📈 Verifiable Contributions, Permanent Record</strong>
                <p>All participation is recorded on-chain, creating a transparent and immutable proof of contribution, solving the trust issues of manual tracking.</p>
              </li>
              <li>
                <strong>🌐 Cross-Community Identity, Rediscover Value</strong>
                <p>A user's participation data builds their on-chain reputation. This reputation persists across communities, incentivizing long-term engagement.</p>
              </li>
              <li>
                <strong>🤝 Social-First Design</strong>
                <p>Simple rules and a fast pace, designed for a lively social atmosphere rather than intense, skill-based competition.</p>
              </li>
              <li>
                <strong>💡 Flexible & Scalable</strong>
                <p>The platform architecture is designed to easily integrate more FHE-powered games and custom community features in the future.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works: Our First Game Demo</h2>
          <p className="section-subtitle">
            We use our first confidential social game, "Dark Cards," to demonstrate how Nexus Social works and how FHE technology ensures fairness.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Encrypted Hand</h3>
              <p>The system generates and encrypts a hand for the game, placing it on-chain. No one can view the real hand during gameplay except the contract.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Public Claim</h3>
              <p>The system makes a public claim about its hand (which may be true or false). Community members can challenge the claim based on their judgment.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Confidential Verification</h3>
              <p>The smart contract confidentially computes on the encrypted data (e.g., using FHE.eq()) to verify the claim's truthfulness on-chain and reveals only the result.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Core Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Absolute Fairness</h3>
              <p>Using FHE, core game data is encrypted during on-chain computation, completely preventing cheating and ensuring fair play.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Easy to Play</h3>
              <p>We focus on lightweight social games with simple, intuitive rules, allowing any community member to join and have fun.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 Native</h3>
              <p>The project is built entirely on decentralized networks, with logic executed by smart contracts and seamless integration with Web3 wallets for a permissionless experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Incentive Ready</h3>
              <p>The platform natively supports custom reward mechanisms, allowing sponsors to use tokens or NFTs to activate their community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Focused</h3>
              <p>We are more than a tool; we are a partner. We offer flexible event configurations for project owners, aiming to be the go-to platform for Web3 community events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Sustainable Growth</h3>
              <p>By focusing on social interaction and contribution, Nexus Social's value is decoupled from token price, creating a sustainable model for user growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Join Nexus Social?</h2>
          <p className="cta-subtitle">Experience the next generation of FHE-powered on-chain social gaming!</p>
          <button className="btn-primary" onClick={() => navigate('/game')}>
            🎮 Try the Demo
          </button>
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
            <a href="https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced" target="_blank" rel="noopener noreferrer">Contract Address</a>
            <a href="https://docs.zama.ai/protocol" target="_blank" rel="noopener noreferrer">Zama Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

