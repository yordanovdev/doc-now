import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "px-5 py-4 rounded-[1000px] w-fit cursor-pointer",
  {
    variants: {
      variant: {
        filled: "bg-primary min-w-35 hover:bg-secondary transition-all duration-400",
        outlined: "bg-transparent min-w-35 border border-primary hover:bg-primary transition-all duration-400",
        blank: "bg-transparent min-w-35",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "filled",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

