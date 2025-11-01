import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Senior Project Online Analyst</h1>
          <p className="mt-4 text-lg text-slate-600">Washington, DC | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are seeking an experienced and highly skilled <b>Senior Project Online Analyst</b> to join our team. The ideal candidate will have extensive experience in operational and user support for Microsoft Project Server (MSPS) and/or Microsoft Project Online (MSPO), particularly in large organizations with over 2,500 staff. This role involves providing day-to-day support, troubleshooting, gathering and documenting requirements, leading meetings, and developing training documentation. If you are a professional with a strong background in project management systems and a passion for delivering exceptional support, we encourage you to apply.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Operational and User Support:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Provide day-to-day operational and user support for Microsoft Project Server (MSPS) and/or MS Project Online (MSPO) in large organizations.</li>
                        <li>Troubleshoot and resolve customer incidents and requests related to MSPS/MSPO, ensuring timely and effective solutions.</li>
                    </ul>
                </li>
                <li><b>Requirements Gathering and Documentation:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Gather and document requirements for project and portfolio management reporting and data visualization solutions.</li>
                        <li>Develop and maintain detailed documentation for MSPS/MSPO processes and configurations.</li>
                    </ul>
                </li>
                <li><b>Meeting Coordination and Facilitation:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Coordinate and lead weekly quality review and portfolio, sub-portfolio, and/or program review meetings with project managers and stakeholders.</li>
                        <li>Facilitate stakeholder meetings, develop meeting agendas, and capture meeting minutes accurately.</li>
                    </ul>
                </li>
                <li><b>Process Analysis and Improvement:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Define and analyze process adherence and performance for project and portfolio management activities.</li>
                        <li>Provide recommendations for process improvements and implement best practices.</li>
                    </ul>
                </li>
                <li><b>Training and Knowledge Base Development:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Develop user and system-level Knowledge Base Articles (KBAs) for MSPS/MSPO.</li>
                        <li>Create and deliver user and system-level training documentation and training videos for MSPS/MSPO.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Certifications and Compliance</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Maintain relevant certifications, such as Project Management Professional (PMP) or PRINCE2, issued by PMI or equivalent certification bodies.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Minimum of six (6) years of experience in day-to-day operational and user support of MSPS and/or MSPO, preferably in organizations with 2,500 or more staff.</li>
                <li>Project Management Professional (PMP) certification or PRINCE2 certification.</li>
                <li>Proven experience in troubleshooting, onboarding, and supporting customer incidents and requests related to MSPS/MSPO.</li>
                <li>Demonstrated experience in gathering and documenting requirements for project and portfolio management reporting and data visualization solutions.</li>
                <li>Experience coordinating and leading quality review meetings and portfolio/program reviews with project managers and stakeholders.</li>
                <li>Strong skills in defining and analyzing process adherence and performance for project/portfolio management activities.</li>
                <li>Experience in facilitating stakeholder meetings, developing agendas, and capturing meeting minutes.</li>
                <li>Ability to develop user and system-level Knowledge Base Articles (KBAs) and training documentation, including training videos, for MSPS/MSPO.</li>
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
