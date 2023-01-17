import 'tailwindcss/tailwind.css';

export const decorators = [
  (Story) => (
    <div style={{ padding: 20, backgroundColor: '#121212', color: '#fff' }}>
      <Story />
    </div>
  ),
];
