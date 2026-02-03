"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! I'm FusionEdge Assistant. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [connectionError, setConnectionError] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    /** Backend endpoint */
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://chatsupport-bot.onrender.com/api/chat";

    /* -------------------- HELPERS -------------------- */
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if (isOpen) inputRef.current?.focus();
    }, [isOpen]);

    /* -------------------- SEND MESSAGE -------------------- */
    const sendMessage = async () => {
        if (!inputMessage.trim() || isTyping) return;

        const currentMessage = inputMessage.trim();
        const userMessage: Message = {
            id: Date.now().toString(),
            text: currentMessage,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");
        setIsTyping(true);
        setConnectionError(false);

        try {
            const conversationHistory = messages.map(msg => ({
                text: msg.text,
                sender: msg.sender
            }));

            const response = await fetch(BACKEND_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: currentMessage,
                    conversationHistory
                }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }

            const data: { reply?: string; error?: string } = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    text: data.reply || "Sorry, I couldn't generate a response.",
                    sender: "bot",
                    timestamp: new Date(),
                },
            ]);
        } catch (err) {
            console.error("Chat error:", err);
            setConnectionError(true);

            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "Unable to connect to chat service";

            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    text: `⚠️ ${errorMessage}. Please try again.`,
                    sender: "bot",
                    timestamp: new Date(),
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const formatTime = (date: Date) =>
        date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });

    const clearChat = () => {
        setMessages([
            {
                id: "1",
                text: "Hello! I'm FusionEdge Assistant. How can I help you today?",
                sender: "bot",
                timestamp: new Date(),
            },
        ]);
        setConnectionError(false);
    };

    /* -------------------- UI -------------------- */
    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen((o) => !o)}
                className="chat-trigger"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <svg
                    className="chat-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                    ) : (
                        <>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <circle cx="9" cy="10" r="0.5" fill="currentColor" stroke="none" />
                            <circle cx="12" cy="10" r="0.5" fill="currentColor" stroke="none" />
                            <circle cx="15" cy="10" r="0.5" fill="currentColor" stroke="none" />
                        </>
                    )}
                </svg>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-container">
                    {/* Header */}
                    <div className="chat-header">
                        <div className="header-content">
                            <div className="header-title">FusionEdge</div>
                            <div className="header-status">
                                <span className={`status-dot ${connectionError ? 'error' : 'online'}`} />
                                {connectionError ? "Reconnecting" : "Online"}
                            </div>
                        </div>
                        <button onClick={clearChat} className="clear-button" title="New conversation">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="messages-container">
                        {messages.map((msg, index) => (
                            <div
                                key={msg.id}
                                className={`message ${msg.sender}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="message-content">
                                    {msg.text}
                                </div>
                                <div className="message-time">
                                    {formatTime(msg.timestamp)}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message bot typing-indicator">
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="chat-input-container">
                        <input
                            ref={inputRef}
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            disabled={isTyping}
                            className="chat-input"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isTyping || !inputMessage.trim()}
                            className="send-button"
                            aria-label="Send message"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .chat-trigger {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 50;
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #5D1F73 0%, #7a3991 100%);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px rgba(93, 31, 115, 0.3),
                                0 0 0 0 rgba(93, 31, 115, 0);
                }

                .chat-trigger:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 30px rgba(93, 31, 115, 0.4),
                                0 0 0 8px rgba(93, 31, 115, 0.1);
                }

                .chat-trigger:active {
                    transform: scale(0.95);
                }

                .chat-icon {
                    width: 24px;
                    height: 24px;
                    transition: transform 0.3s ease;
                }

                .chat-trigger:hover .chat-icon {
                    transform: rotate(15deg);
                }

                .chat-container {
                    position: fixed;
                    bottom: 96px;
                    right: 24px;
                    z-index: 50;
                    width: 400px;
                    height: 600px;
                    background: white;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12),
                                0 0 0 1px rgba(0, 0, 0, 0.08);
                    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .chat-header {
                    padding: 20px 24px;
                    background: linear-gradient(135deg, #5D1F73 0%, #7a3991 100%);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                }

                .header-content {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .header-title {
                    font-size: 16px;
                    font-weight: 600;
                    letter-spacing: -0.02em;
                }

                .header-status {
                    font-size: 12px;
                    color: rgba(255, 255, 255, 0.6);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #10b981;
                }

                .status-dot.online {
                    animation: pulse 2s ease-in-out infinite;
                }

                .status-dot.error {
                    background: #ef4444;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }

                .clear-button {
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    transition: all 0.2s;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .clear-button svg {
                    width: 18px;
                    height: 18px;
                }

                .clear-button:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                }

                .messages-container {
                    flex: 1;
                    overflow-y: auto;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    background: #f7f5f9;
                }

                .messages-container::-webkit-scrollbar {
                    width: 6px;
                }

                .messages-container::-webkit-scrollbar-track {
                    background: transparent;
                }

                .messages-container::-webkit-scrollbar-thumb {
                    background: rgba(93, 31, 115, 0.2);
                    border-radius: 10px;
                }

                .messages-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(93, 31, 115, 0.35);
                }

                .message {
                    display: flex;
                    flex-direction: column;
                    max-width: 80%;
                    animation: messageAppear 0.3s ease-out;
                }

                @keyframes messageAppear {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .message.user {
                    align-self: flex-end;
                    align-items: flex-end;
                }

                .message.bot {
                    align-self: flex-start;
                    align-items: flex-start;
                }

                .message-content {
                    padding: 12px 16px;
                    border-radius: 12px;
                    font-size: 14px;
                    line-height: 1.5;
                    word-wrap: break-word;
                    white-space: pre-wrap;
                }

                .message.user .message-content {
                    background: linear-gradient(135deg, #5D1F73 0%, #7a3991 100%);
                    color: white;
                    border-bottom-right-radius: 4px;
                }

                .message.bot .message-content {
                    background: white;
                    color: #2d1738;
                    border: 1px solid rgba(93, 31, 115, 0.15);
                    border-bottom-left-radius: 4px;
                }

                .message-time {
                    font-size: 11px;
                    color: rgba(0, 0, 0, 0.4);
                    margin-top: 4px;
                    padding: 0 4px;
                }

                .typing-indicator {
                    padding: 12px 16px;
                }

                .typing-dots {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                }

                .typing-dots span {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(93, 31, 115, 0.5);
                    animation: typingBounce 1.4s ease-in-out infinite;
                }

                .typing-dots span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .typing-dots span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes typingBounce {
                    0%, 60%, 100% {
                        transform: translateY(0);
                    }
                    30% {
                        transform: translateY(-8px);
                    }
                }

                .chat-input-container {
                    padding: 20px 24px;
                    background: white;
                    border-top: 1px solid rgba(0, 0, 0, 0.08);
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }

                .chat-input {
                    flex: 1;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-radius: 12px;
                    padding: 12px 16px;
                    font-size: 14px;
                    outline: none;
                    transition: all 0.2s;
                    background: white;
                }

                .chat-input:focus {
                    border-color: #5D1F73;
                    box-shadow: 0 0 0 3px rgba(93, 31, 115, 0.1);
                }

                .chat-input:disabled {
                    background: #f5f5f5;
                    cursor: not-allowed;
                }

                .chat-input::placeholder {
                    color: rgba(0, 0, 0, 0.4);
                }

                .send-button {
                    background: linear-gradient(135deg, #5D1F73 0%, #7a3991 100%);
                    border: none;
                    color: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }

                .send-button svg {
                    width: 20px;
                    height: 20px;
                }

                .send-button:hover:not(:disabled) {
                    background: linear-gradient(135deg, #4a1859 0%, #5D1F73 100%);
                    transform: scale(1.05);
                }

                .send-button:active:not(:disabled) {
                    transform: scale(0.95);
                }

                .send-button:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                }

                @media (max-width: 480px) {
                    .chat-container {
                        width: calc(100vw - 32px);
                        right: 16px;
                        bottom: 88px;
                    }

                    .chat-trigger {
                        right: 16px;
                        bottom: 16px;
                    }
                }
            `}</style>
        </>
    );
};

export default Chatbot;