import { NextPage } from 'next';
import Link from 'next/link';

const services = [
  { name: 'Program and Project Management Services', href: '/services/program-management' },
  { name: 'IT Infrastructure, Technologies and Solutions', href: '/services/it-infrastructure' },
  { name: 'Enterprise Architecture', href: '/services/enterprise-architecture' },
  { name: 'IT Security, Strategy and Operations', href: '/services/it-security' },
];

const ServicesPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Services and Solutions</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                The Federal Working Group (FWG) offers services and solutions, highlighting their difference as a small business. They emphasize effective support that builds customer trust and loyalty, evidenced by contract renewals and an Open Ratings score of 96 out of 100. FWG focuses on attracting and retaining highly skilled professionals within a lean corporate structure to deliver top talent at competitive rates, resulting in a low voluntary turnover rate among professional staff.
              </p>
              <p className="mt-4">
                They possess corporate experience and capacity to manage large and complex contracts as a prime contractor, applying structured management frameworks from ITIL®, the Project Management Institute, the Software Engineering Institute, and other IT project management best practices. FWG utilizes flexible, adaptive project management approaches and tools tailored to individual customer requirements and their unique organizational and technical environments. They also identify, engage, and hire "best of breed" staff, specialized consultants, or subcontractors through various means. The company fosters a highly collaborative and collegial work environment based on fairness and transparent business understandings.
              </p>
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-slate-800">Our Services:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-blue-600 hover:underline">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p>
                  They also list "CIOSP3" under Contract Vehicles. The page provides links to download their current IT Services Price List and Cloud Services Commercial Price List for 2021.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
