import { useSelectProfile } from '../hooks/useGetProfile';

export const UserProfileChip = () => {
  const user = useSelectProfile();

  return (
    <span
      aria-label="user profile"
      className="bg-black rounded-full pt-1 pb-1 pl-1 pr-2 flex items-center"
    >
      <img
        src={user?.images[0].url}
        className="rounded-full mr-2"
        width={24}
        height={24}
        alt="user avatar"
      />
      <p className="text-sm">{user?.display_name}</p>
    </span>
  );
};
