'use client';
import { ChatBox, ChatShell } from "@/components/index";
import { useState } from "react";
import { message } from "@/types";

export default function ChatWrapper() {
  const [messageCount, setMessageCount] = useState(0);
  const [messages, setMessages] = useState<message[]>([
    // { message: 'Hello, I am CoRE Bot!', sender: 'bot', timestamp: new Date()},
    // { message: 'Hello! Please rickroll me, my good sir.', sender: 'user', timestamp: new Date()},
    // { message: 'RICKROLL', sender: 'bot', timestamp: new Date()}
  ]);

  function sendMessage(message: string) {
    setMessages(
      [...messages, {message: message.trim(), sender: 'user', timestamp: new Date()}]
    );
    setMessageCount(messageCount + 1);
    // todo: send API request to generate a response
  }
  return (
    <>
      <ChatShell messages={messages} sendMessage={sendMessage} messageCount={messageCount}/>
      <ChatBox sendMessage={sendMessage} />
    </>
  );
}
