"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-background/40 text-xs font-semibold tracking-tight">
            CG
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {site.name}
          </span>
          <span className="hidden text-sm text-foreground/60 sm:inline">
            / {site.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium tracking-tight transition hover:bg-foreground/[0.05]",
                  active ? "text-foreground" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/contact"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Let’s talk <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/projects" size="sm">
            View work <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

