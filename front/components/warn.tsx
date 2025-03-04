import React from "react";

interface WarnMessageProps {
  messages: string[];
}

const WarnMessages: React.FC<WarnMessageProps> = ({ messages }) => {
  return (
    messages.length > 0 && (
      <div className="bg-yellow-100 p-4 rounded">
        <ul>
          {messages.map((message, index) => (
            <li key={"warn-" + index} className="text-yellow-700">
              {message}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default WarnMessages;
