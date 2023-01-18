import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from '@radix-ui/react-tooltip';

import type { PropsWithChildren } from 'react';
export interface UsernameTooltipProps {
  username: string;
}

export function UsernameTooltip({
  children,
  username,
}: PropsWithChildren<UsernameTooltipProps>) {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            className="bg-spotify-black rounded p-2 text-sm text-white shadow"
            sideOffset={5}
          >
            {username}
            <Arrow className="fill-spotify-black" />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
}

export default UsernameTooltip;
