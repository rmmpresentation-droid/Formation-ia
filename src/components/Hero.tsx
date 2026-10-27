import Countdown from "./Countdown";
import {
  EVENT_DATE,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  GOOGLE_MEET_LINK,
} from "../config";

const bullets = [
  "Gagne du temps",
  "Automatise tes tâches",
  "Crée du contenu percutant",
  "Attire et fidélise plus de prospects",
  "Développe ton réseau avec l'IA",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1128] pb-20 pt-32 lg:pt-40">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              <span>Apprendre</span>
              <span className="text-amber-400">•</span>
              <span>Évoluer</span>
              <span className="text-amber-400">•</span>
              <span>Agir</span>
              <span className="text-amber-400">•</span>
              <span>Réussir</span>
            </div>

            <p className="mt-5 text-lg font-semibold italic text-white">
              Un meilleur toi, <span className="text-amber-400">demain.</span>
            </p>

            <h1 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
              <span className="block rounded-lg bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 px-3 py-1 text-[#1a1200] shadow-lg shadow-amber-500/20 w-fit">
                Formation
              </span>
              <span className="mt-3 block">
                <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  L'IA
                </span>{" "}
                au service
              </span>
              <span className="block">
                du{" "}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  networker
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base font-medium text-slate-300 sm:text-lg">
              Des outils concrets pour booster ton activité.
            </p>

            <ul className="mt-7 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10 text-amber-400">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth={3}>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <div className="flex items-center gap-2 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-amber-400" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
                </svg>
                <span className="font-bold">{EVENT_DATE_LABEL}</span>
              </div>
              <span className="hidden h-5 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-amber-400" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-bold">{EVENT_TIME_LABEL}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={GOOGLE_MEET_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-3.5 text-sm font-bold text-[#0a1128] shadow-xl shadow-amber-500/30 transition hover:brightness-110"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 3.5V7l-4 3.5Z" />
                </svg>
                Rejoindre sur Google Meet
              </a>
              <a
                href="#inscription"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Voir le QR code
              </a>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-amber-400/20 to-cyan-400/10 blur-3xl" />
              <img
                src="/images/ai-robot.png"
                alt="Assistant IA robot RMM"
                className="relative mx-auto w-full max-w-xs drop-shadow-[0_0_40px_rgba(56,189,248,0.25)] sm:max-w-sm"
              />
            </div>

            <div className="w-full max-w-sm">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                La formation commence dans
              </p>
              <Countdown target={EVENT_DATE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
