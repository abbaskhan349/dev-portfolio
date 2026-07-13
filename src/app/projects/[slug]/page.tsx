import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Lock } from "lucide-react";
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
                  <Badge>{project.year ?? "—"}</Badge>
                  <Badge className="text-foreground/70">
                    {project.role ?? "Project"}
                  </Badge>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                  {project.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
                  {project.tagline}
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
                  <div className="text-sm font-semibold tracking-tight">
                    Project links
                  </div>
                  <Badge>Case study</Badge>
                </div>
                <div className="mt-6 grid gap-3">
                  {project.demoUrl && (
                    <ButtonLink href={project.demoUrl} className="justify-between">
                      Live preview <ArrowUpRight className="h-4 w-4" />
                    </ButtonLink>
                  )}
                  {project.githubUrl ? (
                    <ButtonLink
                      href={project.githubUrl}
                      variant="secondary"
                      className="justify-between"
                    >
                      Source code <ArrowUpRight className="h-4 w-4" />
                    </ButtonLink>
                  ) : (
                    <div
                      aria-disabled="true"
                      className="inline-flex h-11 cursor-not-allowed items-center justify-between gap-2 rounded-full border border-foreground/10 bg-background/20 px-5 text-sm font-medium tracking-tight text-foreground/40"
                    >
                      Private repository <Lock className="h-4 w-4" />
                    </div>
                  )}
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
                  {project.details.overview}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Highlights
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-foreground/75">
                  {project.details.features.map((h) => (
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

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Challenges
                </div>
                <p className="mt-3 text-pretty leading-7 text-foreground/70">
                  {project.details.challenges}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Solutions
                </div>
                <p className="mt-3 text-pretty leading-7 text-foreground/70">
                  {project.details.solutions}
                </p>
              </div>
            </Reveal>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {project.images.map((image, idx) => (
                <Reveal key={image.src} delay={0.05 + idx * 0.05}>
                  <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm font-semibold tracking-tight">
                        {image.label}
                      </div>
                      <Badge>PNG</Badge>
                    </div>
                    <Image
                      src={image.src}
                      alt={image.label}
                      width={480}
                      height={320}
                      className="mt-6 h-32 w-full rounded-2xl border border-foreground/10 object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

