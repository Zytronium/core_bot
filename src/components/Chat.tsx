interface ChatProps {
  messageCount?: number;
  setMessageCount?: (count: number) => void;
}

export default function Chat({ messageCount, setMessageCount }: ChatProps) {
  return (
    <>
      <p>Chat Placeholder</p>
      <div>You have sent {messageCount} messages.</div>
    </>
  )
}