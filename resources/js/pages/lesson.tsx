import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { Separator } from '@radix-ui/react-separator';
import Assignments from './lessonPage/assignments';
import Links from './lessonPage/links';
import Notes from './lessonPage/notes';
import Papers from './lessonPage/papers';
import Quizes from './lessonPage/quizes';

export default function Lesson({ notes }) {
    return (
        <AppLayout>
            <div className="container p-4">
                <Tabs defaultValue="notes" className="w-full">
                    <TabsList className="gap-4 p-4">
                        <TabsTrigger value="notes">Notes</TabsTrigger>
                        <TabsTrigger value="quizes">Quizes</TabsTrigger>
                        <TabsTrigger value="links">Links</TabsTrigger>
                        <TabsTrigger value="assignments">Assginments</TabsTrigger>
                        <TabsTrigger value="papers">Papers</TabsTrigger>
                    </TabsList>
                    <Separator />
                    <TabsContent value="notes">
                        <Notes notes={notes} />
                    </TabsContent>
                    <TabsContent value="quizes">
                        <Quizes />
                    </TabsContent>
                    <TabsContent value="links">
                        <Links />
                    </TabsContent>
                    <TabsContent value="assignments">
                        <Assignments />
                    </TabsContent>
                    <TabsContent value="papers">
                        <Papers />
                    </TabsContent>
                </Tabs>
            </div>
        </AppLayout>
    );
}
