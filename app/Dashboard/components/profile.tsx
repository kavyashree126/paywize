import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      sender: "you",
      text: "Hi! Next week we'll start a new project. l'll tell you all te details  later",
      time: "10:20 AM",
    },
    { sender: "john", text: "Yeah sure, looking forward", time: "10:21 AM" },
    {
      sender: "you",
      text: "Have a good day",
      time: "10:22 AM",
    },
    { sender: "john", text: "Thank You", time: "10:24 AM" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages([...messages, { sender: "you", text: newMessage, time }]);
    setNewMessage("");

    // Optional: Simulate reply from John after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "you", text: newMessage, time },
        { sender: "john", text: "Sure, let's do that!", time },
      ]);
    }, 1000);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4 flex flex-col justify-between h-[400px]">
      {/* Chat display area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "you" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`${
                msg.sender === "you"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } rounded-lg px-4 py-2 max-w-xs`}
            >
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 mt-1 text-right">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center mt-4 border-t pt-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
