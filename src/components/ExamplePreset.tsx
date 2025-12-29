export default function ExamplePreset({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-128 min-h-2/4 border-2 border-gray-500 rounded-2xl p-6 text-lg">
      {children}
    </div>
  );
}
