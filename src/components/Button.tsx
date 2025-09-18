// src/components/Button.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "brand";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    href?: string;
}

export function Button({
                           children,
                           variant = "primary",
                           size = "md",
                           className = "",
                           onClick,
                           type = "button",
                           disabled = false,
                           href,
                       }: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center select-none " +
        "font-semibold uppercase tracking-wide " +
        "rounded-full transition-colors duration-200 " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 " +
        "disabled:opacity-60 disabled:cursor-not-allowed";

    const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
        primary:
            "text-white bg-gradient-to-b from-rose-500 to-fuchsia-600 " +
            "ring-1 ring-white/20 shadow-lg shadow-rose-900/20 " +
            "hover:from-rose-400 hover:to-fuchsia-500 " +
            "active:from-rose-600 active:to-fuchsia-700",

        secondary:
            "text-white bg-slate-800 hover:bg-slate-700 " +
            "ring-1 ring-white/10",

        outline:
            "text-white ring-1 ring-white/40 hover:bg-white/10",

        ghost:
            "text-white/80 hover:text-white hover:bg-white/10",

        // 🔥 Novo variant inspirado na logo
        brand:
            "text-white bg-gradient-to-r from-orange-500 to-red-600 " +
            "ring-1 ring-white/20 shadow-lg shadow-orange-900/20 " +
            "hover:from-orange-400 hover:to-red-500 " +
            "active:from-orange-600 active:to-red-700",
    };

    const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
        sm: "h-9 px-4 text-[11px]",
        md: "h-10 px-5 text-[12px]",
        lg: "h-12 px-7 text-[13px]",
    };

    const classes = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
