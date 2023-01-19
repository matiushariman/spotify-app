import { SideNavigation, AppBar } from '@react-spotify/dashboard-components';
import { GradientBackground } from '@react-spotify/shared-ui-components';
import { Outlet } from 'react-router-dom';

export function Dashboard() {
  return (
    <GradientBackground>
      <SideNavigation />
      <main className="pl-[240px]">
        <AppBar />
        <Outlet />
      </main>
    </GradientBackground>
  );
}

export default Dashboard;
