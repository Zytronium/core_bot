import { ExamplePreset, Logo } from "@/components";
import React from "react";

export default function Intro({ sendMessage }: Readonly<{
  sendMessage: (message: string) => void;
}>) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Logo size='large' />
      <h2 className="text-xl mt-4">Welcome to CoRE Bot</h2>
      <p className="text-md">Select an example below or begin typing</p>
      <div className="flex flex-col gap-5 items-center justify-center mt-4 w-[80%]">
        <ExamplePreset sendMessage={sendMessage}>What are your capabilities?</ExamplePreset>
        <ExamplePreset sendMessage={sendMessage}>How did you get your name?</ExamplePreset>
        <ExamplePreset sendMessage={sendMessage}>Explain rocket science like I&apos;m 5</ExamplePreset>
      </div>
    </div>
  );
}
