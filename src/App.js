import React from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';
import techBg from './assets/images/tech-bg.jpg';

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${techBg})` }}>
      <header className="app-header">
        <h1>AI聊天BOT（测试版）</h1>
      </header>
      <ChatInterface />
    </div>
  );
}

export default App; 