import { NextPage } from "next";

const ApplyPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Apply for a Position</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <form name="job-application" method="POST" data-netlify="true" className="mt-12 space-y-8">
              <input type="hidden" name="form-name" value="job-application" />
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-slate-700">
                  Position
                </label>
                <div className="mt-1">
                  <select
                    id="position"
                    name="position"
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>E-Discovery Analyst</option>
                    <option>IT Asset Manager</option>
                    <option>Project Manager</option>
                    <option>IT Project Site Lead</option>
                    <option>Senior Project Online Analyst</option>
                    <option>System Administration</option>
                    <option>Help Desk Specialist</option>
                    <option>Network Engineer</option>
                    <option>IT Security Specialist</option>
                    <option>Enterprise Architect</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700">
                  Notes
                </label>
                <div className="mt-1">
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-slate-700">
                  Resume
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".doc,.docx,.pdf"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cover-letter" className="block text-sm font-medium text-slate-700">
                  Cover Letter
                </label>
                <div className="mt-1">
                  <input
                    type="file"
                    name="cover-letter"
                    id="cover-letter"
                    accept=".doc,.docx,.pdf"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ApplyPage;
