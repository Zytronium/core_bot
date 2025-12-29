"use client";

import { Chat, Intro } from "@/components/index";
import { useState } from "react";

export default function ChatShell() {
  let [messageCount, setMessageCount] = useState(0);

  return (
    <main className="flex flex-col items-center h-full w-screen">
      {messageCount === 0
        ? (<Intro />)
        : (<Chat messageCount={messageCount} setMessageCount={setMessageCount} />)
      }
    </main>
  );
}
