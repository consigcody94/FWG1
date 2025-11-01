import { NextPage } from 'next';

const WhyFwgPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Why FWG</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-600">
              <p>
                <strong>Empowering Client Effectiveness- Through State-of-the-Art IT Solutions:</strong> FWG's broad experience ensures our clients a total-system, holistic approach to project tasks, and approach which considers all dependencies, influences, and relationships, thereby resulting in the right solution, the first time.
              </p>
              <p>
                <strong>Wholistic Service Delivery:</strong> Our corporate and technical capabilities, and our commitment to IT service management best practices, along with business partnership with leading technology vendors such and Microsoft, ServiceNow, Citrix and Amazon Web Services (AWS) enable us to deliver holistic service solutions that integrate seamlessly across all levels of our clients' operations, ensuring enhanced efficiency, scalability, and a superior user experience.
              </p>
              <p>
                <strong>High Preforming Professionals:</strong> We leverage diverse and flexible strategies to recruit and engage full and part time multi-disciplined employees, consultants, and subcontractors in a collaborative approach to support customer requirements. We attract and retain top-tier talent, recruiting and building high-performance teams comprised of creative problem solvers with technical excellence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhyFwgPage;
