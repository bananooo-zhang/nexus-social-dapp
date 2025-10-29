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
            <span className="highlight">for Crypto Communities</span>
          </h1>
          <p className="hero-subtitle">
            Nexus Social is the first Web3 social gaming platform powered by Fully Homomorphic Encryption (FHE).
            <br />
            We bring true confidentiality to on-chain gaming, offering a novel solution for crypto community engagement.
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
            <div className="card card-1">🃏</div>
            <div className="card card-2">🎴</div>
            <div className="card card-3">🂠</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">The Challenges of Community Gaming Events</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>Difficult & Untrusted Data Tracking</h3>
              <p>Game rankings and participation often rely on manual, error-prone, and opaque statistics, leading to doubts about fairness among community members.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💎</div>
              <h3>Contributions Go Unrecorded</h3>
              <p>User engagement is rarely tracked long-term, undervaluing their contributions and diminishing the perceived value of their participation.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧩</div>
              <h3>High Barriers & Fragmented Experience</h3>
              <p>Community tools are scattered across various platforms, forcing users to learn new systems for each event and preventing a cohesive experience.</p>
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
              <h3>🎯 Our Mission: The Go-To Platform for Crypto Community Events</h3>
              <p>
                Nexus Social is more than just a game; it's a <strong>social gaming platform</strong>. We focus on providing fun, fair, and accessible tools for crypto projects to engage their communities.
              </p>
              <h3>✨ Core Advantage: FHE-Powered On-Chain Confidentiality</h3>
              <p>
                Leveraging Zama's <strong>Fully Homomorphic Encryption (FHE)</strong>, Nexus Social achieves absolute confidentiality for on-chain information. This means crucial game data (like player hands) remains encrypted on-chain and can only be verified under specific conditions, eliminating cheating and ensuring fairness.
              </p>
              <h3>🚀 Our Vision: Sustainable Growth Through a Platform Ecosystem</h3>
              <p>
                We aim to be the cornerstone of community activities, offering a scalable platform that supports diverse games and interactions, building a vibrant Web3 social ecosystem.
              </p>
            </div>
            <ul className="solution-features">
              <li>
                <strong>🔒 Absolute On-Chain Confidentiality</strong>
                <p>Powered by FHE, all core game data is processed on-chain while encrypted, preventing cheating and information leaks.</p>
              </li>
              <li>
                <strong>🧩 One-Stop Gaming Hub for Seamless Participation</strong>
                <p>A unified platform for all community events. Learn once and seamlessly join activities across different communities.</p>
              </li>
              <li>
                <strong>📈 Verifiable Contributions with On-Chain Proof</strong>
                <p>All participation is recorded on-chain, creating a transparent, immutable record of contribution that solves the trust issues of manual tracking.</p>
              </li>
              <li>
                <strong>🌐 Cross-Community Identity & Reputation</strong>
                <p>Your participation data builds your on-chain reputation. This reputation persists across communities, incentivizing long-term engagement.</p>
              </li>
              <li>
                <strong>🤝 Social-First Design</strong>
                <p>Simple rules and a fast pace make our games perfect for fostering a lively community atmosphere, rather than intense, high-skill competitions.</p>
              </li>
              <li>
                <strong>💡 Flexible & Scalable</strong>
                <p>Our platform architecture is designed to easily integrate more FHE-powered games and custom community features in the future.</p>
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
            We use our first confidential social game, "Dark Cards," to demonstrate how Nexus Social and FHE technology ensure fairness.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Encrypted Hands</h3>
              <p>The system generates an encrypted hand for a game round and stores it on-chain. No one can see the real hand except the contract.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Public Claims</h3>
              <p>The system makes a public claim about its hand (which may be true or false). Community members can then decide whether to challenge this claim.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Confidential Verification</h3>
              <p>The smart contract performs computations on the encrypted data (e.g., using FHE.eq()) to verify the claim's truthfulness directly on the ciphertext and reveals the result.</p>
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
              <p>With FHE, core game data is encrypted on-chain from start to finish, eliminating cheating and ensuring the integrity of every move.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Easy to Play</h3>
              <p>We focus on lightweight social games with simple, intuitive rules, allowing any community member to join and enjoy the fun.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 Native</h3>
              <p>Built entirely on decentralized networks, with logic executed by smart contracts and seamless integration with mainstream wallets for a permissionless experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Incentive Ready</h3>
              <p>The platform natively supports custom reward mechanisms, from fungible tokens to commemorative NFTs, empowering projects to engage their communities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Community Focused</h3>
              <p>We are more than a tool; we are a partner. We offer flexible event configurations, aiming to become the go-to platform for Web3 community events.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Sustainable Growth</h3>
              <p>By focusing on social interaction and contribution, Nexus Social's value is decoupled from token hype, creating a sustainable model for user growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Join Nexus Social?</h2>
          <p className="cta-subtitle">Experience the next generation of on-chain social gaming, powered by FHE!</p>
          <button className="btn-primary" onClick={() => navigate('/game')}>
            🎮 Play Demo
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
            <a href="https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced" target="_blank" rel="noopener noreferrer">Contract</a>
            <a href="https://docs.zama.ai/protocol" target="_blank" rel="noopener noreferrer">Zama Docs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

