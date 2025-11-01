import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">System Administration</h1>
          <p className="mt-4 text-lg text-slate-600">Tuscaloosa, AL | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are seeking a highly skilled and experienced <b>System Administrator</b> to join our IT infrastructure team. The ideal candidate will have a deep understanding of storage infrastructure management within an enterprise environment, with expertise in various storage technologies and methodologies. This role involves deploying, managing, and optimizing storage solutions to ensure high availability, data integrity, and disaster recovery. If you are a professional with a strong background in storage technologies and related systems, we encourage you to apply.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Storage Infrastructure Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Manage and optimize enterprise storage infrastructure, including block-based (SAN, DAS, iSCSI), file-based (NFS, SMB/CIFS), and object-based (e.g., S3) storage technologies.</li>
                        <li>Oversee the deployment and management of highly available storage solutions in a heterogeneous operating environment.</li>
                    </ul>
                </li>
                <li><b>Storage Technologies:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Demonstrate strong knowledge of storage technologies, including storage virtualization, thin provisioning, data deduplication, and software-defined storage (SDS) concepts.</li>
                        <li>Implement and maintain configurations and storage security best practices.</li>
                    </ul>
                </li>
                <li><b>Data Management:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Manage data redundancy, resiliency, backup, and recovery processes.</li>
                        <li>Develop and implement disaster recovery methodologies to ensure data integrity and availability.</li>
                    </ul>
                </li>
                <li><b>Systems Integration:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Understand and manage interactions between storage infrastructure and adjacent technologies, including enterprise hypervisors (e.g., VMware, Xen) and operating systems (Windows, Linux).</li>
                        <li>Ensure seamless integration of storage technologies with various systems and platforms.</li>
                    </ul>
                </li>
                <li><b>Cloud and Hybrid Storage:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Evaluate and implement cloud storage solutions and disaster recovery options.</li>
                        <li>Manage hybrid storage models to optimize data management and accessibility.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Certifications and Compliance</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Maintain relevant certifications, such as NetApp Certified Data Administrator.</li>
                <li>Adhere to DoDM 8140.03 “Cybersecurity Workforce Qualification and Management Program” and DoD 8570.1-Manual “Information Assurance Workforce Improvement Program” for baseline certification standards.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Bachelor’s degree in Computer Science, Information Technology, or a related field, or equivalent experience.</li>
                <li>Proficiency in managing enterprise storage infrastructure, including SAN, DAS, iSCSI, NFS, SMB/CIFS, and object-based storage technologies.</li>
                <li>Experience with storage virtualization, thin provisioning, and data deduplication.</li>
                <li>Strong knowledge of software-defined storage (SDS) concepts and storage security best practices.</li>
                <li>Demonstrated experience in data redundancy, resiliency, backup, and recovery.</li>
                <li>Familiarity with cloud storage solutions and hybrid storage models.</li>
                <li>Relevant certifications such as NetApp Certified Data Administrator.</li>
                <li>Understanding of enterprise hypervisors (e.g., VMware, Xen) and traditional operating systems (Windows, Linux).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Preferred Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Experience with storage management tools and performance monitoring.</li>
                <li>Knowledge of emerging storage technologies and trends.</li>
                <li>Strong analytical and problem-solving skills with the ability to troubleshoot complex storage issues.</li>
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
