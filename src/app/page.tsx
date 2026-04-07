import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { projects, site } from "@/lib/site";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="border-b border-foreground/10">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-7">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    {site.availability}
                  </Badge>
                  <Badge className="text-foreground/70">{site.location}</Badge>
                  <Badge className="text-foreground/70">React</Badge>
                  <Badge className="text-foreground/70">Next.js</Badge>
                  <Badge className="text-foreground/70">AWS</Badge>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                  Full‑Stack <span className="text-foreground/60">Coder</span> &
                  more<span className="text-foreground/60">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  Hi, I’m <span className="text-foreground">{site.name}</span>.
                  {` `}
                  {site.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="flex flex-wrap items-center gap-3">
                  <ButtonLink href="/projects">
                    See projects <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="secondary">
                    Let’s talk
                  </ButtonLink>
                  <Link
                    href="/about"
                    className="rounded-full px-3 py-2 text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]"
                  >
                    Read story
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="space-y-3">
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-5 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      3 years
                    </div>
                    <div className="text-sm text-foreground/60">
                      Full‑stack experience
                    </div>
                  </div>
                  <div className="text-sm text-foreground/60">01</div>
                </div>
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-5 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      15+
                    </div>
                    <div className="text-sm text-foreground/60">
                      Projects shipped
                    </div>
                  </div>
                  <div className="text-sm text-foreground/60">02</div>
                </div>
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-5 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      07
                    </div>
                    <div className="text-sm text-foreground/60">
                      Core skills
                    </div>
                  </div>
                  <div className="text-sm text-foreground/60">03</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <div className="space-y-2">
                <div className="text-sm font-semibold tracking-tight text-foreground/70">
                  Selected work
                </div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projects that ship, scale, and feel good.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="hidden sm:block">
              <ButtonLink href="/projects" variant="secondary" size="sm">
                View all <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {projects.filter((p) => p.featured).slice(0, 2).map((p, idx) => (
              <Reveal key={p.slug} delay={0.06 + idx * 0.05}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative block overflow-hidden rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur transition hover:border-foreground/20"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-foreground/[0.06] blur-2xl" />
                    <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-foreground/[0.05] blur-2xl" />
                  </div>

                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-xs font-medium tracking-tight text-foreground/60">
                          {(p.year ?? "—") + " · " + (p.role ?? "Project")}
                        </div>
                        <div className="text-xl font-semibold tracking-tight">
                          {p.title}
                        </div>
                        <div className="text-sm text-foreground/70">
                          {p.tagline}
                        </div>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/40 text-foreground/70 transition group-hover:text-foreground group-hover:border-foreground/20">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.slice(0, 4).map((s) => (
                        <Badge key={s} className="text-foreground/70">
                          {s}
                        </Badge>
                      ))}
                    </div>
                    <ul className="grid gap-2 text-sm text-foreground/70">
                      {p.details.features.slice(0, 2).map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.18} className="md:row-span-1">
              <div className="relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="space-y-2">
                    <div className="text-xs font-medium tracking-tight text-foreground/60">
                      Focus
                    </div>
                    <div className="text-xl font-semibold tracking-tight">
                      Black & white UI, sharp typography, strong systems (AWS).
                    </div>
                    <div className="text-sm leading-7 text-foreground/70">
                      Inspired by the density of X and the calm minimalism of
                      Cursor/ChatGPT—clean grids, subtle borders, and motion that
                      feels responsive rather than loud.
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Design systems",
                      "APIs",
                      "AWS",
                      "Performance",
                      "Accessibility",
                      "DX",
                      "Animations",
                    ].map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22} className="mt-10 sm:hidden">
            <ButtonLink href="/projects" variant="secondary">
              View all <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-foreground/10">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Anything in mind? Let’s talk.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-foreground/70">
                Tell me what you’re building and the constraints you care about.
                I’ll respond with a clear plan, realistic milestones, and a
                lightweight system that stays fast.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  About me
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold tracking-tight">
                      Quick details
                    </div>
                    <div className="text-sm text-foreground/60">
                      Placeholder stats + signals
                    </div>
                  </div>
                  <Badge>Updated weekly</Badge>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { k: "Response time", v: "< 24h" },
                    { k: "Timezone", v: "CET" },
                    { k: "Stack", v: "Next.js · Node · DB" },
                    { k: "Style", v: "Minimal · High contrast" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                    >
                      <div className="text-xs font-medium tracking-tight text-foreground/60">
                        {row.k}
                      </div>
                      <div className="mt-1 text-sm font-semibold tracking-tight">
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
    </div>
  );
}
