import { NextPage } from 'next';

const taskAreas = [
  'IT Services for Biomedical Research, Health Sciences, and Healthcare',
  'CIO Support',
  'IT Operations and Maintenance',
  'Integration Services',
  'Critical Infrastructure Protection and Information Assurance',
  'Digital Government',
  'Software Development',
];

const contractBenefits = [
  'Streamlined ordering and procedures',
  'No special "Delegation of Procurement Authority" needed from NITAAC',
  'Direct task order placement by agencies',
  'Free comprehensive assessment of requirements by NITAAC within 24 hours',
  'Customized terms, conditions, and labor categories at the task order level',
];

const Ciosp3Page: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Chief Information Officer – Solutions and Partners 3 (CIO-SP3) Small Business (SB)</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group supports the Chief Information Officer – Solutions and Partners 3 (CIO-SP3) Small Business (SB) Government-Wide Acquisition Contract (GWAC).
              </p>
              <h2 className="text-xl font-semibold text-slate-800 mt-8">CIO-SP3 SB task areas supported:</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {taskAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Details:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Purpose: To offer small businesses opportunities in government requirements and help agencies meet socioeconomic contracting goals.</li>
                  <li>137 labor categories for IT task orders</li>
                  <li>Wide range of IT services across ten task areas</li>
                  <li>NAICS Code: 541512</li>
                  <li>Contract Ceiling: $20 billion</li>
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Key Contract Benefits:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {contractBenefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Information:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Contract Name: CIO-SP3 Small Business</li>
                  <li>Contract Number: 75N98120D00232</li>
                  <li>CIO-SP3 Program Manager: Lynn Williams (with contact information)</li>
                  <li>Period of Performance: 05/11/2020 to 07/14/2022</li>
                  <li>Prompt Payment Terms: 30 days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ciosp3Page;
