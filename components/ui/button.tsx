import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "cyan";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, style, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9950FF] disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      // Primary = Mirainetics purple #9950FF
      default: "bg-[#9950FF] text-white hover:bg-[#8440E8] active:bg-[#7035CA] shadow-md shadow-[#9950FF]/20",
      // Secondary = blue outlined
      secondary: "bg-[#F5F7FF] text-[#4D70FF] border border-[#D4DDFF] hover:bg-[#E8EDFF]",
      // Outline = blue border
      outline: "border-2 border-[#4D70FF] text-[#4D70FF] bg-transparent hover:bg-[#F5F7FF] dark:hover:bg-[#4D70FF]/10",
      ghost: "hover:bg-[#F7F8FC] dark:hover:bg-white/5 text-[#151A2E] dark:text-[#E9ECF7]",
      link: "text-[#4D70FF] underline-offset-4 hover:underline hover:text-[#7B5CFF] p-0 h-auto",
      // Cyan — automation CTA
      cyan: "border-2 border-[#16B8D4] text-[#16B8D4] bg-transparent hover:bg-[#F2FCFE] dark:hover:bg-[#16B8D4]/10",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-12 rounded-xl px-6 text-base font-semibold",
      icon: "h-10 w-10",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string; style?: React.CSSProperties }>, {
        className: cn(combinedClassName, (children.props as { className?: string }).className),
        style: { ...style, ...(children.props as { style?: React.CSSProperties }).style },
      });
    }

    return (
      <button className={combinedClassName} ref={ref} style={style} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
