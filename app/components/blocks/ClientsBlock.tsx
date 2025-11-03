import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

interface ClientsBlockProps {
  data: {
    heading?: string;
    subtitle?: string;
    clients?: Array<{
      name: string;
      logo: string;
      website?: string;
    }>;
  };
}

export function ClientsBlock({ data }: ClientsBlockProps) {
  // Default federal agency clients if none provided
  const defaultClients = [
    {
      name: "Department of Commerce",
      logo: "/assets/clients/commerce.png",
      website: "commerce.gov"
    },
    {
      name: "Department of Treasury",
      logo: "/assets/clients/treasury.png",
      website: "treasury.gov"
    },
    {
      name: "Department of Homeland Security",
      logo: "/assets/clients/homeland.png",
      website: "dhs.gov"
    },
    {
      name: "Department of Health and Human Services",
      logo: "/assets/clients/health.png",
      website: "hhs.gov"
    },
    {
      name: "Environmental Protection Agency",
      logo: "/assets/clients/environment.png",
      website: "epa.gov"
    },
    {
      name: "Federal Communications Commission",
      logo: "/assets/clients/communications.png",
      website: "fcc.gov"
    },
    {
      name: "Federal Aviation Administration",
      logo: "/assets/clients/aviation-78x83.png",
      website: "faa.gov"
    },
    {
      name: "U.S. Department of Agriculture",
      logo: "/assets/clients/agriculture-83x83.png",
      website: "usda.gov"
    },
    {
      name: "Department of Justice",
      logo: "/assets/clients/justice.png",
      website: "justice.gov"
    }
  ];

  const clients = data.clients && data.clients.length > 0 ? data.clients : defaultClients;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl" data-tina-field="heading">
              {data.heading || "Our Trusted Federal Agency Clients"}
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-900 to-purple-600" />
            {data.subtitle && (
              <p className="mt-6 text-xl text-slate-600" data-tina-field="subtitle">
                {data.subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="card-hover group flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-8 text-center">
                <div className="relative h-24 w-24 mb-4">
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 leading-tight" data-tina-field={`clients.${index}.name`}>
                  {client.name}
                </h3>
                {client.website && (
                  <p className="mt-2 text-xs text-blue-800 font-medium" data-tina-field={`clients.${index}.website`}>
                    {client.website}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
