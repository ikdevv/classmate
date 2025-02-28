import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const quizQuestions = [
    {
        id: 1,
        question: "What is the main advantage of React's virtual DOM?",
        options: [
            'Direct DOM manipulation',
            'Improved performance through efficient updates',
            'Automatic state management',
            'Built-in routing system',
        ],
        correct: 1,
    },
    {
        id: 2,
        question: 'Which hook is used to manage side effects in functional components?',
        options: ['useState', 'useEffect', 'useContext', 'useReducer'],
        correct: 1,
    },
    // Add more questions...
];

export default function Quizes() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setProgress(((currentQuestion + 1) / quizQuestions.length) * 100);
    }, [currentQuestion]);

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswer(null);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
            setSelectedAnswer(null);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="mx-auto max-w-3xl p-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">React Fundamentals Quiz</h1>
                <Badge variant="outline" className="gap-2 px-4 py-2">
                    <Clock className="h-4 w-4" />
                    <span>{formatTime(timeLeft)}</span>
                </Badge>
            </div>

            <Progress value={progress} className="mb-6 h-2" />

            <Card className="shadow-lg">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                            Question {currentQuestion + 1} of {quizQuestions.length}
                        </span>
                        <Badge variant="secondary">Points: 1</Badge>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <h2 className="text-xl font-semibold">{quizQuestions[currentQuestion].question}</h2>

                    <RadioGroup
                        value={selectedAnswer?.toString()}
                        onValueChange={(value) => setSelectedAnswer(parseInt(value))}
                        className="space-y-3"
                    >
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <div
                                key={index}
                                className={`flex items-center space-x-3 rounded-lg border p-4 transition-all ${
                                    selectedAnswer === index ? 'border-primary bg-primary/10' : 'hover:border-primary/30'
                                }`}
                            >
                                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                <Label htmlFor={`option-${index}`} className="cursor-pointer text-base">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t pt-6">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous
                    </Button>

                    {currentQuestion === quizQuestions.length - 1 ? (
                        <Button>Submit Quiz</Button>
                    ) : (
                        <Button onClick={handleNext} disabled={!selectedAnswer}>
                            Next Question
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
