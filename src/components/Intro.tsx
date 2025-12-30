import { ExamplePreset, Logo } from "@/components";
import React from "react";
import { message } from "@/types";

export default function Intro({
  messages,
  setMessages,
  messageCount,
  setMessageCount,
}: Readonly<{
  messages: message[];
  setMessages: (messages: message[]) => void;
  messageCount: number;
  setMessageCount: (count: number) => void;
}>) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Logo size='large' />
      <h2 className="text-xl mt-4">Welcome to CoRE Bot</h2>
      <p className="text-md">Select an example below or begin typing</p>
      <div className="flex flex-col gap-5 items-center justify-center mt-4 w-[80%]">
        <ExamplePreset
          messages={messages} setMessages={setMessages}
          messageCount={messageCount} setMessageCount={setMessageCount}
        >What are your capabilities?</ExamplePreset>
        <ExamplePreset
          messages={messages} setMessages={setMessages}
          messageCount={messageCount} setMessageCount={setMessageCount}
        >How did you get your name?</ExamplePreset>
        <ExamplePreset
          messages={messages} setMessages={setMessages}
          messageCount={messageCount} setMessageCount={setMessageCount}
        >Explain rocket science like I&apos;m 5</ExamplePreset>
      </div>
    </div>
  );
}
