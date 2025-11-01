import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Department of Commerce', logo: '/assets/clients/commerce.png', url: 'http://www.commerce.gov/' },
  { name: 'Department of the Treasury', logo: '/assets/clients/treasury.png', url: 'http://www.treasury.gov/Pages/default.aspx' },
  { name: 'Department of Homeland Security', logo: '/assets/clients/homeland.png', url: 'http://www.dhs.gov/' },
  { name: 'Department of Health and Human Services', logo: '/assets/clients/health.png', url: 'http://www.hhs.gov/' },
  { name: 'Environmental Protection Agency', logo: '/assets/clients/environment.png', url: 'http://www.epa.gov/' },
  { name: 'Federal Communications Commission', logo: '/assets/clients/communications.png', url: 'http://www.fcc.gov/' },
  { name: 'Federal Aviation Administration', logo: '/assets/clients/aviation-78x83.png', url: 'http://www.faa.gov/' },
  { name: 'Department of Agriculture', logo: '/assets/clients/agriculture-83x83.png', url: 'http://www.usda.gov/wps/portal/usda/usdahome' },
  { name: 'Department of Justice', logo: '/assets/clients/justice.png', url: 'http://www.justice.gov/' },
];

const OurClientsPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Our Clients</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <p className="mt-8 text-center text-base leading-relaxed text-slate-600">
              Federal Working Group has extensive experience working with Federal agencies including the Departments of Commerce, Treasury, Health and Human Services, Homeland Security, Justice and other agencies and organizations.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              {clients.map((client) => (
                <div key={client.name} className="flex justify-center items-center p-6 border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-md transition">
                  <Link href={client.url} target="_blank" rel="noopener noreferrer">
                    <Image src={client.logo} alt={client.name} width={120} height={120} className="object-contain grayscale hover:grayscale-0 transition" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurClientsPage;
