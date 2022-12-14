import { HomeIcon } from '@heroicons/react/20/solid';

import { NavigationListItem } from './NavigationListItem';

export const NavigationList = () => (
  <ul>
    <NavigationListItem
      Icon={HomeIcon}
      label="Home"
      data-testId="navigation-home"
    />
  </ul>
);
