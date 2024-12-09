"use client";

import { clearContext, converseWithAI } from "@/lib/actions/talk";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

const ChatbotUI = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Namaste! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const res = converseWithAI(input).then((res) => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res as string },
      ]);
    });
    setInput("");
    toast.promise(res, {
      loading: "Analyzing !!",
    });
  };

  useEffect(()=>{
    clearContext();
  },[])

  // Scroll to the end of the chat window whenever messages change
  useEffect(() => {
    // @ts-ignore
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Chatbot Container */}
      <div className="w-[600px] rounded-lg shadow-lg border border-[#d97706] bg-[#fffaf3]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#d97706] text-white rounded-t-lg">
          <h1 className="font-bold text-lg">Sanskriti Assistant</h1>
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Chat Window */}
        <div className="p-4 space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot"
                  ? "items-start"
                  : "items-end justify-end"
              } gap-3`}
            >
              {message.sender === "bot" && (
                <div className="w-10 h-10 bg-[#d97706] text-white rounded-full flex items-center justify-center font-bold">
                  B
                </div>
              )}
              <div
                className={`${
                  message.sender === "bot"
                    ? "bg-[#fff2db] text-black"
                    : "bg-[#d97706] text-white"
                } rounded-lg p-3 shadow`}
              >
                <p>{message.text}</p>
              </div>
              {message.sender === "user" && (
                <div className="w-10 h-10 bg-[#d97706] text-white rounded-full flex items-center justify-center font-bold">
                  U
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Section */}
        <div className="flex items-center p-2 border-t bg-[#fdf4e3]">
          <input
            type="text"
            className="flex-1 bg-[#fffaf3] border border-[#d97706] rounded-lg px-4 py-2 text-black outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="ml-2 px-4 py-2 bg-[#d97706] text-white rounded-lg"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;