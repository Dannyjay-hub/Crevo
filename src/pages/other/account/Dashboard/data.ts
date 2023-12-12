// types
import { Project, Task } from './types';

// images
import member1 from 'assets/images/avatars/img-8.jpg';
import member2 from 'assets/images/avatars/img-5.jpg';

const projects: Project[] = [
    {
        time: 'Aug 09, 2023',
        title: 'Senior React Developer',
        state: {
            name: 'ongoing',
            variant: 'orange',
        },
        description: 'Update shreyu with modern and latest trends...',
        progress: {
            value: 75,
            variant: 'success',
        },
        member: [member2],
    },
    {
        time: ' Sep 21, 2022',
        title: 'Mid-level React Developer',
        state: {
            name: 'Active',
            variant: 'primary',
        },
        description: "Proof of ability to use the React Javascript framework at a mid-level proficiency.",
        progress: {
            value: 50,
            variant: 'danger',
        },
        member: [member2],
    },
    {
        time: 'May 14, 2020',
        title: 'Senior Prompt Engineer',
        state: {
            name: 'Active',
            variant: 'primary',
        },
        description: "Proof of competency in state-of-the-art techniques for prompting LLMs.",
        progress: {
            value: 50,
            variant: 'danger',
        },
        member: [member1],
    },
    {
        time: 'Jul 23, 2018',
        title: 'Langchain Engineer',
        state: {
            name: 'Outdated',
            variant: 'info',
        },
        description: "Proof of competency in using the Langchain prompt chaining system.",
        progress: {
            value: 60,
            variant: 'warning',
        },
        member: [member1],
    },
];

const tasks: Task[] = [
    {
        id: 1,
        title: 'Draft the new contract document for sales team',
        time: 'Today 10pm',
        variant: 'info',
        taskRatio: {
            completedTask: 3,
            totalTask: 7,
        },
        comment: 21,
        priority: 'High',
    },
    {
        id: 2,
        title: 'iOS App home page design',
        time: 'Today 5pm',
        variant: 'info',
        taskRatio: {
            completedTask: 10,
            totalTask: 11,
        },
        comment: 5,
        priority: 'Medium',
    },
    {
        id: 3,
        title: 'Enable analytics tracking',
        time: 'Tomorrow 5pm',
        variant: 'secondary',
        taskRatio: {
            completedTask: 5,
            totalTask: 11,
        },
        comment: 7,
        priority: 'Medium',
    },
    {
        id: 4,
        title: 'Kanban board design',
        time: 'Sep 11, 3pm',
        variant: 'secondary',
        taskRatio: {
            completedTask: 0,
            totalTask: 5,
        },
        comment: 3,
        priority: 'Low',
    },
];

export { projects, tasks };
