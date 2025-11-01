import { NextPage } from 'next';

const objectives = [
  'Building trusting working relationships',
  'Job satisfaction',
  'Pride in accomplishments',
  'A positive corporate image',
  'Understanding of interconnectedness',
  'Loyalty to client missions, the company, and co-workers',
];

const LifeAtFwgPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Life at Federal Working Group</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-left text-base leading-relaxed text-slate-600">
              <p>
                Our objective is to create and maintain a work environment that fosters high-quality services and supports our employees. We strive to build:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LifeAtFwgPage;
