import { cn } from "@/app/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

// Define button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/50",
        secondary: "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary/50",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-foreground focus-visible:ring-gray-300 dark:hover:bg-gray-800",
        ghost: "hover:bg-gray-100 text-foreground hover:text-foreground dark:hover:bg-gray-800",
        link: "text-primary underline-offset-4 hover:underline",
        danger: "bg-error text-white hover:bg-error/90 focus-visible:ring-error/50",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 