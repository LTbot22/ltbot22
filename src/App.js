import React from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';
import bgImage from './assets/images/BJ.jpg';

function App() {
  return (
    <div className="app" style={{ 
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <header className="app-header">
        <h1>AI聊天BOT（测试版）</h1>
      </header>
      <ChatInterface />
    </div>
  );
}

export default App;