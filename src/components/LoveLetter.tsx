import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useRef, useState } from "react";

interface Props {
  answers: string[];
}

export default function LoveLetter({ answers }: Props) {
  const { width, height } = useWindowSize();
  const [accepted, setAccepted] = useState(false);

  // 🎶 Music
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = new Audio("/music/love.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  // 💻 Reliable desktop detection
  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  // 💍 Button logic
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [heartPop, setHeartPop] = useState(false);

  // Safe fallbacks for answers
  const a = [
    answers[0] || "that moment our paths crossed",
    answers[1] || "one of our quiet little moments",
    answers[2] || "smile at me",
    answers[3] || "home",
    answers[4] || "everything ahead",
  ];

  // 💖 YES accepted screen
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
          <p className="text-lg">Happy Valentine’s Day ❤️</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black flex items-center justify-center px-6 overflow-hidden">
      <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

      {/* 🔊 Mute toggle */}
      <button
        onClick={() => {
          if (!audioRef.current) return;
          if (muted) audioRef.current.play().catch(() => {});
          else audioRef.current.pause();
          setMuted(!muted);
        }}
        className="fixed top-4 left-4 bg-white/80 rounded-full px-4 py-2 shadow z-50"
      >
        {muted ? "🔇" : "🔊"}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-gray-800 relative"
      >
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          You & Me 💜
        </h1>

        <Section her={`You said we first met at ${a[0]}.`} me="That moment quietly changed everything for me." />
        <Section her={`Your favorite memory was ${a[1]}.`} me="I love that it was simple, real, and ours." />
        <Section her={`You said I make you smile when I ${a[2]}.`} me="Seeing that smile makes it all worth it." />
        <Section her={`You described us as ${a[3]}.`} me="That word feels exactly right." />
        <Section her={`You’re excited about ${a[4]}.`} me="So am I — especially because it’s with you." />

        <p className="mt-8 text-center font-semibold text-purple-700">
          I choose you. Always. ❤️
        </p>

        {/* 💍 YES / NO Buttons */}
        <div className="mt-10 flex gap-6 justify-center relative h-24">
          {/* 💖 Heart pop */}
          <AnimatePresence>
            {heartPop && (
              <motion.div
                initial={{ scale: 0.4, opacity: 1, y: 0 }}
                animate={{ scale: 1.6, opacity: 0, y: -40 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute -top-10 text-3xl"
                onAnimationComplete={() => setHeartPop(false)}
              >
                💖
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✅ YES */}
          <motion.button
            onClick={() => setAccepted(true)}
            animate={{ scale: yesScale }}
            transition={{ type: "spring", stiffness: 260 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg text-lg z-10"
          >
            YES 💜
          </motion.button>

          {/* ❌ NO */}
          <motion.button
            animate={noPos}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={() => {
              if (isDesktop) {
                setNoPos({
                  x: Math.random() * 220 - 110,
                  y: Math.random() * 140 - 70,
                });
              }
            }}
            onClick={() => {
              if (!isDesktop) {
                setYesScale((s) => s + 0.25);
                setHeartPop(true);
              }
            }}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-lg text-lg cursor-pointer select-none"
          >
            NO 🙄
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ her, me }: { her: string; me: string }) {
  return (
    <div className="mb-6">
      <p className="italic text-gray-600 mb-1">💬 {her}</p>
      <p className="text-gray-800">💭 {me}</p>
    </div>
  );
}
