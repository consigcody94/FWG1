import { NextPage } from 'next';

const scope = [
  'Enterprise Architecture and Governance',
  'IT Strategic Planning',
  'Enterprise Architecture',
  'IT Governance Innovation',
  'Program and Project Management',
  'Leadership',
  'Budget and resources allocation',
  'Organizing multiple activities',
  'Solutions Architecture Services',
  'Solutions Architecture support',
  'Infrastructure and cloud architecture',
  'Systems/Software architecture design',
  'Business analysis',
  'Strategic',
];

const CtoeaPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Chief Technology Office (CTO) Enterprise Architecture Support Services</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                This is a Federal Supply Schedule Contract that allows the U.S. Census Bureau to sustain, mature, and improve its Enterprise Architecture process and standards, improve technology standardization, reduce costs, and improve EA reporting.
              </p>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Details:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Contract Name: U.S. Census Bureau Chief Technology Office (CTO) Enterprise Architecture Support Services</li>
                  <li>Contract Number: 1333LB20A00000008</li>
                  <li>Period of Performance: April 20, 2020, to April 20, 2025</li>
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Scope:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Benefits:</h2>
                <p className="mt-2">
                  The BPA allows the U.S. Census Bureau and the U.S. Department of Commerce and any of its bureaus and offices to use this contract.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CtoeaPage;
