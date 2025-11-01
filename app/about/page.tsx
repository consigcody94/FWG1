import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h1 className="text-3xl font-semibold text-slate-900">ABOUT US</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-600">
              <p>
                We are Federal Working Group, a diverse team of inventive thinkers and courageous doers, united by an unwavering commitment to serve our customers. Our culture thrives on curiosity, creativity, and collaboration – allowing us to develop cutting-edge solutions to achieve mission success for our clients. We value an entrepreneurial spirit and recognize that our employees are key to driving innovation that allows us to achieve our objectives. Join us and discover the incredible possibilities that come with being a part of a dynamic team of creative players.
              </p>
              <p>
                Federal Working Group was established in 2004 as a competitive and high-performing company. The organization over the years has successfully grown from 4 employees to over 100. In addition to being recognized as an outstanding solutions provider, Federal Working Group also has a proven track record of exceeding customers’ expectations.
              </p>
            </div>
          </div>
        </section>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">THE FEDERAL WORKING GROUP DIFFERENCE</h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-600">
              <p>
                Federal Working Group is committed to providing our customers with best-in-class services, leading to innovative solutions and high satisfaction levels for our customers. Since our inception, we have achieved success based upon four key cornerstones.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
