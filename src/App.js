import React from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  return (
    <div className="app" style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475')`
    }}>
      <header className="app-header">
        <h1>AI聊天BOT（测试版）</h1>
      </header>
      <ChatInterface />
    </div>
  );
}

export default App;