import { ListeningIcon } from '../../assets/icons/listeningLogo';
import { ReadingIcon } from '../../assets/icons/readingLogo';
import { WritingIcon } from '../../assets/icons/writingLogo';
import { SpeakingIcon } from '../../assets/icons/speakingLogi';
import avatarUser from '../../assets/images/avatars.png';
import { EarthIcon } from '../../assets/icons/earthIcon';
import { BellIcon } from '../../assets/icons/bellIcon';
import { MultiUsersIcon } from '../../assets/icons/multiUsersIcon';
import BagIcon from '../../assets/icons/bagIcon';

export const ourTeams = [
  {
    name: 'LongDT29',
    role: 'Team leader',
    avatar: avatarUser,
    animate: 'zoom-in-down',
  },
  {
    name: 'LuanTV9',
    role: 'Team member',
    avatar: avatarUser,
    animate: 'zoom-in-down',
  },
  {
    name: 'MinhDV9',
    role: 'Team member',
    avatar: avatarUser,
    animate: 'zoom-in-down',
  },
  {
    name: 'HuanNH6',
    role: 'Team member',
    avatar: avatarUser,
    animate: 'zoom-in-down',
  },
];

export const paymentBoard = [
  {
    package: 'Regular',
    subtitle: 'Easy to get start',
    price: 9.99,
    period: 'week',
    benifits: [
      'Doing writing and speaking exams',
      'Use our dictionary',
      'Create your own vocab collection',
      'Score your answer',
      'Static your result',
    ],
    animate: 'zoom-in-left',
  },
  {
    package: 'Best seller',
    subtitle: 'Best choice for you',
    price: 19.99,
    period: 'month',
    benifits: [
      'Doing writing and speaking exams',
      'Use our dictionary',
      'Create your own vocab collection',
      'Score your answer',
      'Static your result',
    ],
    animate: 'zoom-in-up',
  },
  {
    package: 'Ultra package',
    subtitle: 'Suitable for hard student',
    price: 99.99,
    period: 'year',
    benifits: [
      'Doing writing and speaking exams',
      'Use our dictionary',
      'Create your own vocab collection',
      'Score your answer',
      'Static your result',
    ],
    animate: 'zoom-in-right',
  },
];
export const skillArr = [
  {
    name: 'Listening',
    component: <ListeningIcon width={'6rem'} height={'6rem'} fill="" />,
    animate: 'zoom-in-up',
  },
  {
    name: 'Reading',
    component: <ReadingIcon width={'6rem'} height={'6rem'} fill="" />,
    animate: 'zoom-in-up',
  },
  {
    name: 'Writing',
    component: <WritingIcon width={'6rem'} height={'6rem'} fill="" />,
    animate: 'zoom-in-up',
  },
  {
    name: 'Speaking',
    component: <SpeakingIcon width={'6rem'} height={'6rem'} fill="" />,
    animate: 'zoom-in-up',
  },
];
export const achievementArr = [
  {
    icon: <EarthIcon width={'4rem'} height="4rem" fill="#fff" />,
    quantity: '94532',
    subtitle: 'Foreign Follower',
    animate: 'zoom-in-right',
  },
  {
    icon: <BellIcon width={'4rem'} height="4rem" fill="#fff" />,
    quantity: '  11223',
    subtitle: 'Student enrolled',
    animate: 'zoom-in-up',
  },
  {
    icon: <MultiUsersIcon width={'4rem'} height="4rem" fill="#fff" />,
    quantity: '415163',
    subtitle: 'Foreign Follower',
    animate: 'zoom-in-down',
  },
  {
    icon: <BagIcon width={'4rem'} height="4rem" fill="#fff" />,
    quantity: '69',
    subtitle: 'Certified teachers',
    animate: 'zoom-in-left',
  },
];
