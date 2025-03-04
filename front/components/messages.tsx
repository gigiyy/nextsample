import React from "react";
import SuccessMessages from "./success";
import FailureMessages from "./failure";
import Message from "@/types/message";
import WarnMessages from "./warn";

interface MessagesProps {
  messages: Message[];
}

const filter = (messages: Message[], type: string): string[] => {
  return messages.filter((msg) => msg.type === type).map((msg) => msg.message);
};

const MessagesDiv: React.FC<MessagesProps> = ({ messages }) => {
  return (
    messages?.length > 0 && (
      <div className="mt-4 max-w-lg">
        <SuccessMessages messages={filter(messages, "OK")} />
        <WarnMessages messages={filter(messages, "WARN")} />
        <FailureMessages messages={filter(messages, "ERROR")} />
      </div>
    )
  );
};

export default MessagesDiv;
