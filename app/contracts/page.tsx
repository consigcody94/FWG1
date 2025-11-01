import { NextPage } from 'next';
import Link from 'next/link';

const contractVehicles = [
  { name: 'GSA MAS IT Professional Services', number: 'GS-35F-0246W', period: '02/05/2010 – 02/04/2025', type: 'GWAC' },
  { name: 'NOAA NMITS', number: '13305021CQ0009', period: '02/01/2021 – 01/31/2026', type: 'BPA' },
  { name: 'CIO-SP3', number: '75N98120D00232', period: '05/11/2020 – 07/14/2022', type: 'IDIQ' },
  { name: 'Census CTO EA', number: 'YA1323-16-BU-0008', period: '09/29/2016 – 09/28/2021', type: 'BPA' },
];

const naicsCodes = [
  '518210 – Data Processing, Hosting, and Related Services',
  '541511 – Custom Computer Programming Services',
  '541512 – Computer Systems Design Services',
  '541513 – Computer Facilities Management Services',
  '541519 – Other Computer Related Services',
  '541611 – Administrative Management and General Management Consulting Services',
  '541618 – Other Management Consulting Services',
  '611420 – Computer Training',
];

const ContractVehiclesPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Contract Vehicles</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group has a legacy of over 20 years in government and commercial contracting and work with various federal agencies.
              </p>
              <div className="mt-12 space-y-8">
                {contractVehicles.map((vehicle) => (
                  <div key={vehicle.name} className="p-6 border border-slate-200 rounded-lg">
                    <h2 className="text-xl font-semibold text-slate-800">{vehicle.name}</h2>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      <strong>Contract Number:</strong> {vehicle.number}<br />
                      <strong>Period of Performance:</strong> {vehicle.period}<br />
                      <strong>Type:</strong> {vehicle.type}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-slate-800">NAICS Codes</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {naicsCodes.map((code) => (
                    <li key={code}>{code}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContractVehiclesPage;
