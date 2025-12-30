"use client";

import { Chat, Intro } from "@/components/index";
import { message } from '@/types'

interface ChatShellProps {
  messages: message[];
  messageCount: number;
  sendMessage: (message: string) => void;
}

export default function ChatShell({messages, messageCount, sendMessage}: ChatShellProps) {
  return (
    <main className="flex flex-col items-center h-full w-screen">
      {messageCount === 0
        ? (<Intro sendMessage={sendMessage}/>)
        : (<Chat messages={messages}/>)
      }
    </main>
  );
}
