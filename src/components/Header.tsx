import { GOOGLE_MEET_LINK } from "../config";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1128]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20">
            <span className="text-base font-black italic text-[#0a1128]">RMM</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide text-white">
              RISE MINDSET <span className="text-amber-400">MASTER</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
              Rise in mindset, master your future
            </p>
          </div>
        </div>

        <a
          href={GOOGLE_MEET_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2 text-sm font-bold text-[#0a1128] shadow-lg shadow-amber-500/30 transition hover:brightness-110 sm:inline-flex"
        >
          Rejoindre sur Meet
        </a>
      </div>
    </header>
  );
}
