import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
} from '@radix-ui/react-dropdown-menu';
import { useSessionStore } from '@react-spotify/shared-stores';
import Avatar from '../Avatar/Avatar';
import UsernameTooltip from '../UsernameTooltip/UsernameTooltip';

const displayUsername = (username: string) =>
  username.length > 13 ? `${username.substring(0, 13)}...` : username;

export interface UserMenuProps {
  avatar?: string;
  username?: string;
}

export function UserMenu({ username = 'Username', avatar }: UserMenuProps) {
  const removeAccessToken = useSessionStore((state) => state.removeAccessToken);

  return (
    <Root>
      <UsernameTooltip username={username}>
        <Trigger asChild>
          <button className="hover:bg-spotify-black rounded-full bg-black pr-2 text-sm font-bold transition-colors">
            <span className="mr-2">
              <Avatar src={avatar} />
            </span>
            {displayUsername(username)}
          </button>
        </Trigger>
      </UsernameTooltip>
      <Portal>
        <Content className="bg-spotify-black min-w-[196px] rounded p-2 shadow">
          <Item
            onClick={removeAccessToken}
            role="button"
            className="cursor-pointer p-2 text-sm text-white"
          >
            Log Out
          </Item>
          <Arrow className="fill-spotify-black" />
        </Content>
      </Portal>
    </Root>
  );
}

export default UserMenu;
