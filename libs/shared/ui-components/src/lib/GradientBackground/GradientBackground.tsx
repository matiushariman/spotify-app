import cc from 'classcat';

import type { HTMLAttributes } from 'react';

export type GradientBackgroundProps = HTMLAttributes<HTMLDivElement>;

export function GradientBackground({
  children,
  className,
}: GradientBackgroundProps) {
  return (
    <div
      className={cc([
        'h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-black text-white',
        className,
      ])}
    >
      {children}
    </div>
  );
}

export default GradientBackground;
