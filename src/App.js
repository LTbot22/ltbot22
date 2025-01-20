import React from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>牛逼爱聊天</h1>
      </header>
      <ChatInterface />
    </div>
  );
}

export default App; 