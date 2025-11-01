import React from "react";
import Link from "next/link";

const JobPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Network Engineer</h1>
          <p className="mt-4 text-lg text-slate-600">Tuscaloosa, AL | Full Time</p>
        </div>
        <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Job Description</h2>
            <p className="mb-6">We are seeking a highly skilled and motivated <b>Network Engineer</b> to join our IT team. The ideal candidate will have a strong background in network administration, security technologies, and automation. This role involves managing and optimizing network infrastructure, ensuring security and performance, and troubleshooting network issues. If you are passionate about network technologies and enjoy solving complex problems, we encourage you to apply.</p>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Key Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><b>Network Administration:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Manage and maintain LAN, WAN, and wireless networks to ensure optimal performance and reliability.</li>
                        <li>Configure, monitor, and troubleshoot network devices including routers, switches, and wireless access points.</li>
                        <li>Implement and manage network security measures to protect against unauthorized access and data breaches.</li>
                    </ul>
                </li>
                <li><b>Network Security Technologies:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Deploy and maintain security technologies such as firewalls, intrusion prevention systems (IPS), web proxies and filters, and VPNs.</li>
                        <li>Develop and enforce security policies and procedures to safeguard the network infrastructure.</li>
                    </ul>
                </li>
                <li><b>Network Access Control (NAC):</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Implement and manage NAC technologies, including 802.1X and switchport security, to control and monitor network access.</li>
                        <li>Ensure compliance with access control policies and troubleshoot access-related issues.</li>
                    </ul>
                </li>
                <li><b>Routing Protocols:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Configure and manage routing protocols such as policy-based routing (PBR), OSPF, and BGP.</li>
                        <li>Optimize routing performance and troubleshoot routing issues.</li>
                    </ul>
                </li>
                <li><b>Network Automation:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Utilize network automation tools, such as Ansible, to streamline and automate network configuration and management tasks.</li>
                        <li>Develop scripts and automation workflows to enhance network efficiency and reduce manual intervention.</li>
                    </ul>
                </li>
                <li><b>OS-Level Network Technologies:</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Understand and manage OS-level network technologies and protocols, including their behaviors and requirements.</li>
                        <li>Troubleshoot OS-level network issues and optimize network performance.</li>
                    </ul>
                </li>
                <li><b>IP Address Management (IPAM):</b>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                        <li>Oversee IP address management, including allocation, tracking, and planning.</li>
                        <li>Ensure efficient use of IP address space and address related issues as they arise.</li>
                    </ul>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Analytical and Problem-Solving Skills</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Analyze and resolve network-related issues promptly and effectively.</li>
                <li>Perform root cause analysis and develop solutions to prevent recurrence of issues.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 mb-4">Qualifications</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Bachelor’s degree in Computer Science, Information Technology, Network Engineering, or a related field, or equivalent experience.</li>
                <li>Proven experience in network administration and management, including LAN, WAN, and wireless technologies.</li>
                <li>Proficiency with network security technologies such as firewalls, IPS, web proxies, filters, and VPNs.</li>
                <li>Strong understanding of network access control (NAC) technologies, including 802.1X and switchport security.</li>
                <li>Experience with routing protocols, including policy-based routing (PBR), OSPF, and BGP.</li>
                <li>Familiarity with network automation tools such as Ansible.</li>
                <li>In-depth knowledge of OS-level network technologies, protocols, and their behaviors.</li>
                <li>Experience with IP address management (IPAM).</li>
                <li>Excellent analytical and problem-solving skills with the ability to troubleshoot complex network issues.</li>
                <li>Relevant certifications (e.g., CCNA, CCNP, CompTIA Network+) are a plus.</li>
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
