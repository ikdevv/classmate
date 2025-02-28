import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Book, Calendar, Clock, Download, File, Search } from 'lucide-react';

const papers = [
    {
        id: 1,
        title: 'Advanced React Patterns',
        subject: 'Computer Science',
        year: 2023,
        fileType: 'PDF',
        fileSize: '2.4 MB',
        downloads: 145,
        verified: true,
    },
    {
        id: 2,
        title: 'Machine Learning Fundamentals',
        subject: 'Artificial Intelligence',
        year: 2022,
        fileType: 'DOCX',
        fileSize: '1.8 MB',
        downloads: 234,
        verified: true,
    },
    // Add more papers...
];

export default function Papers() {
    return (
        <div className="mx-auto max-w-6xl p-6">
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold">Study Resources</h1>
                <p className="text-muted-foreground">Download academic papers, research documents, and study materials</p>
            </div>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                    <Input placeholder="Search papers..." className="pl-10" />
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by subject" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Subjects</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Papers Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {papers.map((paper) => (
                    <Card key={paper.id} className="transition-shadow hover:shadow-lg">
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <Book className="text-primary mr-3 h-6 w-6" />
                                <div className="flex-1 space-y-1">
                                    <h3 className="text-lg font-semibold">{paper.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="text-sm">
                                            {paper.subject}
                                        </Badge>
                                        {paper.verified && (
                                            <Badge variant="success" className="text-sm">
                                                Verified
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="py-2">
                            <div className="space-y-3">
                                <div className="text-muted-foreground flex items-center text-sm">
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Published: {paper.year}
                                </div>
                                <div className="text-muted-foreground flex items-center text-sm">
                                    <File className="mr-2 h-4 w-4" />
                                    Format: {paper.fileType} ({paper.fileSize})
                                </div>
                                <div className="text-muted-foreground flex items-center text-sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Downloads: {paper.downloads}
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="border-t pt-4">
                            <div className="flex w-full items-center justify-between">
                                <Button className="gap-2" size="sm">
                                    <Download className="h-4 w-4" />
                                    Download
                                </Button>
                                <div className="text-muted-foreground flex items-center text-sm">
                                    <Clock className="mr-2 h-4 w-4" />
                                    Last updated: 2 weeks ago
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Loading More */}
            <div className="mt-8 text-center">
                <Button variant="outline" className="gap-2">
                    Load More Papers
                </Button>
            </div>
        </div>
    );
}
