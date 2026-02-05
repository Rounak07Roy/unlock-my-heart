import { Theme } from "../Theme";

interface Props {
  current: Theme;
  onChange: (t: Theme) => void;
}

export default function ThemeSwitcher({ current, onChange }: Props) {
  return (
    <div className="fixed top-4 right-4 bg-white/80 backdrop-blur rounded-full px-4 py-2 flex gap-2 shadow">
      <button onClick={() => onChange("pink")} className="text-xl">🌸</button>
      <button onClick={() => onChange("purple")} className="text-xl">🌙</button>
      <button onClick={() => onChange("sunset")} className="text-xl">☀️</button>
    </div>
  );
}
