'use client';
import React from 'react';
import { message } from '@/types';

export default function ExamplePreset({
  children,
  messages,
  setMessages,
  messageCount,
  setMessageCount,
}: Readonly<{
  children: React.ReactNode;
  messages: message[];
  setMessages: (messages: message[]) => void;
  messageCount: number;
  setMessageCount: (count: number) => void;
}>) {
  const handleClick = () => {
    const text = typeof children === 'string' ? children : React.Children.toArray(children).filter(child => typeof child === 'string').join('');
    setMessages([...messages, { message: text, sender: 'user', timestamp: new Date() }]);
    setMessageCount(messageCount + 1);
  };

  return (
    <div className="w-128 min-h-2/4 border-2 border-gray-500 rounded-2xl p-6 text-lg cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
}
