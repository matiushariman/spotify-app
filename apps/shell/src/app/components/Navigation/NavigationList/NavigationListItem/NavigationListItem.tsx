import { Link } from 'react-router-dom';

import type { NavigationListItemProps } from './NavigationListItem.types';

export const NavigationListItem = ({
  Icon,
  label,
  ...rest
}: NavigationListItemProps) => (
  <li {...rest} className="pl-4 pr-4">
    <Link to="/" className="block cursor-pointer flex items-center">
      <div className="mr-4">
        <Icon width={28} height={28} />
      </div>
      <p className="text-sm">{label}</p>
    </Link>
  </li>
);
