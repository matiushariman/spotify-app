import SpotifyLogo from '../SpotifyLogo/SpotifyLogo';

export function SideNavigation() {
  return (
    <div className="fixed h-screen w-[240px] bg-black">
      <div className="py-4 px-6">
        <SpotifyLogo />
      </div>
    </div>
  );
}

export default SideNavigation;
