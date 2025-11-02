'use client'

import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

interface HeroBlockProps {
  data: {
    title?: string;
    subtitle?: string;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    secondaryButton?: { text: string; link: string };
    backgroundImage?: string;
    backgroundColor?: any;
    textColor?: any;
    alignment?: string;
    height?: string;
    overlayPattern?: 'none' | 'grid' | 'diagonal' | 'dots';
  };
}

export function HeroBlock({ data }: HeroBlockProps) {
  const alignment = data.alignment || "left";
  const textAlign = alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left";
  const justifyContent = alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start";

  const bgColor = data.backgroundColor?.hex || data.backgroundColor;
  const textColor = data.textColor?.hex || data.textColor || '#ffffff';
  const height = data.height === 'auto' ? 'min-h-[500px]' : `h-[${data.height}]`;

  const patternStyles = {
    none: '',
    grid: 'bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]',
    diagonal: 'bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)_10px,transparent_10px,transparent_20px)]',
    dots: 'bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]',
  };

  return (
    <section
      className={`relative overflow-hidden ${height} flex items-center`}
      style={{
        backgroundImage: data.backgroundImage ? `url(${data.backgroundImage})` : undefined,
        backgroundColor: bgColor || (data.backgroundImage ? undefined : '#0F172A'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor,
      }}
    >
      {data.backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      )}

      {data.overlayPattern && data.overlayPattern !== 'none' && (
        <div className={`absolute inset-0 ${patternStyles[data.overlayPattern]}`} />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32 w-full">
        <div className={`space-y-6 ${textAlign}`}>
          {data.badge && (
            <AnimatedSection animation="fade" delay={0.1}>
              <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-600/30 rounded-full text-sm font-semibold">
                {data.badge}
              </span>
            </AnimatedSection>
          )}

          <AnimatedSection animation="slide" delay={0.2}>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {data.title || "Welcome"}
            </h1>
          </AnimatedSection>

          {data.subtitle && (
            <AnimatedSection animation="fade" delay={0.4}>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl" style={{ marginLeft: alignment === 'center' ? 'auto' : '0', marginRight: alignment === 'center' || alignment === 'right' ? 'auto' : '0' }}>
                {data.subtitle}
              </p>
            </AnimatedSection>
          )}

          <AnimatedSection animation="fade" delay={0.6}>
            <div className={`flex flex-wrap gap-4 ${justifyContent}`}>
              {data.buttonText && data.buttonLink && (
                <Button
                  href={data.buttonLink}
                  variant="solid"
                  size="lg"
                  icon={ArrowRight}
                >
                  {data.buttonText}
                </Button>
              )}
              {data.secondaryButton?.text && data.secondaryButton?.link && (
                <Button
                  href={data.secondaryButton.link}
                  variant="outline"
                  size="lg"
                >
                  {data.secondaryButton.text}
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
