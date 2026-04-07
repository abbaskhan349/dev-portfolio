import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { education, experience, site, skills } from "@/lib/site";

export default function AboutPage() {
  const skillsByCategory = skills.reduce(
    (acc, s) => {
      (acc[s.category] ??= []).push(s);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <div className="pb-20">
      <section className="border-b border-foreground/10">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <Reveal>
                <div className="text-sm font-semibold tracking-tight text-foreground/70">
                  About
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Full‑stack, product‑minded—shipping fast UI with reliable
                  systems behind it.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  Hi, I’m <span className="text-foreground">{site.name}</span>.
                  I build scalable web applications using React, Next.js,
                  TypeScript, Node.js, and cloud tooling.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React / Next.js",
                    "TypeScript",
                    "Canvas / D3",
                    "Admin dashboards",
                    "CRMs",
                    "Performance",
                  ].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink href="/projects">See work</ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Contact
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Snapshot
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    { k: "Based in", v: site.location },
                    { k: "Experience", v: "3 years" },
                    { k: "Focus", v: "Full‑stack web apps" },
                    { k: "Email", v: site.email },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-background/40 p-4"
                    >
                      <div className="text-sm text-foreground/60">{row.k}</div>
                      <div className="text-sm font-semibold tracking-tight">
                        {row.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="space-y-3">
                <div className="text-sm font-semibold tracking-tight text-foreground/70">
                  Experience
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Work history (from your previous portfolio).
                </h2>
                <p className="text-pretty leading-7 text-foreground/70">
                  Ported from your old repo, now styled in the new black/white
                  theme.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {experience.map((it, idx) => (
                <Reveal key={`${it.company}-${it.startDate}`} delay={0.06 + idx * 0.05}>
                  <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold tracking-tight">
                          {it.position}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {it.company} · {it.description}
                        </div>
                        <ul className="mt-3 grid gap-2 text-sm text-foreground/70">
                          {it.achievements.slice(0, 4).map((a) => (
                            <li key={a} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                              <span className="text-pretty leading-7">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Badge className="text-foreground/70">
                        {it.startDate}–{it.endDate}
                      </Badge>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="space-y-3">
                <div className="text-sm font-semibold tracking-tight text-foreground/70">
                  Skills
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  What I use most.
                </h2>
                <p className="text-pretty leading-7 text-foreground/70">
                  Grouped by category from your old data.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {Object.entries(skillsByCategory).map(([cat, list], idx) => (
                <Reveal key={cat} delay={0.06 + idx * 0.05}>
                  <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm font-semibold tracking-tight capitalize">
                        {cat}
                      </div>
                      <Badge className="text-foreground/70">
                        {list.length} skills
                      </Badge>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {list.map((s) => (
                        <Badge key={s.name} className="text-foreground/70">
                          {s.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4">
            <Reveal>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold tracking-tight">
                      Education
                    </div>
                    <div className="text-sm text-foreground/60">
                      From your old portfolio
                    </div>
                  </div>
                  <Badge className="text-foreground/70">
                    {education[0]?.startDate}–{education[0]?.endDate}
                  </Badge>
                </div>
                <div className="mt-4 grid gap-3">
                  {education.map((e) => (
                    <div
                      key={`${e.institution}-${e.startDate}`}
                      className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                    >
                      <div className="text-sm font-semibold tracking-tight">
                        {e.degree} · {e.field}
                      </div>
                      <div className="mt-1 text-sm text-foreground/70">
                        {e.institution}
                      </div>
                      <div className="mt-2 text-sm text-foreground/70">
                        {e.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

