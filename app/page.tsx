'use client'

import { AnimatedBackground } from "./components/effects/AnimatedBackground";
import { FloatingParticles } from "./components/effects/FloatingParticles";
import { VideoHero } from "./components/effects/VideoHero";
import { ParallaxSection } from "./components/effects/ParallaxSection";
import { GlassCard } from "./components/ui/GlassCard";
import { StatsBlock } from "./components/blocks/StatsBlock";
import { TestimonialsBlock } from "./components/blocks/TestimonialsBlock";
import { CTABlock } from "./components/blocks/CTABlock";
import { motion } from "framer-motion";
import { Shield, Cloud, Network, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Advanced Background Effects (only for non-video sections) */}
      <div className="absolute inset-0 -z-10" style={{ top: '100vh' }}>
        <AnimatedBackground />
        <FloatingParticles count={40} />
      </div>

      {/* VIDEO HERO - Cinematic Full Height */}
      <VideoHero
        videoSrc="/assets/video1.mp4"
        title="FEDERAL WORKING GROUP"
        subtitle="Empowering Excellence Through Innovation, Collaboration, and Execution"
        badge="SINCE 2004 • TRUSTED BY FEDERAL AGENCIES"
        primaryCTA={{
          text: "Explore Our Capabilities",
          link: "/services",
        }}
        secondaryCTA={{
          text: "Access Employee Portal",
          link: "/employee-portal",
        }}
      />

      {/* ANIMATED STATS */}
      <ParallaxSection speed={0.1}>
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
      </ParallaxSection>

      {/* PREMIUM CAPABILITIES - Glassmorphic Cards */}
      <section className="relative py-32 px-6">
        <ParallaxSection speed={0.15}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2
                className="text-6xl md:text-7xl font-black mb-6 gradient-text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                SERVICES & SOLUTIONS
              </motion.h2>
              <motion.p
                className="text-xl text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Elite capabilities for mission-critical federal IT transformation
              </motion.p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Performance Management */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <GlassCard glow className="h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl glow-blue">
                      <TrendingUp className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        Business Performance Management
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Strategic planning, process optimization, and performance analytics to drive organizational excellence and measurable results.
                      </p>
                      <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300">
                        Data-Driven
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* IT Infrastructure & Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard glow className="h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl glow-cyan">
                      <Cloud className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        IT Infrastructure & Cloud Solutions
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Cloud computing, data center management, network architecture, and comprehensive IT modernization services.
                      </p>
                      <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm font-semibold text-cyan-300">
                        Cloud Native
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Enterprise Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard glow className="h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl glow-purple">
                      <Network className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        Enterprise Architecture
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Comprehensive enterprise architecture planning, design, and implementation aligned with your business goals and federal requirements.
                      </p>
                      <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300">
                        TOGAF Certified
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* IT Strategy & Security */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <GlassCard glow className="h-full">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl glow-blue">
                      <Shield className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        IT Strategy, Operations & Security
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Advanced cybersecurity, IT governance, risk management, and operational excellence frameworks for mission-critical systems.
                      </p>
                      <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-300">
                        FedRAMP Ready
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* CLIENT SUCCESS STORIES - Enhanced Testimonials */}
      <ParallaxSection speed={0.2}>
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
      </ParallaxSection>

      {/* PREMIUM CTA - Bold Call to Action */}
      <ParallaxSection speed={0.25}>
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
      </ParallaxSection>
    </div>
  );
}
