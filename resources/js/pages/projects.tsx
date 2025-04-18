import AppLayout from "@/layouts/app-layout";

import { type BreadcrumbItem } from '@/types';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function Projects() {
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <h3>Projects Page</h3>
            </AppLayout>
        </>
    )
}