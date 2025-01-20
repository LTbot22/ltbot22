import React from 'react';

function Feedback() {
  return (
    <div className="content-container">
      <h2>意见建议</h2>
      <div className="feedback-content">
        <div className="feedback-grid">
          <section className="guide-section contact-section">
            <h3>联系方式</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>邮件反馈</h4>
                  <p>sunsanxiao9@gmail.com</p>
                  <span className="tag">24h回复</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <div>
                  <h4>工作时间</h4>
                  <p>周一至周五 9:00-18:00</p>
                  <span className="tag">实时响应</span>
                </div>
              </div>
            </div>
          </section>

          <section className="guide-section guidelines-section">
            <h3>反馈指南</h3>
            <div className="guidelines-list">
              <div className="guideline-item">
                <span className="guideline-icon">🐛</span>
                <div>
                  <h4>问题反馈</h4>
                  <ul>
                    <li>描述问题场景</li>
                    <li>提供错误信息</li>
                    <li>问题重现步骤</li>
                  </ul>
                </div>
              </div>
              <div className="guideline-item">
                <span className="guideline-icon">💡</span>
                <div>
                  <h4>建议提交</h4>
                  <ul>
                    <li>功能优化建议</li>
                    <li>新功能需求</li>
                    <li>体验改进意见</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Feedback; 