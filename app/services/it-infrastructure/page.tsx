import { NextPage } from 'next';

const services = [
  'Hardware, Software, Networks, and Facility support',
  'Service Improvement Framework and Plans',
  'Network Operations Center (NOC)',
  'Server, Storage, Network equipment and data center optimization',
  'Desktop Engineering and Applications Support',
  'Messaging and Collaboration Services',
  'Business Applications and Information Systems',
  'Remote Site Maintenance',
  'Infrastructure Compliance',
  'Data Security',
  'Configuration Management',
  'Performance Measurement',
  'Service Optimization',
  'Service Strategy and Design',
  'Continual Improvement',
];

const ItInfrastructurePage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">IT Infrastructure, Technologies and Solutions</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group (FWG) emphasizes that a robust IT infrastructure is crucial for business success. They utilize state-of-the-art technologies and customized solutions to help clients achieve their objectives, integrating cloud computing, advanced networking, and cybersecurity to create a seamless and secure operational environment.
              </p>
              <p className="mt-4">
                FWG focuses on scalability and flexibility, assisting businesses in adapting to market demands, optimizing performance, and reducing costs. Their expert team works closely with clients to design and implement tailored IT strategies that boost productivity and foster innovation, providing solutions that pave the way for future success through integrating cutting-edge technologies or streamlining existing systems.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mt-8">Key services and solutions include:</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <p className="mt-8">
                FWG states that their experience leads to increased use of repeatable processes and procedures, which in turn reduces risk, improves operational availability, and lowers costs.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ItInfrastructurePage;
