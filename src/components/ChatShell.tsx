"use client";

import { Chat, Intro } from "@/components/index";
import { useState } from "react";
import { message } from '@/types'

interface ChatShellProps {
  messages: message[];
  setMessages: (messages: message[]) => void;
  messageCount: number;
  setMessageCount: (count: number) => void
}

export default function ChatShell({messages, setMessages, messageCount, setMessageCount}: ChatShellProps) {
  return (
    <main className="flex flex-col items-center h-full w-screen">
      {messageCount === 0
        ? (<Intro />)
        : (<Chat messages={messages} setMessages={setMessages} messageCount={messageCount} setMessageCount={setMessageCount} />)
      }
    </main>
  );
}
