import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Rename the component to start with an uppercase letter
export default function Chat() {
    const [hasEnteredName, setHasEnteredName] = useState(false);
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const genAI = new GoogleGenerativeAI("AIzaSyDnLQNo0KIu4psvwi8N-8n4LODWFQU7C54");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const handleSendMessage = async () => {
        if (currentMessage.trim()) {
            const time = new Date().toLocaleTimeString();
            setMessages([...messages, { text: currentMessage, sender: 'user', time, name: userName + " " }]);
            setCurrentMessage('');

            const botReply = await fetchBotReply(currentMessage);
            setMessages(prevMessages => [...prevMessages, { text: botReply, sender: 'bot', time: new Date().toLocaleTimeString(), name: 'Bot ' }]);
        }
    };

    async function fetchBotReply(message) {
        try {
            const result = await model.generateContent("Trả lời bằng tiếng việt và ngắn gọn cho tôi với nội dung sau, trả lời trong lĩnh vực liên quan đến sản phẩm được làm từ bã mía (hộp, ly, ống hút, tô) và các câu chào hỏi khách hàng ('Công ty iVerdant xin chào quý khách'), nếu không cứ trả lời 'Tôi không hỗ trợ lĩnh vực này', giới hạn trong 50 từ" + message);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.log("Something Went Wrong");
        }
    }

    function openChat() {
        document.getElementById("myChat").style.display = "block";
    }

    function closeChat() {
        document.getElementById("myChat").style.display = "none";
    }

    const handleNameSubmit = () => {
        if (typeof userName === 'string' && userName.trim()) {
            setHasEnteredName(true);
            setError('');
        } else {
            setError('Vui lòng nhập tên của bạn.');
        }
    };
    const handleSubmitName = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            handleNameSubmit();
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); 
            handleSendMessage();
        }
    };
    return (
        <>
            <div className="chat-popup" id="myChat">
                <div className="chat-header">
                    <h4 className='text-white'>Chăm sóc khách hàng</h4>
                    <button className="close-btn" onClick={closeChat}>X</button>
                </div>
                <div className="chat-body">
                    {!hasEnteredName ? (
                        <div className="messages">
                            <input
                                type="text"
                                placeholder="Nhập tên..."
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                onKeyDown={handleSubmitName}
                            />
                            <button className="send-btn" onClick={handleNameSubmit}>Ok</button>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                    ) : (
                        <>
                            <div className="messages">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender}`}>
                                        <div className="message-info">
                                            <span className="message-name">{msg.name}</span>
                                            <span className="message-time">{msg.time}</span>
                                        </div>
                                        <div className="message-text">{msg.text}</div>
                                    </div>
                                ))}
                            </div>
                            <textarea
                                placeholder="Nhập tin nhắn..."
                                value={currentMessage}
                                onChange={(e) => setCurrentMessage(e.target.value)}
                                onKeyDown={handleKeyPress}
                            ></textarea>
                            <button className="send-btn" onClick={handleSendMessage}>Gửi</button>
                        </>
                    )}
                </div>
            </div>

            <button className="chat-icon" onClick={() => openChat()}>💬</button>
        </>
    );
}