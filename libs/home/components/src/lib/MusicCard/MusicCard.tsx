import { Root } from '@radix-ui/react-aspect-ratio';

export interface MusicCardProps {
  title: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
}

export function MusicCard({
  title,
  description,
  imgSrc,
  imgAlt,
}: MusicCardProps) {
  return (
    <div className="bg-spotify-black h-[288px] w-[210px] cursor-pointer space-y-3 rounded p-4 transition-all hover:bg-white hover:bg-opacity-5">
      <div className="shadow-lg">
        <Root ratio={1}>
          <img
            alt={imgAlt}
            src={imgSrc}
            className="h-full w-full rounded object-cover"
          />
        </Root>
      </div>
      <div className="space-y-1">
        <p className="font-bold text-white">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default MusicCard;
