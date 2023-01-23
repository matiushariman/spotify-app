import 'tailwindcss/tailwind.css';

export const decorators = [
  (Story) => (
    <div className="h-screen bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-black text-white">
      <Story />
    </div>
  ),
];
