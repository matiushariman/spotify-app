import { SideNavigation } from '@react-spotify/dashboard-components';
import { GradientBackground } from '@react-spotify/shared-ui-components';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

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
