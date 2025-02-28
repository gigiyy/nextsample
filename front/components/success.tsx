import React from "react";

interface SuccessMessagesProps {
  messages: string[];
}

const SuccessMessages: React.FC<SuccessMessagesProps> = ({ messages }) => {
  return (
    <div className="bg-green-100 p-4 rounded mb-4">
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="text-green-700">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessMessages;