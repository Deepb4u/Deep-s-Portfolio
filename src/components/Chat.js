// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaComments } from 'react-icons/fa';
import "../App.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I Help you?", sender: "bot" }]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };
  const handleSend = async () => {
    if (!userInput.trim()) return;
    
    // Add user message to chat
    const newMessages = [messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    
    // Send request to backend
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/chat`, { message: userInput });
      // const response = await axios.post("/api/chat", { message: userInput });
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Sorry, something went wrong.", sender: "bot" }]);
    }
    setUserInput("");
  };
  

  return (
    <div className="chatbot-container">
      {isOpen && (   <div className="chatbox">
        <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div >
      <div className='chatbox-footer'>
        <input
          className='input'
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
      </div>
     
      )}

      <div className="chat-icon" onClick={toggleChatbox}>
        <FaComments size={30} />
      </div>
    </div>
  );
};

export default Chatbot;

