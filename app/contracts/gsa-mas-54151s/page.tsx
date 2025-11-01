import { NextPage } from 'next';

const scope = [
  'IT Systems Analysis',
  'IT Systems Development',
  'Programming',
  'Network Management',
  'IT Security',
];

const GsaMasPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">GSA MAS IT Professional Service</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Details:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Contract Name: Multiple Award Schedule 54151S Information Technology Professional Services (Formerly 132-51)</li>
                  <li>Contract Number: GS-35F-0604X</li>
                  <li>Period of Performance: September 21, 2021, to September 20, 2026</li>
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Scope:</h2>
                <p className="mt-2">
                  Special Item No. 54151S Information Technology Professional Services, covering services like:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Benefits:</h2>
                <p className="mt-2">
                  Easy to use, discounted rates, and a flexible negotiation platform for Federal, State, and local governments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GsaMasPage;
