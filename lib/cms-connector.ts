// CMS Connector - Bridges Decap CMS with your Next.js site
import fs from "fs";
import path from "path";

export interface CMSContent {
  hero?: {
    title: string;
    subtitle: string;
    buttonText: string;
    secondButtonText: string;
  };
  stats?: Array<{ value: string; label: string }>;
  about?: {
    title: string;
    content: string;
  };
  services?: Array<{
    title: string;
    description: string;
    image?: string;
  }>;
  coreValues?: Array<{
    title: string;
    description: string;
  }>;
  testimonials?: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  certifications?: Array<{
    title: string;
    subtitle: string;
  }>;
}

export async function getSiteContent(): Promise<CMSContent> {
  try {
    const filePath = path.join(process.cwd(), "content", "site-content.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.error("Error reading CMS content:", error);
  }

  // Return default content if file doesn't exist
  return {
    hero: {
      title: "Welcome to Federal Working Group",
      subtitle:
        "Empowering Excellence Through Innovation, Collaboration, and Execution",
      buttonText: "Access Portal",
      secondButtonText: "Explore Services",
    },
    stats: [
      { value: "20", label: "Years of Excellence" },
      { value: "500", label: "Expert Professionals" },
      { value: "1000", label: "Projects Completed" },
      { value: "150", label: "Government Partners" },
    ],
  };
}

export async function getContactInfo() {
  try {
    const filePath = path.join(process.cwd(), "content", "contact-info.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.error("Error reading contact info:", error);
  }

  return {
    phone: "(703) 243-0604",
    email: "info@federalworking.com",
    address: "7918 Jones Branch Drive, Suite 450\nMcLean, VA 22102",
    hours: "Monday-Friday 9:00 AM - 5:00 PM EST",
  };
}

export async function getAllJobs() {
  const jobsDir = path.join(process.cwd(), "content", "jobs");
  if (!fs.existsSync(jobsDir)) return [];

  const files = fs.readdirSync(jobsDir);
  const jobs = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const content = fs.readFileSync(path.join(jobsDir, file), "utf-8");
      return JSON.parse(content);
    })
    .filter((job) => job.published !== false);

  return jobs;
}
