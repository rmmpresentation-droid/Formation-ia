const items = [
  {
    title: "Des cas pratiques adaptés au MLM",
    desc: "Des exemples concrets pensés spécifiquement pour les networkers et le marketing de réseau.",
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M2 20c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5M14.5 14.8c2.9.4 5.5 2.6 5.5 5.2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Des outils accessibles",
    desc: "Pas besoin d'être technique : des outils simples, directement applicables dès la fin de la formation.",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.4.3.6.8.6 1.3V16h6v-.9c0-.5.2-1 .6-1.3A6 6 0 0 0 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Une communauté de networkers motivés",
    desc: "Rejoins un groupe engagé qui avance ensemble vers la réussite grâce à l'IA.",
    icon: (
      <path d="M3 17l5-5 4 4 8-8M13 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Highlights() {
  return (
    <section className="relative border-y border-white/10 bg-[#0d1733] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
                {it.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
