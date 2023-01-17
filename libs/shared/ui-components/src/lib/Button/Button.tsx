import type { ButtonHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-spotify-green text-spotify-black min-w-[142px] rounded-full px-4 py-2 text-sm font-bold uppercase transition-transform hover:scale-110">
      {children}
    </button>
  );
}

export default Button;
