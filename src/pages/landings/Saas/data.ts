// types
import { PlanItem } from 'components/pricing';

import { Feature } from './types';


const features: Feature[] = [
    {
        avatar: 'users',
        title: 'Great User Experience',
        description:
            "For DIDs to reach their true potential, our approach must user-friendly, not technical. Infrastructure works best when you don't know it's there.",
        variant: 'primary',
        containerClass: 'd-flex borkder-bottom pb-4',
    },
    {
        avatar: 'award',
        title: 'Issue Verifiable credentials',
        description: "Our API allows other applications easily verify your Crevo credentials, safely and securely",
        variant: 'success',
        containerClass: 'd-flex border-bottom py-4',
    },
    {
        avatar: 'eye-off',
        title: 'Zero-Knowledge Proofs',
        description: 'Our protocol uses the latest advancements in homomorphic encryption to keep you data safe.',
        variant: 'orange',
        containerClass: 'd-flex pt-4',
    },
];

const plans: PlanItem[] = [
    {
        id: 1,
        name: 'Starter',
        price: '49',
        duration: '/ month',
        features: [
            'Up to 600 minutes usage time',
            'Use for personal only',
            'Add up to 10 attendees',
            '1 User',
            'Technical support via email',
        ],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Professional',
        price: '99',
        duration: '/ month',
        features: [
            'Up to 6000 minutes usage time',
            'Use for personal or a commercial',
            'Add up to 100 attendees',
            'Up to 5 teams',
            'Technical support via email',
        ],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Enterprise',
        price: '599',
        duration: '/ month',
        features: [
            'Unlimited usage time',
            'Use for personal or a commercial',
            'Add Unlimited attendees',
            '24x7 Technical support via phone',
            'Technical support via email',
        ],
        isRecommended: false,
    },
];

export { features, plans };
