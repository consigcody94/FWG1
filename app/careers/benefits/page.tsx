import { NextPage } from 'next';

const benefits = [
  'Group Medical Insurance',
  'Dental Insurance',
  'Vision Insurance',
  'Company-paid Life Insurance',
  'Company-paid Short and Long-term Disability Insurance',
  'Paid Holidays',
  'Paid Annual Leave',
  '401k Plan with Company Match',
  'Flexible Spending Account',
  'Direct Payroll Deposit',
  'Employee Assistance Programs',
  'Metro Transportation Assistance',
];

const BenefitsPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Benefits</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group offers a comprehensive benefits package to our employees.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BenefitsPage;
