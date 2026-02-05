interface HeartTrackerProps {
    unlocked: number;
    total: number;
  }
  
  export default function HeartTracker({ unlocked, total }: HeartTrackerProps) {
    return (
      <div className="flex gap-3 mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className="text-3xl">
            {i < unlocked ? "❤️" : "🤍"}
          </span>
        ))}
      </div>
    );
  }
  