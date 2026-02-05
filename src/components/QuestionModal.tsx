import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  question: string;
  onSubmit: (answer: string) => void;
}

export default function QuestionModal({ question, onSubmit }: Props) {
  const [answer, setAnswer] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      {/* Modal Card */}
      <div className="bg-white rounded-2xl p-6 w-80 text-center text-gray-800 shadow-xl">
        
        {/* ✅ Question Text */}
        <h2 className="text-lg font-semibold mb-4 text-black">
          {question}
        </h2>

        {/* ✅ Input */}
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer 💕"
          className="
            w-full
            border
            border-gray-300
            rounded-lg
            px-3
            py-2
            mb-4
            text-black
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-pink-400
          "
        />

        {/* ✅ Button */}
        <button
          disabled={!answer.trim()}
          onClick={() => onSubmit(answer)}
          className="
            bg-purple-600
            text-white
            px-4
            py-2
            rounded-full
            disabled:opacity-50
            hover:scale-105
            transition-transform
          "
        >
          Unlock Heart 💜
        </button>
      </div>
    </motion.div>
  );
}
