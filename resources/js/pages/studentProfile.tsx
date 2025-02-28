import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Define the type for a student
interface StudentProfile {
    id: number;
    name: string;
    email: string;
    grade: number;
}

interface Classroom {
    id: number;
    name: string;
}

// Define the props for the component
interface StudentProfileProps {
    studentProfile: StudentProfile;
    classrooms: Classroom[];
}

export const studentData = {
    name: 'John Doe',
    studentId: 'S123456',
    email: 'john.doe@example.com',

    profilePicture: 'https://i.pravatar.cc/150?img=1',
    joinedClasses: [
        { id: 1, name: 'Maths', tutor: 'Mr. John' },
        { id: 2, name: 'Sicence', tutor: 'Mrs. Jane' },
    ],
    completedCourses: [
        { id: 3, name: 'HTML & CSS Basics', grade: 'A' },
        { id: 4, name: 'JavaScript Fundamentals', grade: 'B+' },
    ],
    recentActivity: [
        {
            id: 1,
            type: 'assignment',
            course: 'Introduction to React',
            action: 'Submitted Assignment 1',
        },
        {
            id: 2,
            type: 'quiz',
            course: 'Advanced JavaScript',
            action: 'Completed Quiz 2',
        },
    ],
    status: 'Active',
};

const StudentProfilePage = ({ studentProfile, classrooms }: StudentProfileProps) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="flow-row flex gap-4">
                <div className="bg-muted/50 h-[100vh] w-3/4 rounded-lg">
                    <Card>
                        <CardHeader className="">Current Assignments</CardHeader>
                    </Card>
                </div>

                {/* Profile Picture and Bio */}
                <div className="bg-muted/50 h-[100vh] w-1/4 rounded-lg">
                    <div className="h-12">
                        <Card>
                            <CardHeader className="flex flex-col items-center">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={studentData.profilePicture} alt={studentData.name} />
                                    <AvatarFallback>{studentData.name[0]}</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col items-center">
                                    <CardTitle className="m-0">
                                        <h4 className="text-xl font-bold tracking-tight">{studentProfile.name}</h4>
                                    </CardTitle>
                                    <CardDescription>{studentProfile.email}</CardDescription>
                                    <Badge className="mt-2" style={{ backgroundColor: 'green', color: 'white' }}>
                                        {studentData.status}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="flex flex-col items-center">
                                <div className="flex h-5 items-center space-x-4 text-sm">
                                    <div className="flex flex-col items-center">
                                        <h1 className="text-md scroll-m-20 font-semibold tracking-tight">Classes</h1>
                                        <p className="text-lg font-medium">2</p>
                                    </div>
                                    <Separator orientation="vertical" />
                                    <div className="flex flex-col items-center">
                                        <h1 className="text-md scroll-m-20 font-semibold tracking-tight">Quizes</h1>
                                        <p className="text-lg font-medium">100</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Joined Classes */}
                        <div className="mt-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Joined Classes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {classrooms.map((classRoom) => (
                                        <div key={classRoom.id} className="mb-2">
                                            <h4 className="text-md font-semibold">{classRoom.name}</h4>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default StudentProfilePage;
