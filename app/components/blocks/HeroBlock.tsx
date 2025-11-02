import Image from "next/image";
import Link from "next/link";

interface HeroBlockProps {
  data: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundImage?: string;
  };
}

export function HeroBlock({ data }: HeroBlockProps) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: data.backgroundImage ? `url(${data.backgroundImage})` : 'url(https://i.imgur.com/85EwS5X.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl" data-tina-field="title">
            {data.title || "Welcome"}
          </h1>
          {data.subtitle && (
            <p className="text-xl text-blue-100 md:text-2xl" data-tina-field="subtitle">
              {data.subtitle}
            </p>
          )}
          {data.buttonText && data.buttonLink && (
            <div className="flex justify-center md:justify-start">
              <Link
                href={data.buttonLink}
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition"
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
