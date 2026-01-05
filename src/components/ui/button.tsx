import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Primary - Deep Navy filled */
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary-dark hover:shadow-md active:scale-[0.98]",
        
        /* Secondary - Emerald CTA */
        secondary:
          "bg-secondary text-secondary-foreground shadow-emerald hover:bg-secondary-dark hover:shadow-lg active:scale-[0.98]",
        
        /* Accent - Gold highlight */
        accent:
          "bg-accent text-accent-foreground shadow-gold hover:bg-accent-dark active:scale-[0.98]",
        
        /* Destructive */
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:scale-[0.98]",
        
        /* Outline - Navy border */
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        
        /* Outline Secondary - Emerald border */
        "outline-secondary":
          "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground active:scale-[0.98]",
        
        /* Ghost */
        ghost:
          "hover:bg-muted hover:text-foreground",
        
        /* Link with underline animation */
        link:
          "text-primary underline-offset-4 hover:underline",
        
        /* Hero CTA - Premium styling */
        hero:
          "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:bg-secondary-dark active:scale-[0.98] font-semibold tracking-wide",
        
        /* Hero Outline - For dark backgrounds */
        "hero-outline":
          "border-2 border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/50 active:scale-[0.98]",
        
        /* Subtle - Muted background */
        subtle:
          "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
        
        /* Gold Premium */
        premium:
          "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-800 font-semibold shadow-gold hover:from-gold-300 hover:to-gold-400 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
