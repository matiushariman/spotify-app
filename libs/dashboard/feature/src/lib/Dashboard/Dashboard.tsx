import { SideNavigation } from '@react-spotify/dashboard-components';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

export function Dashboard() {
  return (
    <>
      <SideNavigation />
      <main className="pl-[240px]">
        <AppBar />
        <Outlet />
      </main>
    </>
  );
}

export default Dashboard;
