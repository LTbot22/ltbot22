import React from 'react';

function Guide() {
  return (
    <div className="content-container">
      <h2>使用说明</h2>
      <div className="guide-content">
        <div className="guide-grid">
          <section className="guide-section steps-section">
            <h3>基本步骤</h3>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-info">
                  <h4>输入问题</h4>
                  <p>在对话框中输入您的问题</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-info">
                  <h4>发送消息</h4>
                  <p>点击发送或按回车键</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-info">
                  <h4>获取回复</h4>
                  <p>AI将快速响应您的问题</p>
                </div>
              </div>
            </div>
          </section>

          <section className="guide-section tips-section">
            <h3>使用技巧</h3>
            <div className="tips-list">
              <div className="tip-item">
                <span className="tip-icon">💡</span>
                <div className="tip-content">
                  <h4>提问技巧</h4>
                  <p>问题越具体，回答越准确</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🔄</span>
                <div className="tip-content">
                  <h4>连续对话</h4>
                  <p>支持多轮对话交流</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">⚡</span>
                <div className="tip-content">
                  <h4>快捷操作</h4>
                  <p>支持快捷键操作</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Guide; 