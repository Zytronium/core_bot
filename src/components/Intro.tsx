import { ExamplePreset, Logo } from "@/components";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Logo size='large' />
      <h2 className="text-xl mt-4">Welcome to CoRE Bot</h2>
      <p className="text-md">Select an example below or begin typing</p>
      <div className="flex flex-col gap-5 items-center justify-center mt-4 w-[80%]">
        <ExamplePreset>What are your capabilities?</ExamplePreset>
        <ExamplePreset>How did you get your name?</ExamplePreset>
        <ExamplePreset>Explain rocket science like I&apos;m 5</ExamplePreset>
      </div>
    </div>
  );
}
