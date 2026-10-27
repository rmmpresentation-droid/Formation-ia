import Countdown from "./Countdown";
import {
  EVENT_DATE,
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  GOOGLE_MEET_LINK,
  QR_CODE_URL,
} from "../config";

export default function JoinSection() {
  return (
    <section id="inscription" className="relative overflow-hidden bg-[#0a1128] py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#101c40] via-[#0d1733] to-[#0a1128] shadow-2xl shadow-black/40">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Rejoins-nous
              </span>
              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Une place t'attend pour cette formation live
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                La formation se déroule en direct sur Google Meet. Clique sur le bouton ci-dessous
                ou scanne le QR code pour rejoindre instantanément.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-amber-400" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
                  </svg>
                  {EVENT_DATE_LABEL}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-amber-400" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {EVENT_TIME_LABEL}
                </span>
              </div>

              <a
                href={GOOGLE_MEET_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 text-sm font-bold text-[#0a1128] shadow-xl shadow-amber-500/30 transition hover:brightness-110"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 3.5V7l-4 3.5Z" />
                </svg>
                Rejoindre la formation sur Google Meet
              </a>

              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Compte à rebours
                </p>
                <Countdown target={EVENT_DATE} />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="rounded-xl bg-white p-3 shadow-lg">
                <img src={QR_CODE_URL} alt="QR code pour rejoindre la formation" className="h-44 w-44 sm:h-52 sm:w-52" />
              </div>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">
                Scannez le QR code
              </p>
              <p className="text-center text-xs text-slate-400">
                pour rejoindre la formation directement sur Google Meet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
