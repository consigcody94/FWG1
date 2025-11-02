import Link from "next/link";
import { ScrollReveal } from "../scroll-reveal";

interface CTABlockProps {
  data: {
    heading?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

export function CTABlock({ data }: CTABlockProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 text-center text-white">
      <ScrollReveal>
        <div className="mx-auto max-w-4xl px-6">
          <h3 className="text-3xl font-bold md:text-4xl" data-tina-field="heading">
            {data.heading || "Get Started Today"}
          </h3>
          {data.text && (
            <p className="mt-6 text-xl text-blue-100" data-tina-field="text">
              {data.text}
            </p>
          )}
          {data.buttonText && data.buttonLink && (
            <Link
              href={data.buttonLink}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-2xl transition hover:scale-105"
              data-tina-field="buttonText"
            >
              {data.buttonText}
            </Link>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
