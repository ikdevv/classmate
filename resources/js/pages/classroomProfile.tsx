import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Inertia } from '@inertiajs/inertia';

// Define the breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Classes',
        href: '/classroom',
    },
];

// Define the type for a student
interface Student {
    id: number;
    name: string;
    email: string;
    grade: string;
}

// Define the type for a classroom
interface Classroom {
    id: number;
    name: string;
}

interface Lesson {
    id: number;
    title: string;
    description: string;
}

// Define the props for the component
interface ClassroomsProps {
    classroom: Classroom;
    students: Student[];
    lessons: Lesson[];
}

export default function ClassroomProfile({ classroom, students, lessons }: ClassroomsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container mx-auto p-4">
                <h1 className="mb-4 text-2xl font-bold">{classroom.name}</h1>
                <h2 className="mb-4 text-xl font-semibold">Students</h2>
                {students.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {students.map((student) => (
                            <Card key={student.id} className="shadow-lg">
                                <CardHeader>
                                    <CardTitle>{student.name}</CardTitle>
                                    <CardDescription>{student.email}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button
                                        variant={'destructive'}
                                        onClick={() => {
                                            Inertia.post(`/classroom/${classroom.id}/remove/${student.id}`);
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No students found in this classroom.</p>
                )}

                <h2 className="mb-4 text-xl font-semibold">Lessons</h2>
                {lessons.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {lessons.map((lesson) => (
                            <Card key={lesson.id} className="shadow-lg">
                                <CardHeader>
                                    <CardTitle>{lesson.title}</CardTitle>
                                    <CardDescription>{lesson.description}</CardDescription>
                                </CardHeader>

                                <CardFooter>
                                    <Button
                                        onClick={() => {
                                            Inertia.visit(`/lesson/${lesson.id}`);
                                        }}
                                    >
                                        View More
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No lessons found in this classroom.</p>
                )}
            </div>
        </AppLayout>
    );
}
