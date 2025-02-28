import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { BookOpen, Plus } from 'lucide-react';

export default function Notes({ notes }) {
    return (
        <div className="mx-auto max-w-7xl p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="flex items-center gap-2 text-2xl font-bold">
                    <BookOpen className="h-6 w-6" /> Study Notes
                </h1>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Note
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {notes.map((note) => (
                    <Card>
                        <CardHeader>
                            <h2 className="text-lg font-bold">{note.title}</h2>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
