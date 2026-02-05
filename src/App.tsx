import { useState } from "react";
import Welcome from "./components/Welcome";
import PolaroidCard from "./components/PolaroidCard";
import HeartTracker from "./components/HeartTracker";
import QuestionModal from "./components/QuestionModal";
import LoveLetter from "./components/LoveLetter";
import SparkleCursor from "./components/SparkleCursor";
import { questions } from "./data/questions";


export default function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
//   const [theme, setTheme] = useState<Theme>("purple");


  // 💌 Final screen: Love Letter
  if (started && current === questions.length) {
    return (
      <>
        <SparkleCursor />
        <LoveLetter answers={answers} />
      </>
      
    );
  }

  // 🎀 Welcome screen
  if (!started) {
    return (
      <>
        <SparkleCursor />
        <Welcome onStart={() => setStarted(true)} />
      </>
    );
  }

  const currentQuestion = questions[current];

  return (
    <>
      {/* ✨ Sparkle Cursor */}
      <SparkleCursor />

      {/* 💖 Main Valentine Flow */}
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-200 to-purple-300 flex flex-col items-center justify-center px-4">
        
        {/* ❤️ Heart Progress */}
        <HeartTracker unlocked={current} total={questions.length} />

        {/* 📸 Polaroid Memory */}
        <PolaroidCard
          photo={currentQuestion.photo}
          caption={currentQuestion.caption}
        />

        {/* 🔓 Unlock Button */}
        <button
          onClick={() => setShowQuestion(true)}
          className="mt-6 bg-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Unlock next heart 💖
        </button>

        {/* 💬 Question Modal */}
        {showQuestion && (
          <QuestionModal
            question={currentQuestion.question}
            onSubmit={(answer) => {
              setAnswers((prev) => [...prev, answer]);
              setShowQuestion(false);
              setCurrent((c) => c + 1);
            }}
          />
        )}
      </div>
    </>
  );
}
