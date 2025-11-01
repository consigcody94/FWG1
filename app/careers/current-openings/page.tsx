import { NextPage } from "next";
import Link from "next/link";

const openings = [
  { title: "E-Discovery Analyst", location: "Washington, DC", type: "Full Time" },
  { title: "IT Asset Manager", location: "Washington, DC", type: "Full Time" },
  { title: "Project Manager", location: "Washington, DC", type: "Full Time" },
  { title: "IT Project Site Lead", location: "Tuscaloosa, AL", type: "Full Time" },
  { title: "Senior Project Online Analyst", location: "Washington, DC", type: "Full Time" },
  { title: "System Administration", location: "Tuscaloosa, AL", type: "Full Time" },
  { title: "Help Desk Specialist", location: "Tuscaloosa, AL", type: "Full Time" },
  { title: "Network Engineer", location: "Tuscaloosa, AL", type: "Full Time" },
  { title: "IT Security Specialist", location: "Tuscaloosa, AL", type: "Full-Time" },
  { title: "Enterprise Architect", location: "Suitland, MD", type: "Full-Time" },
];

const slugMapping: { [key: string]: string } = {
  "E-Discovery Analyst": "e-discovery-analyst",
  "IT Asset Manager": "it-asset-manager",
  "Project Manager": "project-manager",
  "IT Project Site Lead": "it-project-site-lead",
  "Senior Project Online Analyst": "senior-project-online-analyst",
  "System Administration": "system-administration",
  "Help Desk Specialist": "help-desk-specialist",
  "Network Engineer": "network-engineer",
  "IT Security Specialist": "itsecurityspecialist",
  "Enterprise Architect": "enterprise-architect",
};

const CurrentOpeningsPage: NextPage = () => {
  return (
    <div className="bg-white text-slate-900">
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h1 className="text-3xl font-semibold text-slate-900 text-center">Current Openings</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-slate-900" />
            <div className="mt-12 space-y-8">
              {openings.map((opening) => (
                <Link href={`/careers/${slugMapping[opening.title]}`} key={opening.title} className="p-6 border border-slate-200 rounded-lg hover:border-slate-400 block">
                  <h2 className="text-xl font-semibold text-slate-800">{opening.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {opening.type} - {opening.location}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CurrentOpeningsPage;
