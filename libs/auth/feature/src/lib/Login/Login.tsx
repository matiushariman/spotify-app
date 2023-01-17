import { LoginForm } from '@react-spotify/auth-components';
import { GradientBackground } from '@react-spotify/shared-ui-components';

export function Login() {
  return (
    <GradientBackground className="flex items-center justify-around">
      <LoginForm />
    </GradientBackground>
  );
}

export default Login;
