import { NextPage } from 'next';
import Link from 'next/link';

const CareersPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Careers</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-6 text-left text-base leading-relaxed text-slate-600">
              <p>
                <strong>Make Federal Working Group your career home. We are always looking for talented, experienced, and motivated professionals to help us deliver exemplary results to our customers.</strong>
              </p>
              <p>
                <strong>Federal Working Group's corporate culture is built around dedication to our clients and commitment to our employees.</strong>
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <Link href="/careers/life-at-fwg" className="block p-6 border-2 border-slate-200 rounded-lg hover:border-slate-400 transition">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Life at FWG</h2>
                  <p className="text-sm text-slate-600">Discover what it's like to work at Federal Working Group</p>
                </Link>

                <Link href="/careers/benefits" className="block p-6 border-2 border-slate-200 rounded-lg hover:border-slate-400 transition">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Benefits</h2>
                  <p className="text-sm text-slate-600">Learn about our comprehensive benefits package</p>
                </Link>

                <Link href="/careers/current-openings" className="block p-6 border-2 border-slate-200 rounded-lg hover:border-slate-400 transition">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Current Openings</h2>
                  <p className="text-sm text-slate-600">View available positions and apply today</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;
