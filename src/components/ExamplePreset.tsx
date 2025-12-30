'use client';
import React from 'react';

export default function ExamplePreset({
  children,
  sendMessage
}: Readonly<{
  children: React.ReactNode;
  sendMessage: (message: string) => void;
}>) {
  const handleClick = () => {
    const text = typeof children === 'string' ? children : React.Children.toArray(children).filter(child => typeof child === 'string').join('');
    sendMessage(text)
  };

  return (
    <div className="w-80 md:w-128 min-h-2/4 border-2 border-gray-500 rounded-2xl p-4 md:p-6 text-base md:text-lg cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
}
