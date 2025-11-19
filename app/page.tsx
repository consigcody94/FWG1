'use client'

import { AnimatedBackground } from "./components/effects/AnimatedBackground";
import { FloatingParticles } from "./components/effects/FloatingParticles";
import { VideoHero } from "./components/effects/VideoHero";
import { ParallaxSection } from "./components/effects/ParallaxSection";
import { GlassCard } from "./components/ui/GlassCard";
import { StatsBlock } from "./components/blocks/StatsBlock";
import { SuccessStoriesBlock } from "./components/blocks/SuccessStoriesBlock";
import { CTABlock } from "./components/blocks/CTABlock";
import { motion } from "framer-motion";
import { Shield, Cloud, Network, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface HomeSettings {
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroVideo: string;
  primaryCTAText: string;
  primaryCTALink: string;
  secondaryCTAText: string;
  secondaryCTALink: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  servicesSection: {
    heading: string;
    subtitle: string;
  };
  serviceCards: Array<{
    title: string;
    description: string;
    badge: string;
    icon: string;
  }>;
  successStoriesSection: {
    heading: string;
    subtitle: string;
  };
  ctaSection: {
    heading: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function Home() {
  // State for CMS content
  const [settings, setSettings] = useState<HomeSettings>({
    heroTitle: "FEDERAL WORKING GROUP",
    heroSubtitle: "Innovate. Collaborate. Execute.",
    heroBadge: "SINCE 2004 • 20 YEARS OF EXCELLENCE",
    heroVideo: "/assets/video2-upscaled.mp4",
    primaryCTAText: "Download Capabilities Statement",
    primaryCTALink: "/assets/FWGCap.pdf",
    secondaryCTAText: "Explore Our Services",
    secondaryCTALink: "/services",
    stats: [
      { value: "20+", label: "Years of Excellence" },
      { value: "500+", label: "Projects Delivered" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" }
    ],
    servicesSection: {
      heading: "SERVICES & SOLUTIONS",
      subtitle: "Elite capabilities for mission-critical federal IT transformation"
    },
    serviceCards: [
      { title: "Program and Project Management", description: "Comprehensive program and project management services leveraging PMI standards and best practices to ensure successful project delivery and organizational excellence.", badge: "PMI Certified", icon: "TrendingUp" },
      { title: "IT Infrastructure, Technologies & Solutions", description: "Comprehensive data center management and transformation services, cloud computing solutions, and cutting-edge IT infrastructure leveraging the latest technologies.", badge: "Cloud & Infrastructure", icon: "Cloud" },
      { title: "Enterprise Architecture", description: "Strategic enterprise architecture services that align technology with business objectives, ensuring scalable and sustainable solutions for mission-critical federal systems.", badge: "Strategic Alignment", icon: "Network" },
      { title: "IT Security, Strategy & Operations", description: "Comprehensive IT security, strategic planning, and operational excellence services applying ITIL frameworks and Software Engineering Institute best practices for secure, mission-critical systems.", badge: "ITIL & SEI Standards", icon: "Shield" }
    ],
    successStoriesSection: {
      heading: "Client Success Stories",
      subtitle: "Real-world impact across federal agencies"
    },
    ctaSection: {
      heading: "Discover Our Full Capabilities",
      text: "Download our comprehensive capabilities statement to learn how Federal Working Group can accelerate your mission success.",
      buttonText: "Download Capabilities Statement",
      buttonLink: "/assets/FWGCap.pdf"
    }
  });

  // Fetch CMS content on mount
  useEffect(() => {
    fetch('/api/home-settings')
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(err => console.error('Error loading home settings:', err));
  }, []);
  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden">
      {/* Advanced Background Effects (only for non-video sections) - light version */}
      <div className="absolute inset-0 -z-10" style={{ top: '100vh' }}>
        <FloatingParticles count={40} />
      </div>

      {/* VIDEO HERO - Cinematic Full Height - CMS EDITABLE */}
      <VideoHero
        videoSrc={settings.heroVideo}
        height="h-[70vh]"
        title={settings.heroTitle}
        subtitle={settings.heroSubtitle}
        badge={settings.heroBadge}
        primaryCTA={{
          text: settings.primaryCTAText,
          link: settings.primaryCTALink,
        }}
        secondaryCTA={{
          text: settings.secondaryCTAText,
          link: settings.secondaryCTALink,
        }}
        frostGlass={true}
      />

      {/* ANIMATED STATS - CMS EDITABLE */}
      <ParallaxSection speed={0.1}>
        <StatsBlock
          data={{
            items: settings.stats,
          }}
        />
      </ParallaxSection>

      {/* PREMIUM CAPABILITIES - Glassmorphic Cards - CMS EDITABLE */}
      <section className="relative py-32 px-6 bg-white">
        <ParallaxSection speed={0.15}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header - CMS EDITABLE */}
            <div className="text-center mb-20">
              <motion.h2
                className="text-6xl md:text-7xl font-black mb-6 gradient-text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {settings.servicesSection.heading}
              </motion.h2>
              <motion.p
                className="text-xl text-slate-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {settings.servicesSection.subtitle}
              </motion.p>
            </div>

            {/* Capabilities Grid - CMS EDITABLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {settings.serviceCards.map((card, index) => {
                // Icon mapping
                const IconComponent = card.icon === 'TrendingUp' ? TrendingUp :
                                     card.icon === 'Cloud' ? Cloud :
                                     card.icon === 'Network' ? Network : Shield;

                // Color schemes for each card
                const colorSchemes = [
                  { gradient: "from-blue-700/20 to-purple-500/20", glow: "glow-blue", iconColor: "text-blue-600", badgeBg: "bg-blue-700/10", badgeBorder: "border-blue-700/30", badgeText: "text-blue-800" },
                  { gradient: "from-cyan-500/20 to-blue-700/20", glow: "glow-cyan", iconColor: "text-cyan-400", badgeBg: "bg-cyan-500/10", badgeBorder: "border-cyan-500/30", badgeText: "text-cyan-600" },
                  { gradient: "from-purple-500/20 to-pink-500/20", glow: "glow-purple", iconColor: "text-purple-400", badgeBg: "bg-purple-500/10", badgeBorder: "border-purple-500/30", badgeText: "text-purple-600" },
                  { gradient: "from-green-500/20 to-emerald-500/20", glow: "glow-blue", iconColor: "text-green-400", badgeBg: "bg-green-500/10", badgeBorder: "border-green-500/30", badgeText: "text-green-600" }
                ];
                const colors = colorSchemes[index % colorSchemes.length];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <GlassCard glow className="h-full">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 bg-gradient-to-br ${colors.gradient} rounded-2xl ${colors.glow}`}>
                          <IconComponent className={`w-8 h-8 ${colors.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-slate-900">
                            {card.title}
                          </h3>
                          <p className="text-slate-600 mb-4">
                            {card.description}
                          </p>
                          <div className={`inline-block px-4 py-2 ${colors.badgeBg} border ${colors.badgeBorder} rounded-full text-sm font-semibold ${colors.badgeText}`}>
                            {card.badge}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* CLIENT SUCCESS STORIES - CMS EDITABLE */}
      <SuccessStoriesBlock
        data={{
          heading: settings.successStoriesSection.heading,
          subtitle: settings.successStoriesSection.subtitle
        }}
      />

      {/* PREMIUM CTA - CMS EDITABLE */}
      <CTABlock
        data={{
          heading: settings.ctaSection.heading,
          text: settings.ctaSection.text,
          buttonText: settings.ctaSection.buttonText,
          buttonLink: settings.ctaSection.buttonLink,
          backgroundColor: { hex: "#1E40AF" },
          textColor: { hex: "#FFFFFF" },
          buttonStyle: "solid",
          alignment: "center",
        }}
      />
    </div>
  );
}
