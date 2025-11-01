import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">E-Discovery Analyst</h1>
          <p className="mt-4 text-lg text-slate-600">Washington, DC | Full Time</p>
        </div>
        <div className="mt-12 prose lg:prose-xl">
            <span>Job Description</span>
            <p>We are seeking a skilled <b>E-Discovery Analyst</b> to join our team. The ideal candidate will have hands-on experience with Harvester for collecting electronically stored information (ESI), a strong background in identifying and searching ESI, and experience in project scheduling using Microsoft Project Server. This role is crucial for managing and executing e-discovery processes effectively and ensuring compliance with legal and regulatory requirements.</p>
            <hr />
            <p><b>Key Responsibilities:</b></p>
            <ul>
                <li><b>E-Discovery Collection:</b>
                    <ul>
                        <li>Utilize Harvester to collect ESI from various sources in an operational environment.</li>
                        <li>Ensure the collection process adheres to legal and organizational standards.</li>
                    </ul>
                </li>
                <li><b>Identification and Search of ESI:</b>
                    <ul>
                        <li>Identify and conduct thorough searches of ESI to support legal investigations, litigation, and compliance needs.</li>
                        <li>Apply advanced search techniques and tools to extract relevant data efficiently.</li>
                    </ul>
                </li>
                <li><b>Project Scheduling and Management:</b>
                    <ul>
                        <li>Create and maintain project schedules using Microsoft Project Server to manage e-discovery tasks and deadlines.</li>
                        <li>Track project progress, manage resources, and adjust schedules as necessary to meet project milestones.</li>
                    </ul>
                </li>
                <li><b>Collaboration and Communication:</b>
                    <ul>
                        <li>Work closely with legal teams, compliance officers, and IT staff to ensure the effective execution of e-discovery processes.</li>
                        <li>Communicate findings, updates, and project status to stakeholders clearly and promptly.</li>
                    </ul>
                </li>
                <li><b>Compliance and Best Practices:</b>
                    <ul>
                        <li>Ensure all e-discovery activities comply with legal, regulatory, and organizational policies.</li>
                        <li>Stay informed about best practices and developments in e-discovery and data management.</li>
                    </ul>
                </li>
            </ul>
            <hr />
            <p><b>Requirements:</b></p>
            <ul>
                <li><b>Experience:</b>
                    <ul>
                        <li>Minimum of two (2) years of professional experience using Harvester for ESI collection in an operational environment.</li>
                        <li>Minimum of four (4) years of professional experience in identifying and searching ESI.</li>
                        <li>Experience creating and maintaining project schedules using Microsoft Project Server is required.</li>
                    </ul>
                </li>
                <li><b>Skills and Knowledge:</b>
                    <ul>
                        <li>Proficiency in using Harvester and other e-discovery tools and technologies.</li>
                        <li>Strong understanding of ESI identification, search techniques, and data management.</li>
                        <li>Experience in project management, specifically using Microsoft Project Server, to oversee e-discovery projects.</li>
                    </ul>
                </li>
                <li><b>Additional Qualifications:</b>
                    <ul>
                        <li>Excellent analytical and problem-solving skills.</li>
                        <li>Strong attention to detail and the ability to handle complex data sets.</li>
                        <li>Effective communication skills, both written and verbal.</li>
                    </ul>
                </li>
                <li><b>About:</b>
                    <p>Federal Working Group is a Northern Virginia-based small business committed to delivering value through trust and loyalty of our customers, retaining highly skilled and experienced professionals, practical application of structured management frameworks, and implementing current best practices.</p>
                    <p>Federal Working Group’s core competencies are Agile IT Programs, Project Management Services, Enterprise Portfolio Management &amp; Governance Services, Infrastructure Strategy &amp; Data Center Supports, and IT Security, Strategy &amp; Operations.</p>
                    <p>Federal Working Group was established in 2004 as a competitive and high-performing company. The organization over the year has successfully grown from 4 employees to over 100. In addition, to being recognized as an outstanding solutions provider, Federal Working Group also has a proven track record to exceed customers’ expectations.</p>
                    <p>Federal Working Group, Inc. is an Equal Opportunity Employer.  All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or status as a protected veteran.</p>
                </li>
            </ul>
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
