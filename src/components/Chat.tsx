import { message } from "@/types";

interface ChatProps {
  messages: message[];
  setMessages: (messages: message[]) => void;
  messageCount?: number;
  setMessageCount?: (count: number) => void;
}

export default function Chat({
  messages,
  setMessages,
  messageCount,
  setMessageCount
}: ChatProps) {
  return (
    <>
      <div>You have sent {messageCount} messages.</div>
      <div className="flex flex-col gap-6 mt-4 w-full max-w-4xl px-4">
        {messages.map((message, index) => (
          message.sender === 'bot'
            ? <BotChatBubble key={index} message={message.message} />
            : <UserChatBubble key={index} message={message.message} />
        ))}
      </div>
    </>
  )
}

function UserChatBubble(props: { message: string }) {
  return (
    <div className="flex self-end">
      <p className="bg-blue-500 rounded-t-full rounded-l-full px-3 py-2">{props.message}</p>
    </div>
  )
}

function BotChatBubble(props: { message: string }) {
  return (
    <div className="flex">
      <p className={`rounded-t-full rounded-r-full px-3 py-2 ${
        props.message === "RICKROLL"
          ? "bg-[url('/roll.gif')] bg-cover bg-center w-48 h-48"
          : "bg-gray-700"
      }`}>
        {props.message !== "RICKROLL" && props.message}
      </p>
    </div>
  )
}