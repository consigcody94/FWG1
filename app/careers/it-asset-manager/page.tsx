import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">IT Asset Manager</h1>
          <p className="mt-4 text-lg text-slate-600">Washington, DC | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are looking for a detail-oriented and experienced <b>IT Asset Manager</b> to join our team. The ideal candidate will have hands-on experience with ServiceNow SAM Professional and a strong understanding of the software asset management lifecycle. The role involves managing and optimizing IT asset inventory, ensuring accurate licensing, and providing industry best practices for software and hardware asset management. While ServiceNow CIS-SAM certification and IAITIAM CSAM certification are preferred, they are not required.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>ServiceNow SAM Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Utilize ServiceNow SAM Professional to manage and oversee the software asset management lifecycle from requisition through retirement.</li>
                        <li>Work with ServiceNow platform elements that integrate with the Asset Management Module, including IT Service Management, ServiceNow Discovery, CMDB, Vendor Management, Contract Management, and Microsoft Endpoint Configuration Manager Spoke.</li>
                    </ul>
                </li>
                <li><b>License and Contract Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Conduct quality checks of customers’ contract and purchase information to maintain accurate and complete summaries of licenses.</li>
                        <li>Ensure correct application of license rules to hardware and software inventory data, reflecting accurate contractual entitlement.</li>
                        <li>Compare contractual entitlements with utilization to assess licensing gaps and surpluses, and provide consulting services on best practices to optimize licensing positions and avoid unnecessary costs.</li>
                    </ul>
                </li>
                <li><b>Data Management and Analysis:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Collect, cleanse, and normalize software discovery and inventory information to ensure all relevant licensing data points are captured.</li>
                        <li>Oversee the maintenance of accurate asset records and ensure data integrity across the asset management system.</li>
                    </ul>
                </li>
                <li><b>Best Practices and Recommendations:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Provide industry recommendations and best practices for managing software and hardware assets.</li>
                        <li>Share practical experience on the convergence between software and hardware asset management, offering insights on managing both concurrently.</li>
                    </ul>
                </li>
                <li><b>Continuous Improvement:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Stay updated on industry trends and changes in asset management practices.</li>
                        <li>Recommend improvements to processes and tools to enhance asset management efficiency and effectiveness.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Experience:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Minimum of 2 years of experience using ServiceNow SAM Professional.</li>
                        <li>Minimum of 2 years of experience working with ServiceNow platform elements that integrate with the Asset Management Module, such as IT Service Management, ServiceNow Discovery, CMDB, Vendor Management, Contract Management, or Microsoft Endpoint Configuration Manager Spoke.</li>
                        <li>Minimum of 3 years of expertise in the entire software asset management lifecycle.</li>
                    </ul>
                </li>
                <li><b>Skills and Knowledge:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Proven experience in quality check analysis of contracts and purchase information.</li>
                        <li>Expertise in applying license rules to inventory data and assessing licensing gaps and surpluses.</li>
                        <li>Experience in collecting, cleansing, and managing software discovery and inventory data.</li>
                        <li>Ability to provide industry recommendations and best practices for asset management.</li>
                    </ul>
                </li>
                <li><b>Certifications (Preferred, but not required):</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>ServiceNow CIS-SAM certification.</li>
                        <li>IAITIAM CSAM certification.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Preferred Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Strong analytical and problem-solving skills.</li>
                <li>Excellent communication and interpersonal skills.</li>
                <li>Ability to work collaboratively with cross-functional teams and stakeholders.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">About</h2>
            <p className="mb-6">Federal Working Group is a Northern Virginia-based small business committed to delivering value through trust and loyalty of our customers, retaining highly skilled and experienced professionals, practical application of structured management frameworks, and implementing current best practices.</p>
            <p className="mb-6">Federal Working Group’s core competencies are Agile IT Programs, Project Management Services, Enterprise Portfolio Management &amp; Governance Services, Infrastructure Strategy &amp; Data Center Supports, and IT Security, Strategy &amp; Operations.</p>
            <p className="mb-6">Federal Working Group was established in 2004 as a competitive and high-performing company. The organization over the year has successfully grown from 4 employees to over 100. In addition, to being recognized as an outstanding solutions provider, Federal Working Group also has a proven track record to exceed customers’ expectations.</p>
            <p>Federal Working Group, Inc. is an Equal Opportunity Employer.  All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.</p>
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
