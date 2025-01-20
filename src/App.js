import React, { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';
import bgImage1 from './assets/images/bjt.jpeg';
import bgImage2 from './assets/images/bjt2.jpeg';
import Guide from './components/Guide';
import Model from './components/Model';
import Feedback from './components/Feedback';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [theme, setTheme] = useState('theme1');  // 添加主题状态
  const [activeMenu, setActiveMenu] = useState('bot'); // 添加菜单状态

  useEffect(() => {
    // 预加载背景图
    const img = new Image();
    img.src = theme === 'theme1' ? bgImage1 : bgImage2;
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error('Background image failed to load');
      setImageLoaded(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [theme]);

  // 渲染内容函数
  const renderContent = () => {
    switch (activeMenu) {
      case 'bot':
        return <ChatInterface />;
      case 'guide':
        return <Guide />;
      case 'model':
        return <Model />;
      case 'feedback':
        return <Feedback />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      {/* 背景图层 */}
      <div className="app-background" style={{ 
        backgroundImage: imageLoaded ? `url(${theme === 'theme1' ? bgImage1 : bgImage2})` : 'none',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme === 'theme1' ? '#000' : '#1a1a1a',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
      }} />
      
      {/* 头部区域 */}
      <header className="app-header">
        {/* 添加登录注册区域 */}
        <div className="auth-buttons">
          <button className="auth-btn">登录</button>
          <button className="auth-btn">注册</button>
        </div>

        <h1>AI聊天BOT（测试版）</h1>
        <nav className="app-nav">
          <button 
            className={`nav-item ${activeMenu === 'bot' ? 'active' : ''}`}
            onClick={() => setActiveMenu('bot')}
          >
            BOT
          </button>
          <button 
            className={`nav-item ${activeMenu === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveMenu('guide')}
          >
            使用说明
          </button>
          <button 
            className={`nav-item ${activeMenu === 'model' ? 'active' : ''}`}
            onClick={() => setActiveMenu('model')}
          >
            智能数据模型
          </button>
          <button 
            className={`nav-item ${activeMenu === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveMenu('feedback')}
          >
            意见建议
          </button>
          <button 
            className="theme-toggle"
            onClick={() => setTheme(theme === 'theme1' ? 'theme2' : 'theme1')}
          >
            切换主题
          </button>
        </nav>
      </header>

      {/* 内容区域 */}
      <div className="app-content">
        {renderContent()}
      </div>

      {/* 添加页脚 */}
      <footer className="app-footer">
        <div className="footer-info">
          <span>© 2025</span>
          <span className="divider">|</span>
          <span>AI聊天BOT</span>
          <span className="divider">|</span>
          <span>版权所有</span>
        </div>
      </footer>
    </div>
  );
}

export default App;