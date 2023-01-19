import { UserMenu } from '@react-spotify/dashboard-components';
import { useLoaderData } from 'react-router-dom';
import { GetMeResponse, useGetMe } from '@react-spotify/dashboard-api';

export function AppBar() {
  const initialData = useLoaderData() as GetMeResponse;
  const { data } = useGetMe({
    initialData,
  });
  const avatar =
    data.images && data.images.length > 0 ? data.images[0].url : undefined;

  return (
    <header>
      <div className="container mx-auto flex min-h-[72px] items-center justify-end p-4">
        <UserMenu avatar={avatar} username={data.display_name} />
      </div>
    </header>
  );
}

export default AppBar;
