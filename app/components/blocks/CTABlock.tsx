import Link from "next/link";
import { ScrollReveal } from "../scroll-reveal";

interface CTABlockProps {
  data: {
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
    backgroundColor?: string;
    textColor?: string;
    buttonStyle?: string;
    alignment?: string;
  };
}

export function CTABlock({ data }: CTABlockProps) {
  const alignment = data.alignment || "center";
  const textAlign = alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left";
  const justifyContent = alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start";

  const buttonStyles = {
    solid: "bg-white text-blue-600 hover:bg-gray-100",
    outline: "border-2 border-white bg-transparent hover:bg-white/10",
    ghost: "bg-white/10 hover:bg-white/20"
  };

  const buttonClass = buttonStyles[data.buttonStyle as keyof typeof buttonStyles] || buttonStyles.solid;

  return (
    <section
      className="py-24"
      style={{
        background: data.backgroundColor || 'linear-gradient(to right, #2563eb, #7c3aed)',
        color: data.textColor || 'white',
      }}
    >
      <ScrollReveal>
        <div className={`mx-auto max-w-4xl px-6 ${textAlign}`}>
          <h3 className="text-3xl font-bold md:text-4xl" data-tina-field="heading">
            {data.heading || "Get Started Today"}
          </h3>
          {data.text && (
            <p className="mt-6 text-xl" data-tina-field="text" style={{ opacity: 0.9 }}>
              {data.text}
            </p>
          )}
          {data.buttonText && data.buttonLink && (
            <div className={`mt-8 flex ${justifyContent}`}>
              <Link
                href={data.buttonLink}
                className={`inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold shadow-2xl transition hover:scale-105 ${buttonClass}`}
                data-tina-field="buttonText"
              >
                {data.buttonText}
              </Link>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
