import { BotMessageSquare } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-between h-24 px-2 py-4 mb-4 bg-zinc-900 border-zinc-700 border-b-1">
        <div className="rounded-full from-blue-700 to-blue-500 bg-gradient-to-r w-16 h-16 flex items-center justify-center">
          <BotMessageSquare className="w-10 h-10"/>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">CoRE AI Chat Assistant</h1>
          <p className="text-sm text-gray-300">A human-like AI bot like never before seen</p>
        </div>
        <div className="w-10 h-10"></div>
      </header>
      <main className="flex flex-col items-center h-full w-screen">
        <h1>Welcome</h1>
      </main>
    </>
  );
}
