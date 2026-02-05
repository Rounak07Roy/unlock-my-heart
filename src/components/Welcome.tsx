import { motion } from "framer-motion";

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-300 via-rose-200 to-purple-300 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center max-w-md w-full"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-pink-600 mb-4"
        >
          Unlock My Heart 💖
        </motion.h1>

        <p className="text-gray-700 mb-8">
          I made something special just for you 🥰  
          Answer a few questions and unlock my heart.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg font-medium"
        >
          Start the Journey 💕
        </motion.button>
      </motion.div>
    </div>
  );
}
