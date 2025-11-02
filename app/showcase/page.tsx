import { HeroBlock } from "../components/blocks/HeroBlock";
import { StatsBlock } from "../components/blocks/StatsBlock";
import { CapabilitiesMatrixBlock } from "../components/blocks/CapabilitiesMatrixBlock";
import { ClientsLogosBlock } from "../components/blocks/ClientsLogosBlock";
import { CTABlock } from "../components/blocks/CTABlock";

export const metadata = {
  title: "Federal Working Group - Premium IT Solutions",
  description: "Excellence in federal cybersecurity, cloud modernization, and enterprise transformation since 2004",
};

export default function ShowcasePage() {
  return (
    <div className="bg-black text-white">
      {/* Premium Hero */}
      <HeroBlock
        data={{
          badge: "Since 2004 • Trusted by Federal Agencies",
          title: "FEDERAL WORKING GROUP",
          subtitle: "Elite cybersecurity, cloud modernization, and mission-critical IT solutions for the U.S. federal government.",
          buttonText: "Explore Our Capabilities",
          buttonLink: "/services",
          secondaryButton: {
            text: "Contact Our Team",
            link: "/contact",
          },
          alignment: "center",
          height: "100vh",
          overlayPattern: "grid",
          backgroundColor: { hex: "#0A0F1C" },
          textColor: { hex: "#FFFFFF" },
        }}
      />

      {/* Animated Stats */}
      <StatsBlock
        data={{
          layout: "grid",
          animated: true,
          showSeparators: false,
          backgroundColor: { hex: "#0F172A" },
          items: [
            {
              value: "20",
              suffix: "+",
              label: "Years of Excellence",
              subtext: "Serving Federal Agencies",
              icon: "Award",
            },
            {
              value: "500",
              suffix: "+",
              label: "Cleared Personnel",
              subtext: "Top Secret & TS/SCI",
              icon: "Shield",
            },
            {
              value: "50",
              suffix: "+",
              label: "Federal Agencies",
              subtext: "Mission Success",
              icon: "Building2",
            },
            {
              value: "1000",
              suffix: "+",
              label: "Projects Delivered",
              subtext: "On Time, On Budget",
              icon: "CheckCircle2",
            },
          ],
        }}
      />

      {/* Capabilities Matrix */}
      <CapabilitiesMatrixBlock
        data={{
          heading: "ELITE CAPABILITIES",
          description: "Mission-critical services trusted by the most demanding federal agencies",
          layout: "3",
          hoverEffect: "lift",
          cardStyle: "solid",
          backgroundColor: { hex: "#000000" },
          capabilities: [
            {
              title: "Advanced Cybersecurity",
              description: "Zero-trust architecture, threat intelligence, SOC operations, and incident response for mission-critical systems.",
              icon: "Shield",
              stat: "FedRAMP Authorized",
            },
            {
              title: "Cloud Modernization",
              description: "Enterprise migration to AWS GovCloud, Azure Government, and hybrid multi-cloud architectures with DevSecOps.",
              icon: "Cloud",
              stat: "Cloud Native",
            },
            {
              title: "Enterprise Architecture",
              description: "Strategic IT transformation, system integration, and digital modernization aligned with federal mandates.",
              icon: "Network",
              stat: "TOGAF Certified",
            },
            {
              title: "Data & Analytics",
              description: "Big data platforms, AI/ML solutions, predictive analytics, and business intelligence for data-driven decisions.",
              icon: "BarChart3",
              stat: "Analytics at Scale",
            },
            {
              title: "IT Operations",
              description: "24/7/365 infrastructure management, monitoring, help desk support, and service delivery excellence.",
              icon: "Settings",
              stat: "99.99% Uptime",
            },
            {
              title: "Program Management",
              description: "Agile delivery, PMO services, portfolio management, and governance frameworks for mission success.",
              icon: "Target",
              stat: "PMP Certified",
            },
          ],
        }}
      />

      {/* Federal Clients Logos */}
      <ClientsLogosBlock
        data={{
          heading: "TRUSTED BY FEDERAL LEADERS",
          description: "Delivering excellence across defense, intelligence, and civilian agencies",
          displayStyle: "grid",
          columns: 4,
          logoSize: "lg",
          grayscale: true,
          backgroundColor: { hex: "#0F172A" },
          logos: [
            // Note: You'll need to add actual agency logos through Sanity Studio
          ],
        }}
      />

      {/* Premium CTA */}
      <CTABlock
        data={{
          heading: "READY TO ACCELERATE YOUR MISSION?",
          text: "Partner with Federal Working Group for unmatched expertise in federal IT transformation.",
          buttonText: "Request Capabilities Brief",
          buttonLink: "/contact",
          backgroundColor: { hex: "#1E40AF" },
          textColor: { hex: "#FFFFFF" },
          buttonStyle: "solid",
          alignment: "center",
        }}
      />
    </div>
  );
}
