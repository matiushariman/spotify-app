import { SideNavigation, AppBar } from '@react-spotify/auth-components';
import { GradientBackground } from '@react-spotify/shared-ui-components';

export function Dashboard() {
  return (
    <GradientBackground>
      <SideNavigation />
      <main className="pl-[240px]">
        <AppBar />
      </main>
    </GradientBackground>
  );
}

export default Dashboard;
