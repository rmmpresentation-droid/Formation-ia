export default function Footer() {
  return (
    <footer className="relative bg-[#0a1128]">
      <div className="mx-auto max-w-5xl px-5 pb-10 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-6 text-center shadow-xl shadow-amber-500/20">
          <p className="text-lg font-black uppercase tracking-tight text-[#1a1200] sm:text-xl">
            L'intelligence artificielle pour multiplier tes résultats !
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700">
              <span className="text-xs font-black italic text-[#0a1128]">RMM</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Rise Mindset Master</p>
              <p className="text-[11px] text-slate-500">Rise in mindset, master your future</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Rise Mindset Master. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
