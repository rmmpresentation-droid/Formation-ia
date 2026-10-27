import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: Date }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Jours", value: time.days },
    { label: "Heures", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Secondes", value: time.seconds },
  ];

  const ended = time.total <= 0;

  if (ended) {
    return (
      <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 px-6 py-5 text-center">
        <p className="text-lg font-semibold text-amber-300">
          La formation a commencé ou est terminée. À bientôt pour la prochaine session !
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-amber-400/30 bg-gradient-to-b from-white/10 to-white/0 px-2 py-3 sm:px-4 sm:py-5 backdrop-blur"
        >
          <span className="bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-2xl font-extrabold tabular-nums text-transparent sm:text-4xl">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
