import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-foreground/10">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <div className="text-sm font-semibold tracking-tight text-foreground/70">
              Contact
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Let’s build something sharp.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
              This is a design-only form (placeholders). Later we can wire email,
              a backend endpoint, or a service like Resend.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold tracking-tight">
                      Send a message
                    </div>
                    <div className="text-sm text-foreground/60">
                      Placeholder fields
                    </div>
                  </div>
                  <Badge>Form</Badge>
                </div>

                <form className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium tracking-tight text-foreground/80">
                      Name
                    </label>
                    <input
                      placeholder="Your name"
                      className="h-11 rounded-2xl border border-foreground/10 bg-background/40 px-4 text-sm outline-none ring-offset-background placeholder:text-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium tracking-tight text-foreground/80">
                      Email
                    </label>
                    <input
                      placeholder="you@company.com"
                      className="h-11 rounded-2xl border border-foreground/10 bg-background/40 px-4 text-sm outline-none ring-offset-background placeholder:text-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium tracking-tight text-foreground/80">
                      Message
                    </label>
                    <textarea
                      placeholder="What are you building?"
                      rows={6}
                      className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-3 text-sm outline-none ring-offset-background placeholder:text-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button type="button">
                      Send message <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <Link
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]"
                    >
                      <Mail className="h-4 w-4" />
                      {site.email}
                    </Link>
                  </div>
                </form>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                  <div className="text-sm font-semibold tracking-tight">
                    Quick links
                  </div>
                  <div className="mt-4 grid gap-2">
                    {site.socials.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/40 px-4 py-3 text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]"
                      >
                        {s.label} <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                  <div className="text-sm font-semibold tracking-tight">
                    What to include
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/70">
                    {[
                      "Goal + timeline",
                      "Similar products you like",
                      "Must-have features",
                      "Constraints (budget, stack, etc.)",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/35" />
                        <span className="text-pretty leading-7">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

