import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-foreground/10">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="space-y-3">
                <div className="text-sm font-semibold tracking-tight text-foreground/70">
                  Projects
                </div>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  Work that’s built to last.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  A curated selection with placeholder case studies for now.
                  Each project page shows structure, typography, and motion.
                </p>
              </div>
              <ButtonLink href="/contact" variant="secondary" size="sm">
                Hire me <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/30 px-4 py-2 text-sm text-foreground/70 backdrop-blur">
                <Search className="h-4 w-4 text-foreground/50" />
                <span>Search (placeholder)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", "Full‑stack", "Frontend", "Backend", "Systems"].map(
                  (t) => (
                    <Badge key={t} className="cursor-default">
                      {t}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid gap-4">
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={0.04 + idx * 0.05}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur transition hover:border-foreground/20 md:flex-row md:items-center md:justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-tight text-foreground/60">
                      <span>{p.year ?? "—"}</span>
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      <span>{p.role ?? "Project"}</span>
                      <span className="h-1 w-1 rounded-full bg-foreground/30" />
                      <span>{p.stack.slice(0, 2).join(" · ")}</span>
                    </div>
                    <div className="text-xl font-semibold tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-sm text-foreground/70">
                      {p.tagline}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    {p.stack.slice(0, 4).map((s) => (
                      <Badge key={s} className="text-foreground/70">
                        {s}
                      </Badge>
                    ))}
                    <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/40 text-foreground/70 transition group-hover:text-foreground group-hover:border-foreground/20">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

