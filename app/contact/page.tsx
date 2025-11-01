import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Contact Us</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 text-center text-base leading-relaxed text-slate-600">
              <h2 className="text-xl font-semibold text-slate-800">Federal Working Group</h2>
              <p className="mt-2">
                7918 Jones Branch Drive, Suite 450<br />
                McLean, VA 22102
              </p>
              <p className="mt-4">
                Main Office: 703-243-0604
              </p>
              <p className="mt-4">
                IT Support: <a href="mailto:FWGITSupport@federalworking.com" className="text-blue-600 hover:underline">FWGITSupport@federalworking.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
