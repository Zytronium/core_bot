'use client';

import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ChatBox({sendMessage}: { sendMessage: (message: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim())
      return;

    sendMessage(input);
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Type a message..."
          className="flex-1 bg-zinc-900 text-white rounded-lg p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 min-h-[50px] max-h-[200px]"
          rows={1}
          autoFocus
        />
        <button
          
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 transition-colors cursor-pointer"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
}
