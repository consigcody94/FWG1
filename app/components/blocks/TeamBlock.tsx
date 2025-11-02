import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

interface TeamBlockProps {
  data: {
    heading?: string;
    members?: Array<{
      name?: string;
      role?: string;
      bio?: string;
      photo?: string;
      email?: string;
    }>;
  };
}

export function TeamBlock({ data }: TeamBlockProps) {
  if (!data.members || data.members.length === 0) return null;

  return (
    <section className="bg-white py-24">
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
          {data.members.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-hover overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 shadow-lg">
                {member.photo && (
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name || "Team member"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-4 p-8">
                  <h3 className="text-2xl font-bold text-slate-900" data-tina-field={`members.${index}.name`}>
                    {member.name || "Team Member"}
                  </h3>
                  {member.role && (
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600" data-tina-field={`members.${index}.role`}>
                      {member.role}
                    </p>
                  )}
                  {member.bio && (
                    <p className="text-base leading-relaxed text-slate-600" data-tina-field={`members.${index}.bio`}>
                      {member.bio}
                    </p>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
                      data-tina-field={`members.${index}.email`}
                    >
                      {member.email}
                    </a>
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
