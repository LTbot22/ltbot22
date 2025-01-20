import React from 'react';

function Model() {
  return (
    <div className="content-container">
      <h2>智能数据模型</h2>
      <div className="model-content">
        <div className="model-grid">
          <section className="guide-section model-intro-section">
            <div className="model-header">
              <span className="model-icon">🔬</span>
              <div>
                <h3>测试版说明</h3>
                <p>AI聊天数据模型正在训练中，期待您的参与和反馈</p>
              </div>
            </div>
            <div className="version-tag">Beta Version</div>
          </section>

          <section className="guide-section model-features">
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <div>
                  <h4>当前阶段</h4>
                  <ul>
                    <li>数据模型训练中</li>
                    <li>用户数据收集</li>
                    <li>系统性能优化</li>
                  </ul>
                  <p className="feature-note">您的每次对话都将帮助模型更好地学习和进化</p>
                </div>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🔮</span>
                <div>
                  <h4>即将推出</h4>
                  <ul>
                    <li>聊天软件内容实时捕捉</li>
                    <li>智能分析与人性化回复</li>
                    <li>自动同步回复内容</li>
                  </ul>
                  <p className="feature-note">全自动化聊天体验</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">👤</span>
                <div>
                  <h4>个性化服务</h4>
                  <ul>
                    <li>个人登录中心</li>
                    <li>账户数据分析</li>
                    <li>独立优化学习</li>
                  </ul>
                  <p className="feature-note">为每位用户提供定制化体验</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <div>
                  <h4>安全保障</h4>
                  <ul>
                    <li>数据加密存储</li>
                    <li>隐私内容保护</li>
                    <li>内容安全审核</li>
                  </ul>
                  <p className="feature-note">确保您的数据安全</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model; 