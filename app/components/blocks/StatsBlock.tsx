import { ScrollReveal } from "../scroll-reveal";

interface StatsBlockProps {
  data: {
    items?: Array<{
      value?: string;
      label?: string;
    }>;
  };
}

export function StatsBlock({ data }: StatsBlockProps) {
  if (!data.items || data.items.length === 0) return null;

  return (
    <section className="relative -mt-20 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="card-hover group rounded-2xl bg-white p-8 text-center shadow-xl">
                <p className="gradient-text text-5xl font-bold" data-tina-field={`items.${index}.value`}>
                  {stat.value || "0"}
                </p>
                <p className="mt-3 text-base font-medium text-slate-600" data-tina-field={`items.${index}.label`}>
                  {stat.label || "Stat"}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
