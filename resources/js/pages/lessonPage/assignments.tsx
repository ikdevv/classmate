import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { format } from 'date-fns';
import { CalendarDays, Edit, Trash } from 'lucide-react';

const assignments = [
    {
        id: '1',
        title: 'React Fundamentals Quiz',
        dueDate: new Date('2024-03-25'),
        status: 'pending',
        course: 'React Basics',
    },
    {
        id: '2',
        title: 'State Management Exercise',
        dueDate: new Date('2024-03-28'),
        status: 'in-progress',
        course: 'Advanced React',
    },
    {
        id: '3',
        title: 'Final Project Submission',
        dueDate: new Date('2024-04-05'),
        status: 'completed',
        course: 'React Projects',
    },
];

export default function AssignmentsPage() {
    return (
        <div className="py-6">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Assignments</h1>
                    <p className="text-muted-foreground mt-1">Manage your current work and deadlines</p>
                </div>
                <Button size="lg">New Assignment</Button>
            </div>

            <div className="space-y-4">
                {assignments.map((assignment) => {
                    const isOverdue = assignment.dueDate < new Date();

                    return (
                        <Card key={assignment.id} className="group hover:border-primary/20 transition-all hover:shadow-sm">
                            <CardHeader className="pb-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1.5">
                                        <h3 className="text-xl font-semibold">{assignment.title}</h3>
                                        <div className="text-muted-foreground flex items-center text-sm">{assignment.course}</div>
                                    </div>
                                    <Badge
                                        variant={
                                            assignment.status === 'completed'
                                                ? 'default'
                                                : assignment.status === 'in-progress'
                                                  ? 'warning'
                                                  : 'default'
                                        }
                                        className="shrink-0"
                                    >
                                        {assignment.status}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <CalendarDays className="text-muted-foreground h-5 w-5" />
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm font-medium">Due Date:</span>
                                            <time className={`text-sm ${isOverdue ? 'text-destructive' : 'text-foreground'}`}>
                                                {format(assignment.dueDate, 'EEE, MMM dd yyyy')}
                                            </time>
                                        </div>
                                    </div>
                                    {isOverdue && (
                                        <Badge variant="destructive" className="animate-pulse">
                                            Overdue
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="flex items-center justify-between border-t">
                                <div className="flex items-center">
                                    <span className="text-muted-foreground text-sm">Created {format(new Date(), 'MMM dd')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 gap-1.5">
                                        <Edit className="h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10 gap-1.5">
                                        <Trash className="h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
