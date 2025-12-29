import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header
      className="flex flex-row items-center justify-between h-24 px-2 py-4 mb-4 bg-zinc-900 border-zinc-700 border-b-1">
      <Logo size='medium' />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">CoRE AI Chat Assistant</h1>
        <p className="text-sm text-gray-300">
          A human-like AI bot like never before seen
        </p>
      </div>
      <div className="w-10 h-10"></div>
    </header>
  );
}
