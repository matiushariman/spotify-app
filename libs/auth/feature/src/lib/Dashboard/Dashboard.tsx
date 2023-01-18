import { SideNavigation } from '@react-spotify/auth-components';
import { GradientBackground } from '@react-spotify/shared-ui-components';

export function Dashboard() {
  return (
    <GradientBackground>
      <SideNavigation />
    </GradientBackground>
  );
}

export default Dashboard;
