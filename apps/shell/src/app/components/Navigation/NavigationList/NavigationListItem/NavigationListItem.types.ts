import type { SVGProps, HTMLAttributes } from 'react';

export interface NavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
}
