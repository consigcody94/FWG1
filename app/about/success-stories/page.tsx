import { NextPage } from 'next';

const successStories = [
  {
    agency: 'Census Bureau',
    story: 'FWG played key roles in the planning and execution of the 2010 Decennial Census, providing technical expertise in field operations, space and logistics management, help desk operations, and system design and development support.',
  },
  {
    agency: 'Office of the Comptroller of the Currency (OCC)',
    story: 'FWG supported OCC during the financial crisis in implementing Base II standards, providing system support, resource allocation, enterprise-level activities, and developing information clearinghouses and data collection methods.',
  },
  {
    agency: 'Internal Revenue Service (IRS)',
    story: 'FWG provided strategic planning, communications, and management support for the IRS to fulfill its obligations under the Patient Protection and Affordable Care Act, including formulating strategies, developing a concept of operations, and providing tactical support for the ACA PMO.',
  },
  {
    agency: 'USDA',
    story: 'FWG played a critical role in the development and launch of the USDA Public Health Information Systems (PHIS) training, which included developing documentation for computer-based training, delivering classroom-based training, and creating an innovative courseware platform.',
  },
];

const SuccessStoriesPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Success Stories</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-12 space-y-8">
              {successStories.map((item) => (
                <div key={item.agency} className="p-6 border border-slate-200 rounded-lg">
                  <h2 className="text-xl font-semibold text-slate-800">{item.agency}</h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{item.story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SuccessStoriesPage;
