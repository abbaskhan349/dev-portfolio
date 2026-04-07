import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { projects } from "@/lib/site";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="pb-20">
      <section className="border-b border-foreground/10">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6">
              <Reveal delay={0.04}>
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.year}</Badge>
                  <Badge className="text-foreground/70">{project.role}</Badge>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  {project.tagline} This is a placeholder case study with the
                  final layout structure: overview, highlights, stack, gallery,
                  and outcomes.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge key={s} className="text-foreground/70">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold tracking-tight">
                      Project links
                    </div>
                    <div className="text-sm text-foreground/60">
                      Placeholder buttons
                    </div>
                  </div>
                  <Badge>Case study</Badge>
                </div>
                <div className="mt-6 grid gap-3">
                  <ButtonLink href="#" className="justify-between">
                    Live preview <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="#" variant="secondary" className="justify-between">
                    Source code <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "Scope", v: "8 weeks" },
                    { k: "Users", v: "B2B" },
                    { k: "Impact", v: "+23%" },
                  ].map((m) => (
                    <div
                      key={m.k}
                      className="rounded-2xl border border-foreground/10 bg-background/40 p-3"
                    >
                      <div className="text-[11px] font-medium tracking-tight text-foreground/60">
                        {m.k}
                      </div>
                      <div className="mt-1 text-sm font-semibold tracking-tight">
                        {m.v}
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
                  Overview
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  The problem, the constraints, and the system.
                </h2>
                <p className="text-pretty leading-7 text-foreground/70">
                  This space will later become your real write-up. For now, it’s
                  designed to read like a high-signal thread: short paragraphs,
                  bold statements, and scannable details.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Highlights
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-foreground/75">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-foreground/10 bg-background/40">
                        <Check className="h-3.5 w-3.5 text-foreground/70" />
                      </span>
                      <span className="text-pretty leading-7">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Hero", "Dashboard", "Flow"].map((label, idx) => (
              <Reveal key={label} delay={0.05 + idx * 0.05}>
                <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold tracking-tight">
                        {label} mock
                      </div>
                      <div className="text-sm text-foreground/60">
                        Placeholder preview
                      </div>
                    </div>
                    <Badge>PNG</Badge>
                  </div>
                  <div className="mt-6 h-32 rounded-2xl border border-foreground/10 bg-[linear-gradient(135deg,rgba(255,255,255,.06),transparent_55%),linear-gradient(225deg,rgba(255,255,255,.04),transparent_60%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,.05),transparent_55%),linear-gradient(225deg,rgba(255,255,255,.03),transparent_60%)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

