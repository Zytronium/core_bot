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

  async function sendMessage(message: string) {
    setMessages(
      [...messages, {message: message.trim(), sender: 'user', timestamp: new Date()}]
    );
    setMessageCount(messageCount + 1);

    try {
      const response = await fetch(`/api/get-response?msg=${encodeURIComponent(message.trim())}`);
      if (!response.ok) {
        throw new Error('Failed to get response.');
      }
      const data = await response.json();

      setMessages(prevMessages => [
        ...prevMessages,
        { message: data.response, sender: 'bot', timestamp: new Date() }
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          message: 'Sorry, I encountered an error. Please try again.',
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }

  return (
    <>
      <ChatShell messages={messages} sendMessage={sendMessage} messageCount={messageCount}/>
      <ChatBox sendMessage={sendMessage} />
    </>
  );
}
