// src/components/FeatureCard.tsx
import { ReactNode } from "react";
import Link from "next/link";

type CardSize = "sm" | "md" | "lg" | "xl";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    href?: string;
    iconColor?: string;
    iconBgColor?: string;
    className?: string;
    size?: CardSize; // default: 'md'
}

const SIZE_MINH: Record<CardSize, string> = {
    sm: "min-h-[260px]",
    md: "min-h-[320px]",
    lg: "min-h-[380px]",
    xl: "min-h-[440px]",
};

export default function FeatureCard({
                                        icon,
                                        title,
                                        description,
                                        href,
                                        iconColor = "text-yellow-400",
                                        iconBgColor = "bg-gray-800/40",
                                        className = "",
                                        size = "md",
                                    }: FeatureCardProps) {
    const cardClasses = `
    ${SIZE_MINH[size]}
    w-full h-full
    bg-gray-900/80 hover:bg-gray-900/100 transition
    border border-gray-700 rounded-2xl shadow-lg
    text-center p-8
    flex flex-col items-center justify-center
    ${className}
  `;

    const content = (
        <div className={cardClasses}>
            {/* Badge */}
            <div
                className={`w-16 h-16 ${iconBgColor} rounded-full mb-4
                    flex items-center justify-center overflow-hidden`}
            >
                {/* Ícone agora = 64px e preenche 100% (SVG/IMG) */}
                <div
                    className={`relative w-16 h-16 ${iconColor}
                      [&>svg]:w-full [&>svg]:h-full
                      [&>img]:w-full [&>img]:h-full [&>img]:object-contain`}
                >
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );

    return href ? (
        <Link href={href} className="block w-full h-full">
            {content}
        </Link>
    ) : (
        content
    );
}
