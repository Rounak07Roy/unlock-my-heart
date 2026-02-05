import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

interface Props {
  answers: string[];
}

export default function LoveLetter({ answers }: Props) {
  const { width, height } = useWindowSize();
  const [accepted, setAccepted] = useState(false);

  // 🎶 Background music
  useEffect(() => {
    const audio = new Audio("/music/love.mp3");
    audio.volume = 0.35;
    audio.loop = true;
  
    const startMusic = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startMusic);
    };
  
    window.addEventListener("click", startMusic);
  
    return () => {
      audio.pause();
      window.removeEventListener("click", startMusic);
    };
  }, []);
  

  // Safe fallbacks
  const a = [
    answers[0] || "that moment our paths crossed",
    answers[1] || "one of our quiet little moments",
    answers[2] || "smile at me",
    answers[3] || "home",
    answers[4] || "everything ahead",
  ];

  // 💍 YES screen
  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center">
        <Confetti width={width} height={height} numberOfPieces={350} />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center text-gray-800"
        >
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            SHE SAID YES 💍💜
          </h1>
          <p className="text-lg">
            Happy Valentine’s Day ❤️  
            I knew it.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-6 overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-gray-800"
      >
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          You & Me 💜
        </h1>

        <Section
          her={`You said we first met at ${a[0]}.`}
          me={`I didn’t know it then, but that moment quietly changed everything for me.`}
        />

        <Section
          her={`Your favorite memory was ${a[1]}.`}
          me={`I love that it wasn’t about something perfect — just something real, something ours.`}
        />

        <Section
          her={`You said I make you smile when I ${a[2]}.`}
          me={`Every time I see that smile, I know I’d do it a hundred times over.`}
        />

        <Section
          her={`You described us as ${a[3]}.`}
          me={`That word feels right — safe, warm, and exactly where I want to be.`}
        />

        <Section
          her={`You’re excited about ${a[4]}.`}
          me={`So am I — not just for what’s coming, but because I want to face it all with you.`}
        />

        <p className="mt-8 text-center font-semibold text-purple-700">
          No matter what life brings,<br />
          I choose you. Always. ❤️
        </p>

        {/* 💍 Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setAccepted(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            YES 💜
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            YES, OBVIOUSLY 💍
          </button>
        </div>
      </motion.div>
    </div>
  );
}

/* 💬 Helper */
function Section({ her, me }: { her: string; me: string }) {
  return (
    <div className="mb-6">
      <p className="italic text-gray-600 mb-1">💬 {her}</p>
      <p className="text-gray-800">💭 {me}</p>
    </div>
  );
}
