import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Help Desk Specialist</h1>
          <p className="mt-4 text-lg text-slate-600">Tuscaloosa, AL | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are looking for a dedicated and skilled <b>Help Desk Specialist</b> to join our IT support team. The ideal candidate will be responsible for providing first-level technical support to end-users across various communication channels, including in-person, phone, email, and remote assistance. The role requires proficiency in troubleshooting hardware, software, and network issues, along with excellent communication and customer service skills. If you have a passion for technology and helping others, we encourage you to apply.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Technical Support:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Provide first-level technical support to end-users in person, via phone, email, or remote assistance.</li>
                        <li>Assist with issues related to hardware, software, and network connectivity.</li>
                        <li>Troubleshoot and resolve common operating system issues on Windows, Linux, and MacOS.</li>
                    </ul>
                </li>
                <li><b>Communication and Customer Service:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Maintain effective communication with end-users, ensuring they are informed of ticket statuses and resolutions.</li>
                        <li>Deliver exceptional customer service, addressing user concerns and providing solutions in a professional manner.</li>
                        <li>Provide regular updates on ticket statuses and escalate complex issues to higher-level IT teams when necessary.</li>
                    </ul>
                </li>
                <li><b>Documentation:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Ensure clear and concise documentation of troubleshooting steps, issue resolutions, and user interactions.</li>
                        <li>Maintain detailed records of support requests and resolutions in the ticketing system.</li>
                    </ul>
                </li>
                <li><b>Collaboration:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Collaborate with other IT teams to resolve complex issues and implement solutions.</li>
                        <li>Participate in team meetings and contribute to continuous improvement initiatives.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Software and Systems Familiarity</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Stay up-to-date with common productivity software and operating systems (Windows, Linux, MacOS).</li>
                <li>Provide guidance and support on the use of standard office applications and software tools.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Bachelor’s degree in Computer Science, Information Technology, or a related field, or equivalent experience.</li>
                <li>Familiarity with common operating systems (Windows, Linux, MacOS) and productivity software.</li>
                <li>Proficiency in troubleshooting hardware, software, and network issues.</li>
                <li>Excellent communication and customer service skills.</li>
                <li>Experience with ticketing systems and support tools.</li>
                <li>Preferred relevant IT certifications such as CompTIA A+ or ITIL Foundation.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Preferred Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Experience with remote support tools and techniques.</li>
                <li>Knowledge of network fundamentals and common network issues.</li>
                <li>Ability to manage multiple tasks and prioritize effectively in a fast-paced environment.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">About</h2>
            <p className="mb-6">Federal Working Group is a Northern Virginia-based small business committed to delivering value through trust and loyalty of our customers, retaining highly skilled and experienced professionals, practical application of structured management frameworks, and implementing current best practices.</p>
            <p className="mb-6">Federal Working Group’s core competencies are Agile IT Programs, Project Management Services, Enterprise Portfolio Management &amp; Governance Services, Infrastructure Strategy &amp; Data Center Supports, and IT Security, Strategy &amp; Operations.</p>
            <p className="mb-6">Federal Working Group was established in 2004 as a competitive and high-performing company. The organization over the year has successfully grown from 4 employees to over 100. In addition, to being recognized as an outstanding solutions provider, Federal Working Group also has a proven track record to exceed customers’ expectations.</p>
            <p>Federal Working Group, Inc. is an Equal Opportunity Employer.  All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.</p>
        </div>
        <div className="mt-12 text-center">
            <Link href="/careers/apply" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Apply Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
