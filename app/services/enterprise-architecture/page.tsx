import { NextPage } from 'next';

const services = [
  'Enterprise Architecture',
  'Systems Engineering and Administration',
  'Service Desk Management',
  'Network Operations Center Support',
  'Disaster Recovery and Co-Op Services Administration and Monitoring',
  'Storage Management',
  'Network and Database Administration',
  'Web Design',
  'Geospatial Solutions',
];

const EnterpriseArchitecturePage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Enterprise Architecture</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group's Enterprise Architecture services offer integrated, practical, and reliable technology standards to deliver effective solutions.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mt-8">Services and solutions we provide include:</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Benefit</h2>
                <p className="mt-2">
                  Our proven track record and success in providing IT support services with a focus on enterprise-level solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EnterpriseArchitecturePage;
