import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Project Manager</h1>
          <p className="mt-4 text-lg text-slate-600">Washington, DC | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are seeking a highly skilled <b>Project Manager</b> to join our dynamic team. The ideal candidate will bring extensive experience in IT project management, process mapping, budgeting, product development, and meeting facilitation. Proficiency in project management tools such as Basecamp, Smartsheet, and Scrum methodologies is highly desirable. This role requires a strategic thinker with excellent leadership skills to drive projects to successful completion, ensuring alignment with organizational goals and client requirements.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Project Planning and Oversight:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Plan, execute, and oversee projects from inception to completion, adhering to project requirements and deadlines.</li>
                        <li>Develop and manage detailed project timelines, allocate resources efficiently, and monitor project budgets to ensure successful delivery.</li>
                    </ul>
                </li>
                <li><b>Process Mapping and Improvement:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Conduct process mapping to identify inefficiencies and areas for improvement.</li>
                        <li>Implement process enhancements to optimize project workflows and outcomes.</li>
                    </ul>
                </li>
                <li><b>Cross-Functional Coordination:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Coordinate with cross-functional teams, including developers, testers, QA, operations, production, manufacturing, sales, vendors, and PMO, to ensure cohesive project execution.</li>
                        <li>Facilitate effective communication and collaboration among team members and stakeholders.</li>
                    </ul>
                </li>
                <li><b>Stakeholder Communication:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Utilize strong communication skills to keep stakeholders informed of project progress, risks, and changes.</li>
                        <li>Prepare and present project updates, reports, and documentation as required.</li>
                    </ul>
                </li>
                <li><b>Tool Utilization:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Implement and utilize project management tools such as Basecamp, Smartsheet, and Scrum to streamline workflows and enhance project tracking and management.</li>
                    </ul>
                </li>
                <li><b>Risk Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Develop and execute risk analysis and mitigation plans.</li>
                        <li>Handle escalations and resolve issues that may impact project timelines or deliverables.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Experience and Certification:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Minimum of 10 years of experience managing projects with a proven track record of successful project delivery.</li>
                        <li>PMP (Project Management Professional) certification is required.</li>
                    </ul>
                </li>
                <li><b>Team Leadership:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>10 years of experience leading diverse teams, including developers, testers, QA, operations, production, manufacturing, sales, vendors, and PMO.</li>
                    </ul>
                </li>
                <li><b>Project Planning and Execution:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>7 years of experience in creating effective project plans, managing dependencies, conducting risk analysis, and developing mitigation strategies.</li>
                        <li>Proven ability to handle small to large-scale projects and deliver them on or before required deadlines.</li>
                    </ul>
                </li>
                <li><b>ServiceNow SAM Experience:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>5 years of experience with ServiceNow Software Asset Management (SAM), including managing company system software licensing, upgrades, deployments, uploads, offloads, and cloud storage management.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Preferred Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Proficiency in project management tools such as Basecamp and Smartsheet.</li>
                <li>Experience with Scrum methodologies and agile project management.</li>
                <li>Strong analytical and problem-solving skills.</li>
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
