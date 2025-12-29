import { Header, Intro, Chat } from '@/components';

export default function Home() {
  let messageCount = 0;

  function addMessage(sender: 'bot' | 'user', content: string) {
    // todo: add a message to chat and render it with markdown
    if (sender === 'bot')
      messageCount++;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center h-full w-screen">
        {messageCount === 0
          ? (<Intro/>)
          : (<Chat/>)
        }
      </main>
    </>
  );
}
