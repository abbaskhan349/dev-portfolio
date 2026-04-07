import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function AboutPage() {
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
                  I like building calm, sharp interfaces—then backing them with
                  resilient systems.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  Hi, I’m <span className="text-foreground">{site.name}</span>.
                  This page is placeholder content, designed to show the final
                  rhythm: dense, readable, and high contrast—like a good thread.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend systems",
                    "Backend reliability",
                    "Product thinking",
                    "A11y-first",
                    "Performance",
                    "DX",
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
                    { k: "Focus", v: "Full‑stack product work" },
                    { k: "Style", v: "Black/white, bold, minimal" },
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
                  Timeline
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  A short, scannable story.
                </h2>
                <p className="text-pretty leading-7 text-foreground/70">
                  This structure works great once you swap placeholders with
                  real roles, companies, and outcomes.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {[
                {
                  y: "2026",
                  t: "Shipping product UI",
                  d: "Design systems, motion, and fast navigation patterns.",
                },
                {
                  y: "2025",
                  t: "Scaling backend systems",
                  d: "Queues, reliability, idempotency, and observability.",
                },
                {
                  y: "2024",
                  t: "Full‑stack foundations",
                  d: "End‑to‑end delivery, clean architecture, strong UX.",
                },
              ].map((it, idx) => (
                <Reveal key={it.y} delay={0.06 + idx * 0.05}>
                  <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-sm font-semibold tracking-tight">
                          {it.t}
                        </div>
                        <div className="text-sm text-foreground/70">{it.d}</div>
                      </div>
                      <Badge className="text-foreground/70">{it.y}</Badge>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

