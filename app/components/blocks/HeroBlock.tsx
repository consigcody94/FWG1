import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  data: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundImage?: string;
    backgroundColor?: any;
    textColor?: any;
    alignment?: string;
  };
}

export function HeroBlock({ data }: HeroBlockProps) {
  const alignment = data.alignment || "left";
  const textAlign = alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left";
  const justifyContent = alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start";

  // Extract color values from Sanity color objects
  const bgColor = data.backgroundColor?.hex || data.backgroundColor;
  const textColor = data.textColor?.hex || data.textColor;

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: data.backgroundImage ? `url(${data.backgroundImage})` : undefined,
        backgroundColor: bgColor || (data.backgroundImage ? undefined : '#1e40af'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: textColor || 'white',
      }}
    >
      {data.backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />}
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className={`space-y-6 ${textAlign}`}>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl" data-tina-field="title">
            {data.title || "Welcome"}
          </h1>
          {data.subtitle && (
            <p className="text-xl md:text-2xl" data-tina-field="subtitle" style={{ opacity: 0.9 }}>
              {data.subtitle}
            </p>
          )}
          {data.buttonText && data.buttonLink && (
            <div className={`flex ${justifyContent}`}>
              <Link
                href={data.buttonLink}
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold transition hover:scale-105"
                data-tina-field="buttonText"
              >
                {data.buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
