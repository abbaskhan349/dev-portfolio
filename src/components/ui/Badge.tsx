import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-foreground/15 bg-background/30 px-3 py-1 text-xs font-medium tracking-tight text-foreground/80 backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

