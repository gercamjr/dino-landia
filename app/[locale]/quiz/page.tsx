"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: number; // index of correct answer
  image?: string;
}

const questions: Question[] = [
  {
    question: "Which dinosaur had three big horns on its face?",
    options: ["Tyrannosaurus rex", "Triceratops", "Stegosaurus", "Velociraptor"],
    correct: 1,
  },
  {
    question: "Which dinosaur is famous for its long neck?",
    options: ["Ankylosaurus", "Parasaurolophus", "Brachiosaurus", "Triceratops"],
    correct: 2,
  },
  {
    question: "Which dinosaur had big plates on its back?",
    options: ["Stegosaurus", "Velociraptor", "T. rex", "Brachiosaurus"],
    correct: 0,
  },
  {
    question: "What did most of these dinosaurs eat?",
    options: ["Only meat", "Only plants", "Both plants and meat", "Rocks"],
    correct: 1,
  },
  {
    question: "Which dinosaur had a long crest on its head that could make sounds?",
    options: ["Ankylosaurus", "Parasaurolophus", "Stegosaurus", "T. rex"],
    correct: 1,
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

    if (index === question.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "Amazing job, little explorer! 🌟";
    if (percentage < 60) message = "Great try! You're learning so much! 🦕";

    return (
      <div className="mx-auto max-w-xl px-6 py-16 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-4xl font-semibold mb-4">Quiz Complete!</h1>
        <p className="text-2xl mb-2">You got {score} out of {questions.length} correct!</p>
        <p className="text-xl text-[#5C5146] mb-8">{message}</p>
        <button
          onClick={restartQuiz}
          className="rounded-2xl bg-[#C17E4A] px-8 py-4 text-lg font-semibold text-white hover:bg-[#A66A3A]"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <div className="mb-8">
        <div className="text-sm text-[#6B5F52] mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="h-2 bg-[#EDE6D9] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#C17E4A] transition-all" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 leading-tight">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`rounded-2xl border-2 p-5 text-left text-xl font-medium transition-all ${
              selectedAnswer === null
                ? "border-[#D9D0C0] hover:border-[#C17E4A] hover:bg-white"
                : index === question.correct
                ? "border-green-500 bg-green-50"
                : selectedAnswer === index
                ? "border-red-300 bg-red-50"
                : "border-[#D9D0C0] opacity-60"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
