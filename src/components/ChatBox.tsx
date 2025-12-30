'use client';

import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { message } from '@/types'

interface ChatBoxProps {
  messages: message[];
  setMessages: (messages: message[]) => void;
  messageCount: number;
  setMessageCount: (count: number) => void;
}

export default function ChatBox({messages, setMessages, messageCount, setMessageCount}: ChatBoxProps) {
  const [input, setInput] = useState('');

  function handleSend(input: string) {
    setMessages([...messages, {message: input.trim(), sender: 'user', timestamp: new Date()}]);
    setMessageCount(messageCount + 1);
    // todo: send API request to generate a response
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim())
      return;

    handleSend(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 border-t border-gray-700 p-4"
    >
      <div className="max-w-4xl mx-auto flex gap-4 items-end">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-zinc-900 text-white rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 min-h-[50px] max-h-[200px]"
          rows={1}
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 transition-colors"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
}
