import { NextPage } from 'next';

const organizations = [
  {
    name: 'DC Avon Walk for Breast Cancer',
    description: 'An organization that provides critical funding for cancer research, diagnostic equipment, breast care advocate training, and patient/family support.',
  },
  {
    name: 'Special Olympics- Virginia',
    description: 'A year-round foundation supporting training and athletic competition for children and adults with intellectual and physical disabilities, enabling them to compete in over 2,000 events annually.',
  },
  {
    name: 'Newton Marasco Foundation (NMF)',
    description: 'An environmental nonprofit founded in 2004 that empowers youth through stewardship programs in literature, science, and arts.',
  },
  {
    name: 'Coats for Kids',
    description: 'This organization provides coats to children in the National Capital Area, having provided 5,000 children with warm jackets in 2012 with the help of Federal Working Group employees.',
  },
  {
    name: 'Veterans of Foreign Wars',
    description: 'Founded to support those who have protected the country upon their return home through scholarships, assistance programs, and morale-boosting events.',
  },
];

const CaringInTheCommunityPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Caring in the Community</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-center">
              <p className="text-base leading-relaxed text-slate-600">
                Federal Working Group is committed to giving back to the communities where its employees live and work.
              </p>
            </div>
            <div className="mt-12 space-y-8">
              {organizations.map((org) => (
                <div key={org.name} className="p-6 border border-slate-200 rounded-lg">
                  <h2 className="text-xl font-semibold text-slate-800">{org.name}</h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{org.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-base leading-relaxed text-slate-600">
                For more information or to get involved with these organizations, individuals can contact HR@federalworking.com.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaringInTheCommunityPage;
