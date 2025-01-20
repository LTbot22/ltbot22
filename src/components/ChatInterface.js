import React, { useState, useRef, useEffect } from 'react';
import { findBestMatch } from '../data/chatUtils';
import './ChatInterface.css';

// 初始消息
const initialMessages = [
  { id: 1, type: 'bot', content: '请开始你的牛逼聊天之旅～～～～～' }
];

function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '感谢使用AI智能聊天BOT！'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // 增加延迟时间到 1.5 秒
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const response = await findBestMatch(inputText);
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: response
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: '抱歉，我遇到了一些问题。请稍后再试。'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // 添加触摸反馈
  const handleTouchStart = (e) => {
    e.currentTarget.style.opacity = '0.7';
  };

  const handleTouchEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.type}`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="message bot loading">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="input-container" onSubmit={handleSend}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="输入消息..."
          disabled={isLoading}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {isLoading ? '发送中...' : '发送'}
        </button>
      </form>
    </div>
  );
}

export default ChatInterface; 