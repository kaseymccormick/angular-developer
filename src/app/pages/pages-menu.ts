import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    link: '/pages/charts',
  },
  {
    title: 'Calendar',
    icon: 'nb-layout-centre',
    link: '/pages/extra-components/calendar',
  },
  {
    title: 'Alert',
    icon: 'nb-alert',
    link: '/pages/extra-components/alert',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  // YOU CAN USE THIS FOR TASK TWO IF YOU LIKE!!
  // {
  //   title: 'Extra Components',
  //   icon: 'nb-star',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/extra-components/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/extra-components/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/extra-components/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/extra-components/accordion',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Tree',
  //       link: '/pages/extra-components/tree',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/extra-components/tabs',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
];
