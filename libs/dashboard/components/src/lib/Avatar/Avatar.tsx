import { Root, Image, Fallback } from '@radix-ui/react-avatar';

export interface AvatarProps {
  src?: string;
  username?: string;
}

export function Avatar({ src, username = 'User' }: AvatarProps) {
  return (
    <Root className="inline-flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full align-middle">
      <Image src={src} alt={username} className="h-full w-full object-cover" />
      <Fallback
        delayMs={600}
        className="flex h-full w-full items-center justify-center bg-gray-300 text-sm text-gray-600"
      >
        {username.charAt(0)}
      </Fallback>
    </Root>
  );
}

export default Avatar;
