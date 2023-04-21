import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "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";
  const MODEL = "gpt-3.5-turbo";

  const addBotMessage = async (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text,
        sender: "bot",
      },
    ]);

    setIsLoading(true);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    const body = {
      prompt: text,
      max_tokens: 100,
      temperature: 0.5,
      model: MODEL,
    };

    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: data.choices[0].text,
        sender: "bot",
      },
    ]);

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputText) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: inputText,
          sender: "user",
        },
      ]);

      addBotMessage(inputText);
      setInputText("");
    }
  };

  useEffect(() => {
    addBotMessage("Hello, how can I help you with freelancing?");
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-10 h-96 w-72 overflow-hidden rounded-t-3xl bg-white shadow-lg">
      <div className="bg-gray-800 p-4 text-center text-white">
        <p className="text-lg font-bold">Freelancing Help Chatbot</p>
      </div>
      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-${message.sender === "user" ? "left" : "right"}`}>
            <p
              className={`max-w-72 my-1 inline-block rounded-lg px-3 py-1 ${
                message.sender === "user"
                  ? "bg-gray-300 text-gray-800"
                  : "bg-blue-600 text-white"
              }`}>
              {message.text}
            </p>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <p className="font-bold">Bot is typing...</p>
          </div>
        )}
      </div>
      <form onSubmit={handleFormSubmit} className="bg-gray-100 p-4">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-600"
          placeholder="Type your message here..."
        />
      </form>
    </div>
  );
};

export default Chatbot;
