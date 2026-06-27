 export default function Home() {
  const skills = [
    "Shopify",
    "Etsy",
    "WordPress",
    "HTML",
    "CSS",
    "SEO",
    "Google Analytics",
    "Canva",
    "ChatGPT",
    "Claude",
    "GitHub",
    "Content Strategy",
  ];

  const work = [
    {
      title: "Lucky Alanka",
      label: "Shopify · Etsy · SEO · Content",
      description:
        "Website, e-commerce, and content management for a luxury jewelry brand across Shopify and Etsy.",
    },
    {
      title: "Bergonzi Violins",
      label: "WordPress · Bluehost · Digital Support",
      description:
        "Website updates, content organization, digital asset management, and online promotion support.",
    },
    {
      title: "Portfolio Website",
      label: "Next.js · Tailwind CSS · GitHub",
      description:
        "A personal portfolio built to showcase my web, e-commerce, marketing, and technology experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="font-semibold tracking-tight">Sopanha Khim</p>
          <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-violet-600">About</a>
            <a href="#work" className="hover:text-violet-600">Work</a>
            <a href="#skills" className="hover:text-violet-600">Skills</a>
            <a href="#contact" className="hover:text-violet-600">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Web & Digital Professional
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            I help businesses create better digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Through website management, e-commerce, and content strategy, I connect
            what a brand needs to communicate with how customers actually experience
            it across Shopify, Etsy, and WordPress.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-violet-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Quick Highlights
          </p>

          <div className="mt-8 grid gap-5">
            <div>
              <p className="text-4xl font-semibold">3+</p>
              <p className="mt-1 text-slate-600">Platforms: Shopify, Etsy, WordPress</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">2+</p>
              <p className="mt-1 text-slate-600">Real brand and website projects</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">7</p>
              <p className="mt-1 text-slate-600">Google digital marketing certificates</p>
            </div>
            <div>
              <p className="text-4xl font-semibold">2026</p>
              <p className="mt-1 text-slate-600">Computer Science AS expected graduation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            About
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            I bridge technology, business, and customer experience.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            My background connects computer science, website management, digital
            marketing, e-commerce, AI tools, and customer communication. I think
            about how a website looks, how it works, what it says, and how it makes
            people feel when they interact with a brand.
          </p>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Featured Work
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Real digital work across websites, e-commerce, and content.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {work.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-violet-600">{item.label}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-slate-200 bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Skills
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Tools I use and skills I’m building.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let’s connect.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            I’m open to Website Coordinator, Web Content Specialist, E-commerce
            Specialist, and Digital Marketing opportunities.
          </p>
          <a
            href="mailto:hello@sopanhakhim.com"
            className="mt-8 inline-flex rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}