import { LoginForm } from '@react-spotify/auth-components';

export function Login() {
  return (
    <div className="flex h-screen items-center justify-around bg-[#121212] text-white">
      <LoginForm />
    </div>
  );
}

export default Login;
