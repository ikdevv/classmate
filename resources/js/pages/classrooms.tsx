import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';
import { FormEvent } from 'react';

// Define the breadcrumbs
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Classes',
        href: '/classroom',
    },
];

// Define the type for a classroom
interface Classroom {
    id: number;
    name: string;
}

// Define the props for the component
interface ClassroomsProps {
    classrooms: Classroom[];
}

// Add Classroom Dialog Component
function AddClassroomDialog() {
    const { setData, post, errors } = useForm({
        name: '',
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/classroom');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <span className="mr-2">
                        <PlusCircle size={16} />
                    </span>
                    Add Class
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Class</DialogTitle>
                    <DialogDescription>Add your class here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input type="text" id="name" className="col-span-3" onChange={(e) => setData('name', e.target.value)} />
                            {errors.name && <span className="col-span-4 text-right text-sm text-red-500">{errors.name}</span>}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default function Classrooms({ classrooms }: ClassroomsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="container mx-auto p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Classes</h1>
                    <AddClassroomDialog />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {classrooms.map((classroom) => (
                        <Card key={classroom.id} className="shadow-lg">
                            <CardHeader>
                                <CardTitle>{classroom.name}</CardTitle>
                                <CardDescription>Classroom ID: {classroom.id}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Details about the classroom can go here.</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center gap-4">
                                    <Button variant={'ghost'} onClick={() => Inertia.visit(`/classroom/${classroom.id}`)}>
                                        View Details
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            Inertia.post(`/classroom/${classroom.id}/join`);
                                        }}
                                    >
                                        Join
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
