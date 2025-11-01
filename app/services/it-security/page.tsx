import { NextPage } from 'next';

const expertise = [
  'Security Assessment Plans',
  'Contingency Planning',
  'Disaster Recovery',
  'Continuity of Operations',
  'Security Policies and Standard Operating Procedures',
  'Risk Assessment',
  'Vulnerability Analysis',
  'Information Security Management',
  'Security Testing & Evaluation',
  'POA&M Management',
  'Security Infrastructure',
];

const ItSecurityPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">IT Security, Strategy and Operations</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group acts as a trusted advisor for customers to meet system and data security requirements and ensure compliance with laws like FISMA, OMB A-130, and NIST SP 800 Series and FIPS guidelines.
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mt-8">Our expertise includes:</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {expertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Benefit</h2>
                <p className="mt-2">
                  Our process balances operational and economic costs of protective measures against mission-related functions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ItSecurityPage;
