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
            为加密社区打造的
            <br />
            <span className="highlight">社交游戏平台</span>
          </h1>
          <p className="hero-subtitle">
            Nexus Social 是首个基于全同态加密（FHE）技术的 Web3 社交游戏平台。
            <br />
            我们让链上游戏真正实现信息机密性，为加密社区活动提供全新解决方案。
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/game')}>
              🎮 立即体验 Demo
            </button>
            <a 
              className="btn-secondary" 
              href="https://github.com/yourusername/dark-cards-dapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              📖 查看代码
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
          <h2 className="section-title">社区游戏活动的困境</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📊</div>
              <h3>数据统计难，公平性受疑</h3>
              <p>游戏排名和参与情况多依赖手动统计，易出错、不透明，引发社区成员对公平性的质疑。</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💎</div>
              <h3>贡献无沉淀，价值被忽视</h3>
              <p>用户的参与行为无法被长期记录和量化，其对社区的贡献价值被严重低估和忽视。</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧩</div>
              <h3>参与门槛高，体验碎片化</h3>
              <p>社区活动工具分散在不同平台，用户每次参与都需要重新学习，无法形成统一、连贯的参与体验。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">Nexus Social 解决方案</h2>
          <div className="solution-content">
            <div className="solution-text">
              <h3>🎯 定位：加密社区活动首选平台</h3>
              <p>
                Nexus Social 不是一个简单的游戏，而是一个<strong>社交游戏平台</strong>。
                我们专注于为加密项目社区提供有趣、公平、易上手的社交活动工具。
              </p>
              <ul className="solution-list">
                <li>
                  <strong>💎 FHE 技术保障</strong>
                  <p>利用 Zama 全同态加密技术，实现真正的链上信息机密性，确保游戏过程公平透明。</p>
                </li>
                <li>
                  <strong>🧩 一站式游戏中心，无缝参与</strong>
                  <p>为所有社区活动提供统一的游戏平台，用户只需学习一次，即可无缝参与不同社区的活动。</p>
                </li>
                <li>
                  <strong>📈 贡献可追溯，数据永存证</strong>
                  <p>所有参与行为都将记录在链上，形成透明、不可篡改的贡献证明，彻底解决手动统计的信任问题。</p>
                </li>
                <li>
                  <strong>🌐 跨社区身份，价值再发现</strong>
                  <p>用户的参与数据构成了TA的链上声誉。无论社区如何变迁，声誉永存，激励用户长期活跃。</p>
                </li>
              </ul>
            </div>
            <div className="solution-visual">
              <div className="tech-badge">
                <div className="tech-icon">🔐</div>
                <div className="tech-text">
                  <div className="tech-label">核心技术</div>
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
          <h2 className="section-title">技术核心：首个游戏示例</h2>
          <p className="section-subtitle">
            我们通过第一个机密社交游戏“暗牌”来展示 Nexus Social 的工作原理，以及 FHE 技术如何保障公平性。
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>加密手牌</h3>
              <p>系统为一局游戏生成加密手牌并上链，在整个游戏过程中，除了合约，任何人都无法查看真实手牌。</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>公开声称</h3>
              <p>系统对自己的手牌进行公开声称（可能诚实，也可能说谎），社区成员可以根据自己的判断决定是否挑战。</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>机密验证</h3>
              <p>智能合约在链上对加密数据进行运算（例如 FHE.eq()），直接在密文上验证声称是否属实，并公布结果。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">核心优势</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>绝对公平</h3>
              <p>利用 FHE 技术，游戏核心数据全程在链上加密运算，彻底杜绝作弊与信息泄露，保障每一次博弈的绝对公正。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>简单易玩</h3>
              <p>我们专注于轻量化的社交玩法，规则简单直观，让任何社区成员都能轻松加入，享受游戏带来的纯粹乐趣。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Web3 原生</h3>
              <p>项目完全构建于去中心化网络之上，逻辑由智能合约自动执行，与主流钱包无缝集成，提供无需许可的参与体验。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>激励机制</h3>
              <p>平台原生支持项目方自定义奖励机制，无论是同质化代币还是纪念版 NFT，都能成为激活社区、回馈贡献者的有效工具。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>社区合作</h3>
              <p>我们不仅仅是工具，更是社区的合作伙伴。我们为项目方提供灵活的活动配置选项，致力于成为 Web3 社区活动的首选平台。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>持续增长</h3>
              <p>通过聚焦社交和贡献沉淀，Nexus Social 的价值与代币价格解耦，为项目社区打造一个真正可持续的用户活跃和增长模型。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">准备好体验未来了吗？</h2>
          <p className="cta-subtitle">立即尝试我们的 MVP Demo，感受 FHE 技术带来的链上机密游戏体验</p>
          <button className="btn-primary-large" onClick={() => navigate('/game')}>
            🚀 开始游戏
          </button>
          <div className="cta-info">
            <p>部署在 Sepolia 测试网 | 需要连接钱包 | 完全开源</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>Nexus Social</h3>
              <p>基于 Zama FHE 的 Web3 社交游戏平台</p>
            </div>
            <div className="footer-links">
              <a href="https://github.com/yourusername/dark-cards-dapp" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://sepolia.etherscan.io/address/0xc82996db14d66c70586E1670d44A0E89cED4aced" target="_blank" rel="noopener noreferrer">
                合约地址
              </a>
              <a href="https://docs.zama.ai/" target="_blank" rel="noopener noreferrer">
                Zama 文档
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

