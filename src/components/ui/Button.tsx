"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

function styles(variant: CommonProps["variant"], size: CommonProps["size"]) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2";
  const sizes = size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-5 text-sm";
  const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/85",
    secondary:
      "border border-foreground/15 bg-background/40 text-foreground hover:bg-foreground/[0.04] active:bg-foreground/[0.06]",
    ghost: "text-foreground/80 hover:text-foreground hover:bg-foreground/[0.04]",
  };
  return cn(base, sizes, variants[variant ?? "primary"]);
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: HTMLMotionProps<"button"> & CommonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 34 }}
      className={cn(styles(variant, size), className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & CommonProps) {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 34 }}
      className="inline-flex"
    >
      <Link
        href={href}
        className={cn(styles(variant, size), className)}
        {...props}
      />
    </motion.div>
  );
}

