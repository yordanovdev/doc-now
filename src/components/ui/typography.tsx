import * as React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-transformaMix sm:text-[24px] md:text-[32px] xl:text-[44px] font-[650] leading-[130%] text-foreground",
      h2: "text-foreground font-transformaMix font-[650] leading-[135%] text-[28px]",
      h4: "text-foreground font-transformaMix font-[650] leading-[130%] text-lg",
      link: "font-transformaMix font-[650] leading-[120%] text-sm text-foreground hover:text-secondary transition-all duration-250 cursor-pointer",
      lg: "font-transformaMix font-[650] leading-[120%] text-normal text-foreground hover:text-secondary transition-all duration-250 cursor-pointer",
      p: "font-poppins font-normal leading-[140%] text-normal text-foreground/70",
      sm: "font-poppins font-normal leading-[140%] text-sm text-foreground/70",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

const defaultElement: Record<string, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  muted: "p",
  small: "small",
  blockquote: "blockquote",
  code: "code",
};

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, as, className, ...props }, ref) => {
    const Component = as || defaultElement[variant || "p"];
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";
