import { Logo } from './Logo';
import { NavigationList } from './NavigationList';

export const Navigation = () => (
  <nav
    data-testid="navigation"
    className="min-w-[232px] fixed bg-black top-0 bottom-0 overflow-y-auto z-10"
  >
    <div className="p-6">
      <Logo />
    </div>
    <div className="pt-2 pl-2">
      <NavigationList />
    </div>
  </nav>
);
