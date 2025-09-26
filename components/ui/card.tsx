import { HTMLAttributes } from "react"

function cn(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base
}

export type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm",
        className,
      )}
    />
  )
}

export type CardContentProps = HTMLAttributes<HTMLDivElement>

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      {...props}
      className={cn("p-6 text-slate-800", className)}
    />
  )
}
