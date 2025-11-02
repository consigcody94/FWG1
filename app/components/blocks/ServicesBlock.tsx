import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

interface ServicesBlockProps {
  data: {
    heading?: string;
    services?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
}

export function ServicesBlock({ data }: ServicesBlockProps) {
  if (!data.services || data.services.length === 0) return null;

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
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {data.services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="card-hover group overflow-hidden rounded-3xl bg-white shadow-lg">
                {service.icon && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.icon}
                      alt={service.title || "Service"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 768px) 50vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                )}
                <div className="space-y-4 p-8">
                  <h3 className="text-2xl font-bold text-slate-900" data-tina-field={`services.${index}.title`}>
                    {service.title || "Service"}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600" data-tina-field={`services.${index}.description`}>
                    {service.description || "Service description"}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
