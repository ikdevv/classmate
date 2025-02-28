import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Inertia } from '@inertiajs/inertia';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Student',
        href: '/student-profile',
    },
];

// Define the type for a student
interface Student {
    id: number;
    name: string;
    email: string;
    grade: number;
}

// Define the props for the component
interface Student {
    students: Student[];
}

export default function Student({ students }: Student) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container mx-auto p-4">
                <h1 className="mb-4 text-2xl font-bold">Students</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {students.map((student) => (
                        <Card key={student.id} className="shadow-lg">
                            <CardHeader>
                                <CardTitle>{student.name}</CardTitle>
                                <CardDescription>{student.email}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Grade: {student.grade}</p>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={() => Inertia.visit(`/student-profile/${student.id}`)}>View Details</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
