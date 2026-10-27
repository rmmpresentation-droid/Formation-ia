const features = [
  {
    title: "Stratégie",
    desc: "Structure ton approche et pilote ton activité avec des objectifs clairs assistés par l'IA.",
    icon: <path d="M4 19h16M7 19V9l4-3 4 3v10M7 13h8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Contenu",
    desc: "Crée des posts, scripts et vidéos percutants en quelques minutes grâce à l'IA.",
    icon: <path d="M8 5v14l11-7L8 5Z" fill="currentColor" stroke="none" />,
  },
  {
    title: "Prospection",
    desc: "Identifie, qualifie et relance tes prospects automatiquement, sans perdre de temps.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M16 10l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Automatisation",
    desc: "Mets en place des workflows qui travaillent pour toi 24h/24, même quand tu dors.",
    icon: (
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Features() {
  return (
    <section className="relative bg-[#0a1128] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            Ce que tu vas maîtriser
          </span>
          <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
            4 piliers pour booster ton activité avec l'IA
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-amber-400/40"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/0 blur-2xl transition group-hover:bg-cyan-400/20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3 className="relative mt-5 text-base font-bold uppercase tracking-wide text-white">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
