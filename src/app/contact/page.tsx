import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
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
              Tell me about your project, timeline, and constraints — I read
              every message personally.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6 backdrop-blur">
                <div className="text-sm font-semibold tracking-tight">
                  Get in touch
                </div>
                <div className="mt-1 text-sm text-foreground/60">
                  Reach me directly — whichever is easiest for you.
                </div>

                <div className="mt-6 grid gap-3">
                  <ButtonLink
                    href={`mailto:${site.email}`}
                    className="justify-between"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> {site.email}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    variant="secondary"
                    className="justify-between"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4" /> {site.phone}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
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
