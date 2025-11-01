import { NextPage } from 'next';

const CommitmentToQualityPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Commitment to Quality</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-600">
              <p>
                The Federal Working Group's commitment to quality is broken down into Quality Assurance, Quality Controls, and Quality Improvement.
              </p>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mt-4">Quality Assurance</h2>
                <p>
                  Quality Assurance is integrated into every phase of their management process.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mt-4">Quality Controls</h2>
                <p>
                  Quality Controls are an essential part of each product and service they provide, emphasizing Security Management and Individual Accountability.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-800 mt-4">Quality Improvement</h2>
                <p>
                  Quality Improvement involves continuous assessment and adjustment of performance based on valid measures and results, using statistics to enhance product quality, manage risk, and improve efficiency.
                </p>
              </div>
              <p className="mt-4">
                The company also highlights that quality is achieved through open communication, including program management reviews, customer meetings, and employee discussions and training sessions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommitmentToQualityPage;
