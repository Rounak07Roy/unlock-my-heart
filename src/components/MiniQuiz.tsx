import { useState } from "react";
import { miniQuiz } from "../data/miniQuiz";

interface Props {
  onComplete: () => void;
}

export default function MiniQuiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const q = miniQuiz[current];

  const revealAnswer = () => {
    const correct =
      input.trim().toLowerCase() === q.answer.toLowerCase();

    setIsCorrect(correct);
    setRevealed(true);
  };

  const next = () => {
    setInput("");
    setRevealed(false);
    setIsCorrect(null);

    if (current === miniQuiz.length - 1) {
      onComplete();
    } else {
      setCurrent((c) => c + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-6">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-md w-full text-center text-gray-800">
        
        <h2 className="text-xl font-semibold mb-4">
          {q.question}
        </h2>

        {!revealed ? (
          <>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
                w-full 
                border 
                border-gray-300 
                rounded-lg 
                px-4 
                py-2 
                mb-4 
                text-black 
                bg-white
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-400
              "
              placeholder="Your answer 💭"
            />

            <button
              onClick={revealAnswer}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Check 💜
            </button>
          </>
        ) : (
          <>
            {isCorrect ? (
              <p className="text-lg mb-4">
                <span className="font-semibold text-green-600">
                  Yayyy 💖 You got it right —
                </span>{" "}
                <span className="text-purple-700">{q.answer}</span>
              </p>
            ) : (
              <p className="text-lg mb-4">
                <span className="font-semibold text-pink-600">
                  Uh uh 😌 You got it wrong —
                </span>{" "}
                it is <span className="text-purple-700">{q.answer}</span>
              </p>
            )}

            <button
              onClick={next}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Next 💫
            </button>
          </>
        )}
      </div>
    </div>
  );
}
