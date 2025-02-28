import React from "react";

interface FailureMessagesProps {
  messages: string[];
}

const FailureMessages: React.FC<FailureMessagesProps> = ({ messages }) => {
  return (
    <div className="bg-red-100 p-4 rounded">
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="text-red-700">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FailureMessages;