import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Enterprise Architect</h1>
          <p className="mt-4 text-lg text-slate-600">Suitland, MD | Full-Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">Federal Working Group Inc. is currently seeking an <b>Enterprise Architect</b>. To ensure success as an Enterprise Architect, you should have extensive experience being cloud technology implementations and security standards. To be successful in this role, the candidate must have solid problem-solving skills, extensive knowledge of cloud computing technologies, understanding of system development/integrations, and familiarity with road mapping.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Experience</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Experience in cloud technology, implementation, and security of newly designed systems as well as legacy within a cloud environment</li>
                <li>Experience with cloud technologies and understanding the implications of using IaaS, PaaS, SaaS, etc.</li>
                <li>Understanding and implementing best practices for large scale data ingestion, storage, and processing</li>
                <li>Knowledgeable on Hadoop including, but not limited to, and understanding of MapReduce, Spark, Hive, HBase, HDFS, and Kafka</li>
                <li>Excellent communication and organizational skills, and the ability to stay focused on completing tasks and meeting goals within a busy workspace</li>
                <li>Ability to interact with customers, ability to assess and gather customer requirements and turn them into appropriate implementations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Supporting current infrastructure costing proposals, both hardware and software configurations for the existing systems GEO owns will be reviewed, identified, and presented to support cost estimation for infrastructure maintenance</li>
                <li>Producing detailed component specifications and translates these into detailed designs for implementation</li>
                <li>Ensuring that relevant technical strategies, policies, standards, and practices are applied correctly</li>
                <li>Providing advice on technical aspects of system development and integration, including but not limited to performance, scalability, and elasticity</li>
                <li>Evaluating and undertake impact analysis on major design options and assesses and manages associated risks</li>
                <li>Ensuring integration and consistency of solution designs to the overall holistic business mission and objectives, thereby the Enterprise Architecture Framework</li>
                <li>Supporting of Application assessments</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Required Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Bachelors Degree in business management or equivalent in relevant work experience</li>
                <li>5+ years of industry experience in Enterprise Architecture</li>
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
