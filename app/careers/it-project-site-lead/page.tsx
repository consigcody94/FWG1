import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">IT Project Site Lead</h1>
          <p className="mt-4 text-lg text-slate-600">Tuscaloosa, AL | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are seeking an experienced <b>IT Contract Site Lead</b> to oversee a team of IT professionals and ensure the delivery of high-quality technical support and services at our designated site. The ideal candidate will manage daily operations, maintain strong client and stakeholder relationships, and ensure compliance with service level agreements (SLAs) and contractual obligations. This role requires strong leadership skills, technical expertise, and the ability to implement and maintain high service standards.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Team Leadership:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Supervise and lead a team of IT technicians, engineers, and support staff at the designated site.</li>
                        <li>Provide guidance, mentorship, and support to ensure the team meets performance objectives and delivers exceptional service.</li>
                        <li>Conduct regular performance reviews, set goals, and implement professional development opportunities.</li>
                    </ul>
                </li>
                <li><b>Client Relationship Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Act as the primary point of contact for clients and stakeholders at the site.</li>
                        <li>Build and maintain strong relationships with clients, understanding their needs and expectations.</li>
                        <li>Address client issues and concerns promptly and professionally, ensuring high levels of client satisfaction.</li>
                    </ul>
                </li>
                <li><b>Service Performance and Quality:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Monitor service performance metrics and identify areas for improvement.</li>
                        <li>Implement corrective actions as needed to maintain service excellence.</li>
                        <li>Conduct regular audits and quality assessments to verify compliance and identify opportunities for improvement.</li>
                    </ul>
                </li>
                <li><b>Technical Support Oversight:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Oversee the resolution of IT incidents, service requests, and problems reported by users at the site.</li>
                        <li>Coordinate with the central support team and external vendors to ensure timely resolution and minimize downtime.</li>
                        <li>Ensure that technical support processes are followed and continuously improved.</li>
                    </ul>
                </li>
                <li><b>Resource Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Manage IT resources, including equipment, software, and licenses, to support site operations effectively.</li>
                        <li>Coordinate procurement, deployment, and maintenance activities to ensure optimal performance and reliability.</li>
                        <li>Implement security measures and controls to protect sensitive information and maintain operational continuity.</li>
                    </ul>
                </li>
                <li><b>Coordination with COR:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Work closely with the Contracting Officer’s Representative (COR) to ensure adherence to service level agreements (SLAs) and compliance with contractual obligations.</li>
                        <li>Report on performance targets and assist in the resolution of any contractual issues.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Proven experience in IT leadership roles, preferably in a contract or service delivery environment.</li>
                <li>Strong technical knowledge of IT systems, infrastructure, and support processes.</li>
                <li>Excellent communication skills, with the ability to interact effectively with clients, team members, and senior management.</li>
                <li>Demonstrated ability to manage teams, prioritize tasks, and solve complex problems in a fast-paced environment.</li>
                <li>Familiarity with ITIL (Information Technology Infrastructure Library) framework and best practices is desired but not mandatory.</li>
                <li>Relevant certifications (e.g., ITIL, CompTIA, Microsoft, Cisco, PMP) are desired but not mandatory.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Preferred Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Experience with ITIL framework and best practices.</li>
                <li>Certifications in relevant IT disciplines (e.g., ITIL, CompTIA, Microsoft, Cisco, PMP).</li>
                <li>Ability to implement and manage security measures and controls.</li>
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
