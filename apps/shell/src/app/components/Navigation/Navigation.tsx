import { Logo } from './Logo';

export const Navigation = () => (
  <nav
    data-testId="navigation"
    className="min-w-[232px] fixed bg-black top-0 bottom-0 overflow-y-auto z-10"
  >
    <div className="p-6">
      <Logo />
    </div>
  </nav>
);
