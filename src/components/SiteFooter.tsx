import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-sm font-semibold tracking-tight">{site.name}</div>
          <div className="text-sm text-foreground/60">
            Black/white portfolio template — placeholders for now.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {site.socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="rounded-full border border-foreground/15 bg-background/30 px-4 py-2 text-sm font-medium tracking-tight text-foreground/70 hover:text-foreground hover:bg-foreground/[0.04]"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}

