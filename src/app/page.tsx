import { BotMessageSquare } from "lucide-react";

function Logo(props: { size: 'small' | 'medium' | 'large' }) {
  // w-6 h-6 w-10 h-10 w-16 h-16 w-24 h-24 \\ without this comment, tailwind won't detect we're using these classes.
  const s_bg = props.size === 'small' ? '10' : props.size === 'medium' ? '16' : '24';
  const s_icon = props.size === 'small' ? '6' : props.size === 'medium' ? '10' : '16';
  return (
    <div
      className={`rounded-full from-blue-700 to-blue-500 bg-gradient-to-r w-${s_bg} h-${s_bg} flex items-center justify-center`}>
      <BotMessageSquare className={`w-${s_icon} h-${s_icon}`} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header
        className="flex flex-row items-center justify-between h-24 px-2 py-4 mb-4 bg-zinc-900 border-zinc-700 border-b-1">
        <Logo size='medium'/>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">CoRE AI Chat Assistant</h1>
          <p className="text-sm text-gray-300">
            A human-like AI bot like never before seen
          </p>
        </div>
        <div className="w-10 h-10"></div>
      </header>
      <main className="flex flex-col items-center h-full w-screen">
        <Logo size='large'/>
        <h2 className="text-xl mt-4">Welcome to CoRE Bot</h2>
        <p className="text-lg"></p>
      </main>
    </>
  );
}
