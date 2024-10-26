import React, { useState, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom when a new message is added
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-full bg-white border rounded-lg shadow-lg">
      <div className="p-4 border-b bg-gray-100">
        <h2 className="text-lg font-semibold">Ask.....</h2>
      </div>
      <div id="chat-container" className="flex-1 p-4 overflow-y-auto flex flex-col justify-end">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center py-10">Ask your first question...</div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="ml-2 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
