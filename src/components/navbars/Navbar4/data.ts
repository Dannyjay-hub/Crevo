// types
import { Notification, ProfileOption } from './types';

const notifications: Notification[] = [
    {
        icon: 'paperclip',
        variant: 'success',
        text: 'New reference to your credential.',
        time: '10 min ago',
    },
    {
        icon: 'alert-triangle',
        variant: 'danger',
        text: 'Out of date credential.',
        time: '14 min ago',
    },
];

const profileOptions: ProfileOption[] = [
    {
        icon: 'user',
        label: 'Profile',
        redirectTo: '#',
    },
    {
        icon: 'settings',
        label: 'Settings',
        redirectTo: '#',
    },
    {
        icon: 'aperture',
        label: 'Support',
        redirectTo: '#',
    },
    {
        icon: 'unlock',
        label: 'Sign Out',
        redirectTo: '#',
    },
];

export { notifications, profileOptions };
