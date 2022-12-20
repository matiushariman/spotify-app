import { useGetProfile } from './hooks/useGetProfile';
import { UserProfileChip } from './UserProfileChip';
import { LoadingSpinner } from './LoadingSpinner';

export const Header = () => {
  const { isLoading } = useGetProfile();

  return (
    <div className="flex pl-6 pr-6 items-center h-[64px] justify-end">
      {isLoading ? <LoadingSpinner /> : <UserProfileChip />}
    </div>
  );
};
