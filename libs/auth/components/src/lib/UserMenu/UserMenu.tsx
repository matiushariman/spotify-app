import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Arrow,
} from '@radix-ui/react-dropdown-menu';
import Avatar from '../Avatar/Avatar';

export function UserMenu() {
  return (
    <Root>
      <Trigger asChild>
        <button className="hover:bg-spotify-black rounded-full bg-black pr-2 text-sm font-bold transition-colors">
          <span className="mr-2">
            <Avatar />
          </span>
          matius harima...
        </button>
      </Trigger>
      <Portal>
        <Content className="bg-spotify-black min-w-[196px] rounded p-2 shadow">
          <Item role="button" className="cursor-pointer p-2 text-sm text-white">
            Log Out
          </Item>
          <Arrow className="fill-spotify-black" />
        </Content>
      </Portal>
    </Root>
  );
}

export default UserMenu;
