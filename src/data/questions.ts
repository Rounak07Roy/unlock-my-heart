import firstMeet from "../assets/first-meet.png";
import memory from "../assets/memory.png";
import smile from "../assets/smile.png";
import us from "../assets/us.png";
import future from "../assets/future.png";

export interface Question {
  id: number;
  question: string;
  photo: string;
  caption: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Where did we take this picture?",
    photo: firstMeet,
    caption: "The day everything began 💕",
  },
  {
    id: 2,
    question: "What’s your favorite memory of us?",
    photo: memory,
    caption: "A moment I’ll never forget 💫",
  },
  {
    id: 3,
    question: "What do I do that makes you smile?",
    photo: smile,
    caption: "Your smile > everything 🥰",
  },
  {
    id: 4,
    question: "One word to describe us?",
    photo: us,
    caption: "Us, always 💖",
  },
  {
    id: 5,
    question: "What are you excited for with me?",
    photo: future,
    caption: "Our future ✨",
  },
];
