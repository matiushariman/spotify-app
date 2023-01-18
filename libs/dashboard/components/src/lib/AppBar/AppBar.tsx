import UserMenu from '../UserMenu/UserMenu';

export function AppBar() {
  return (
    <header>
      <div className="container mx-auto flex min-h-[72px] items-center justify-end p-4">
        <UserMenu />
      </div>
    </header>
  );
}

export default AppBar;
