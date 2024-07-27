import React from 'react';
import { Card } from '@repo/ui';

function Gradient({
  conic,
  className,
  small,
  color = 'black',
  width = 24,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
  color?: string;
  width?: number;
}): JSX.Element {
  const exampleClasseName = {
    black: 'bg-black-400',
    white: 'bg-white-400',
    red: 'bg-red-400',
  };
  return (
    <span
      className={`${className} ${exampleClasseName[color as keyof typeof exampleClasseName]} ${`${width && `w-[${width}px]} `}`}`}
    >
      hello
    </span>
  );
}

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Gradient color="red" width={30} />
      <div className="bg-slate-400">sdfsdf</div>
      <Card title="Hello" href="https://example.com">
        card
      </Card>
    </main>
  );
}
