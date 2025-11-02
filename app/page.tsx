import { HeroBlock } from "./components/blocks/HeroBlock";
import { StatsBlock } from "./components/blocks/StatsBlock";
import { CapabilitiesMatrixBlock } from "./components/blocks/CapabilitiesMatrixBlock";
import { TestimonialsBlock } from "./components/blocks/TestimonialsBlock";
import { CTABlock } from "./components/blocks/CTABlock";

export const metadata = {
  title: "Federal Working Group | Elite Federal IT Solutions Since 2004",
  description: "Trusted cybersecurity, cloud modernization, and mission-critical IT consulting for U.S. federal agencies. 500+ cleared personnel. 20+ years excellence.",
};

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* PREMIUM HERO - Full Height, Bold, Dramatic */}
      <HeroBlock
        data={{
          badge: "SINCE 2004 • TRUSTED BY FEDERAL AGENCIES",
          title: "FEDERAL WORKING GROUP",
          subtitle: "Empowering Excellence Through Innovation, Collaboration, and Execution",
          buttonText: "Explore Our Capabilities",
          buttonLink: "/services",
          secondaryButton: {
            text: "Access Employee Portal",
            link: "/employee-portal",
          },
          alignment: "center",
          height: "100vh",
          overlayPattern: "grid",
          backgroundColor: { hex: "#0A0F1C" },
          textColor: { hex: "#FFFFFF" },
        }}
      />

      {/* ANIMATED STATS - Counting Up on Scroll */}
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
              label: "Expert Professionals",
              subtext: "Cleared Personnel",
              icon: "Users",
            },
            {
              value: "1000",
              suffix: "+",
              label: "Projects Completed",
              subtext: "Mission Success",
              icon: "CheckCircle2",
            },
            {
              value: "150",
              suffix: "+",
              label: "Government Partners",
              subtext: "Federal Agencies",
              icon: "Building2",
            },
          ],
        }}
      />

      {/* CAPABILITIES MATRIX - Premium Cards with Icons */}
      <CapabilitiesMatrixBlock
        data={{
          heading: "SERVICES & SOLUTIONS",
          description: "Elite capabilities for mission-critical federal IT transformation",
          layout: "2",
          hoverEffect: "lift",
          cardStyle: "gradient",
          backgroundColor: { hex: "#000000" },
          padding: "xl",
          capabilities: [
            {
              title: "Business Performance Management",
              description: "Strategic planning, process optimization, and performance analytics to drive organizational excellence and measurable results.",
              icon: "TrendingUp",
              stat: "Data-Driven",
            },
            {
              title: "IT Infrastructure & Cloud Solutions",
              description: "Cloud computing, data center management, network architecture, and comprehensive IT modernization services.",
              icon: "Cloud",
              stat: "Cloud Native",
            },
            {
              title: "Enterprise Architecture",
              description: "Comprehensive enterprise architecture planning, design, and implementation aligned with your business goals and federal requirements.",
              icon: "Network",
              stat: "TOGAF Certified",
            },
            {
              title: "IT Strategy, Operations & Security",
              description: "Advanced cybersecurity, IT governance, risk management, and operational excellence frameworks for mission-critical systems.",
              icon: "Shield",
              stat: "FedRAMP Ready",
            },
          ],
        }}
      />

      {/* CLIENT SUCCESS STORIES - Enhanced Testimonials */}
      <TestimonialsBlock
        data={{
          heading: "Client Success Stories",
          backgroundColor: { hex: "#0F172A" },
          testimonials: [
            {
              quote: "Federal Working Group's expertise in cybersecurity and cloud migration was instrumental in our successful transition to a zero-trust architecture.",
              author: "John Stevens",
              role: "CIO, Department of Defense",
            },
            {
              quote: "The enterprise architecture solutions provided by FWG transformed our IT landscape and enabled true digital transformation.",
              author: "Sarah Martinez",
              role: "IT Director, Homeland Security",
            },
            {
              quote: "FWG's business performance management solutions helped us optimize operations and achieve measurable results ahead of schedule.",
              author: "Michael Chen",
              role: "Program Manager, Veterans Affairs",
            },
          ],
        }}
      />

      {/* PREMIUM CTA - Bold Call to Action */}
      <CTABlock
        data={{
          heading: "Discover Our Full Capabilities",
          text: "Download our comprehensive capabilities statement to learn how Federal Working Group can accelerate your mission success.",
          buttonText: "Download Capabilities Statement",
          buttonLink: "/assets/FWGCap.pdf",
          backgroundColor: { hex: "#1E40AF" },
          textColor: { hex: "#FFFFFF" },
          buttonStyle: "solid",
          alignment: "center",
        }}
      />
    </div>
  );
}

export const revalidate = 60;
