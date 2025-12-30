'use client';
import { ChatBox, ChatShell } from "@/components/index";
import { useState } from "react";
import { message } from "@/types";

export default function ChatWrapper() {
  let [messageCount, setMessageCount] = useState(0);
  let [messages, setMessages] = useState<message[]>([
    // { message: 'Hello, I am CoRE Bot!', sender: 'bot', timestamp: new Date()},
    // { message: 'Hello! Please rickroll me, my good sir.', sender: 'user', timestamp: new Date()},
    // { message: 'RICKROLL', sender: 'bot', timestamp: new Date()}
  ]);
  return (
    <>
      <ChatShell messages={messages} setMessages={setMessages}
                 messageCount={messageCount} setMessageCount={setMessageCount}/>
      <ChatBox messages={messages} setMessages={setMessages}
               messageCount={messageCount} setMessageCount={setMessageCount} />
    </>
  );
}
