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

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden">
      {/* Advanced Background Effects (only for non-video sections) - light version */}
      <div className="absolute inset-0 -z-10" style={{ top: '100vh' }}>
        <FloatingParticles count={40} />
      </div>

      {/* VIDEO HERO - Cinematic Full Height */}
      <VideoHero
        videoSrc="/assets/video2.mp4"
        title="FEDERAL WORKING GROUP"
        subtitle="Innovate. Collaborate. Execute."
        badge="SINCE 2004 • 20 YEARS OF EXCELLENCE"
        primaryCTA={{
          text: "Download Capabilities Statement",
          link: "/assets/FWGCap.pdf",
        }}
        secondaryCTA={{
          text: "Explore Our Services",
          link: "/services",
        }}
      />

      {/* ANIMATED STATS */}
      <ParallaxSection speed={0.1}>
        <StatsBlock
          data={{
            items: [
              {
                value: "20+",
                label: "Years of Excellence",
              },
              {
                value: "500+",
                label: "Expert Professionals",
              },
              {
                value: "1000+",
                label: "Projects Completed",
              },
              {
                value: "150+",
                label: "Government Partners",
              },
            ],
          }}
        />
      </ParallaxSection>

      {/* PREMIUM CAPABILITIES - Glassmorphic Cards */}
      <section className="relative py-32 px-6 bg-white">
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
                className="text-xl text-slate-600 max-w-3xl mx-auto"
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
                    <div className="p-4 bg-gradient-to-br from-blue-700/20 to-purple-500/20 rounded-2xl glow-blue">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        Program and Project Management
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Comprehensive program and project management services leveraging PMI standards and best practices to ensure successful project delivery and organizational excellence.
                      </p>
                      <div className="inline-block px-4 py-2 bg-blue-700/10 border border-blue-700/30 rounded-full text-sm font-semibold text-blue-800">
                        PMI Certified
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
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 rounded-2xl glow-cyan">
                      <Cloud className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        IT Infrastructure, Technologies & Solutions
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Comprehensive data center management and transformation services, cloud computing solutions, and cutting-edge IT infrastructure leveraging the latest technologies.
                      </p>
                      <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm font-semibold text-cyan-600">
                        Cloud & Infrastructure
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
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        Enterprise Architecture
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Strategic enterprise architecture services that align technology with business objectives, ensuring scalable and sustainable solutions for mission-critical federal systems.
                      </p>
                      <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-600">
                        Strategic Alignment
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
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        IT Security, Strategy & Operations
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Comprehensive IT security, strategic planning, and operational excellence services applying ITIL frameworks and Software Engineering Institute best practices for secure, mission-critical systems.
                      </p>
                      <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-600">
                        ITIL & SEI Standards
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* CLIENT SUCCESS STORIES - Detailed Project Highlights */}
      <SuccessStoriesBlock
        data={{
          heading: "Client Success Stories",
          subtitle: "Real-world impact across federal agencies"
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
