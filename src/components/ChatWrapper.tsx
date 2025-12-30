'use client';
import { ChatBox, ChatShell } from "@/components/index";
import { useState } from "react";
import { message } from "@/types";

export default function ChatWrapper() {
  let [messageCount, setMessageCount] = useState(0);
  let [messages, setMessages] = useState<message[]>([]);
  return (
    <>
      <ChatShell messages={messages} setMessages={setMessages}
                 messageCount={messageCount} setMessageCount={setMessageCount}/>
      <ChatBox messages={messages} setMessages={setMessages}
               messageCount={messageCount} setMessageCount={setMessageCount} />
    </>
  );
}
