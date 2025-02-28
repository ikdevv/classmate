import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, ExternalLink, Plus, Trash } from 'lucide-react';
import { useState } from 'react';

interface Link {
    id: string;
    title: string;
    url: string;
    category: string;
    description?: string;
}

export default function Links() {
    const [links, setLinks] = useState<Link[]>([
        {
            id: '1',
            title: 'Official Documentation',
            url: 'https://docs.example.com',
            category: 'Documentation',
            description: 'Main product documentation and guides',
        },
        {
            id: '2',
            title: 'Support Portal',
            url: 'https://support.example.com',
            category: 'Support',
            description: 'Submit tickets and access knowledge base',
        },
    ]);

    const [newLink, setNewLink] = useState({
        title: '',
        url: '',
        category: '',
        description: '',
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newLink.title && newLink.url) {
            setLinks([...links, { ...newLink, id: Date.now().toString() }]);
            setNewLink({ title: '', url: '', category: '', description: '' });
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
    };

    const filteredLinks = links.filter((link) => {
        const matchesSearch =
            link.title.toLowerCase().includes(searchQuery.toLowerCase()) || link.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || link.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="mx-auto max-w-4xl p-6">
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold">Essential Links</h1>
                <p className="text-muted-foreground">Manage and organize important web resources</p>
            </div>

            {/* Add Link Form */}
            <Card className="mb-6">
                <CardHeader>
                    <h2 className="text-xl font-semibold">Add New Link</h2>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={newLink.title}
                                    onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                                    placeholder="Enter link title"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    type="url"
                                    value={newLink.url}
                                    onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                                    placeholder="https://example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    value={newLink.category}
                                    onChange={(e) => setNewLink({ ...newLink, category: e.target.value })}
                                    placeholder="e.g., Documentation, Support"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    value={newLink.description}
                                    onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
                                    placeholder="Optional description"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setNewLink({ title: '', url: '', category: '', description: '' })}>
                                Clear
                            </Button>
                            <Button type="submit" className="gap-2">
                                <Plus className="h-4 w-4" />
                                Add Link
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* Filters */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <Input placeholder="Search links..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="max-w-md" />
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="rounded-md border px-4 py-2">
                    <option value="all">All Categories</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Support">Support</option>
                    <option value="Resource">Resource</option>
                </select>
            </div>

            {/* Links List */}
            <div className="space-y-4">
                {filteredLinks.map((link) => (
                    <Card key={link.id} className="group transition-shadow hover:shadow-lg">
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="mb-2 flex items-center gap-2">
                                        <h3 className="text-lg font-semibold">{link.title}</h3>
                                        {link.category && <Badge variant="outline">{link.category}</Badge>}
                                    </div>
                                    <p className="text-muted-foreground mb-2">{link.description}</p>
                                    <div className="flex items-center gap-2">
                                        <ExternalLink className="text-primary h-4 w-4" />
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                            {link.url}
                                        </a>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                                            •••
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => copyToClipboard(link.url)}>
                                            <Copy className="mr-2 h-4 w-4" />
                                            Copy URL
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">
                                            <Trash className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
