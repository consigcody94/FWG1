import { NextPage } from 'next';

const services = [
  'Align Strategy and Goals',
  'Optimization of Investment Portfolios',
  'Strategy and Management Consulting',
  'Risk Management and Monitoring',
  'Performance and Service Management',
  'Portfolio Management',
  'Compliance Strategy and Support',
  'Human Capital Management',
  'Knowledge Management',
  'Strategic Communications',
  'Facilitate Budget Reviews',
  'Technology Strategic Plan and Roadmap Development',
  'High-Level Managment Reporting',
];

const ProgramManagementPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Program and Project Management Services</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Our PMBOK® and ITIL® based project, program, and portfolio management approach is tailored to address individual customer environments.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mt-8">Services we provide:</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Benefit</h2>
                <p className="mt-2">
                  Our flexible and adaptive program management approach is tailored specifically to meet the needs of each customer organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramManagementPage;
