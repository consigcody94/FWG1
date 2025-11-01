import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">IT Security Specialist</h1>
          <p className="mt-4 text-lg text-slate-600">Tuscaloosa, AL | Full-Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">Federal Working Group Inc. is currently seeking an <b>IT Security Specialist</b>. To ensure success as a IT Security Specialist, you should have experience in installing and configuring Windows operating systems on both physical and virtual machines, as well as administering Endpoint Detection and Response (EDR) systems and managing related issues. This role is critical to ensuring our IT infrastructure is secure, efficient, and well-maintained.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Install and Configure Windows Operating Systems:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Install, configure, and maintain Windows operating systems on physical and virtual machines.</li>
                        <li>Ensure proper setup and integration with network infrastructure and security protocols.</li>
                        <li>Perform routine updates, patches, and system upgrades to maintain security and performance.</li>
                    </ul>
                </li>
                <li><b>Endpoint Detection and Response (EDR) Administration:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Manage and administer EDR solutions to monitor and protect endpoints.</li>
                        <li>Configure and deploy EDR tools across various endpoints including desktops, laptops, and servers.</li>
                        <li>Analyze alerts, investigate incidents, and respond to potential security threats.</li>
                    </ul>
                </li>
                <li><b>Issue Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Diagnose and resolve issues related to Windows operating systems and EDR systems.</li>
                        <li>Collaborate with other IT teams to address and resolve security incidents and vulnerabilities.</li>
                        <li>Document and track issues, providing timely updates and resolution reports.</li>
                    </ul>
                </li>
                <li><b>Security Best Practices:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Implement and enforce security policies and procedures to safeguard company data and systems.</li>
                        <li>Monitor system performance and security logs to identify and address potential threats.</li>
                        <li>Stay up-to-date with the latest security trends, threats, and technologies.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Documentation and Reporting</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Maintain accurate documentation of system configurations, changes, and security incidents.</li>
                <li>Prepare reports on system performance, security incidents, and remediation efforts.</li>
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
