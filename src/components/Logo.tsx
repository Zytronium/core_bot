import { BotMessageSquare } from "lucide-react";

export default function Logo(props: { size: 'small' | 'medium' | 'large' }) {
  const bg_size = props.size === 'small' ? 'w-10 h-10' : props.size === 'medium' ? 'w-16 h-16' : 'w-24 h-24';
  const icon_size = props.size === 'small' ? 'w-6 h-6' : props.size === 'medium' ? 'w-10 h-10' : 'w-16 h-16';
  return (
    <div
      className={`rounded-full from-blue-700 to-blue-500 bg-gradient-to-r ${bg_size} flex items-center justify-center`}>
      <BotMessageSquare className={icon_size} />
    </div>
  );
}
