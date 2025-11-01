import { NextPage } from 'next';

const scope = [
    'Project Management Office (PMO Formation & Implementation, Portfolio and Project Prioritization, Business Change Management, Reporting, Project Methodology Ownership, Project Feasibility and Planning Guidance, Project Management Mentoring and Coaching, Project Management Training, Project Delivery Best Practice Processes, Project Assessments & Audits, Agile Methodologies, Methodology Development & Implementation, Project Controls)',
    'Program Risk Assessment (Current State/Gap Analysis, Risk Identification and Assessment, Risk Analysis, Risk Evaluation, Risk Reporting, Technology Strategies)',
    'General Professional Services (Product and Service Design and Build, Project Implementation, Advanced Business Analytics, Enterprise Technology, New Business Innovation, Organization Change Management, Organization Leadership & Talent, Operating Model & Organization Design, Enterprise Risk, Business and Corporate Strategy, Cost Transformation, Sustainability & Corporate Responsibility)',
];

const benefits = [
    'Best-in-class service',
    'Improved success of delivered solutions',
    'Consistency in service acquisition and delivery',
    'Agile and flexible procurement',
    'Cost efficiencies',
    'Reduced redundancies',
    'Knowledge sharing',
    'Lessons learned',
];

const UsacPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">USAC Professional Consulting Services IDIQ</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                This contract is an IDIQ (Indefinite Delivery, Indefinite Quantity), Task Order Contract, designed to support USAC and enhance its internal capabilities, accelerate existing projects, and provide strategic consulting services for USAC’s business and support unit demands related to USF Programs and the USAC organization.
              </p>
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-slate-800">Contract Details:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Contract Name: USAC Professional Consulting Services</li>
                  <li>Contract Number: USAC-20-015-14</li>
                  <li>Period of Performance: September 2, 2020 to September 1, 2021</li>
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
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
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

export default UsacPage;
