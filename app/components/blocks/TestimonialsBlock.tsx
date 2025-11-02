import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

interface TestimonialsBlockProps {
  data: {
    heading?: string;
    testimonials?: Array<{
      quote?: string;
      author?: string;
      role?: string;
      avatar?: string;
    }>;
  };
}

export function TestimonialsBlock({ data }: TestimonialsBlockProps) {
  if (!data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {data.heading && (
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-slate-900 md:text-5xl" data-tina-field="heading">
                {data.heading}
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            </div>
          </ScrollReveal>
        )}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {data.testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-hover flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg">
                {testimonial.avatar && (
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author || "Testimonial"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="mb-6 text-4xl text-blue-600">"</div>
                <p className="flex-1 text-base leading-relaxed text-slate-600" data-tina-field={`testimonials.${index}.quote`}>
                  {testimonial.quote || "Testimonial quote"}
                </p>
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-lg font-bold text-slate-900" data-tina-field={`testimonials.${index}.author`}>
                    {testimonial.author || "Author"}
                  </p>
                  {testimonial.role && (
                    <p className="mt-1 text-sm font-medium text-slate-500" data-tina-field={`testimonials.${index}.role`}>
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
