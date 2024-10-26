import React, { useState, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Chat = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  const initialMessage = formData || ''; // Retrieve formData passed from Details
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typingResponse, setTypingResponse] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (initialMessage && !isInitialized) {
      handleInitialMessage(initialMessage);
      setIsInitialized(true);
    }
  }, [initialMessage, isInitialized]);

  const typewriterEffect = (text) => {
    let i = 0;
    const typewriterInterval = setInterval(() => {
      if (i < text.length) {
        setTypingResponse((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typewriterInterval);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: text, sender: 'bot' },
        ]);
        setTypingResponse(''); // Reset typing response
      }
    }, 10);
  };

  const handleInitialMessage = async (userDetails) => {
    const promptString = 
      `I am a ${userDetails.age}-year-old ${userDetails.gender} ` +
      `from a ${userDetails.residence} area in the ${userDetails.category} category, ` +
      `I am ${userDetails.isStudent === 'yes' ? 'a student' : 'not a student'}.`;

    try {
      const response = await fetch('http://127.0.0.1:8000/initial-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: promptString }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      typewriterEffect(data.answer); // Directly use the answer

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) return; // Prevent sending empty messages
    console.log('Send Message:', message)
    // Display user message
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }]);
    setInput(''); // Reset input immediately

    try {
      // Mock API response for demonstration
      const response = await fetch('http://127.0.0.1:8000/initial-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      typewriterEffect(data.answer); // Directly use the answer

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

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
          <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'} chat-message`}>
            {msg.text}
          </div>
        ))}
        {typingResponse && (
          <div className="my-2 p-2 bg-gray-300 text-black rounded-lg self-start">
            {typingResponse}
          </div>
        )}
      </div>
      <div className="flex items-center p-2 border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
        />
        <button onClick={() => handleSendMessage(input)} className="ml-2 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
