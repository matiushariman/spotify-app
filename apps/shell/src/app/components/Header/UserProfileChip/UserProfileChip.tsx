import DefaultAvatar from './assets/default-avatar.jpg';
import { useSelectProfile } from '../hooks/useGetProfile';

export const UserProfileChip = () => {
  const user = useSelectProfile();
  const userHasAvatar = user && user.images.length > 0;
  const img = {
    src: userHasAvatar ? user?.images[0].url : DefaultAvatar,
    alt: userHasAvatar ? 'user avatar' : 'Image by studiogstock on Freepik',
  };

  return (
    <span
      aria-label="user profile"
      className="bg-black rounded-full pt-1 pb-1 pl-1 pr-2 flex items-center"
    >
      <img
        src={img.src}
        className="rounded-full mr-2"
        width={24}
        height={24}
        alt={img.alt}
      />
      <p className="text-sm">{user?.display_name}</p>
    </span>
  );
};
