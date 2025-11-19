"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SuccessStory {
  client: string;
  logo?: string;
  summary: string;
  details: string[];
}

interface SuccessStoriesBlockProps {
  data: {
    heading?: string;
    subtitle?: string;
    stories?: SuccessStory[];
  };
}

export function SuccessStoriesBlock({ data }: SuccessStoriesBlockProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Default success stories if none provided
  const defaultStories: SuccessStory[] = [
    {
      client: "Census Bureau",
      logo: "/assets/clients/commerce.png",
      summary: "FWG played key roles in the planning and execution of the 2010 Decennial Census.",
      details: [
        "Technical expertise in field operations including logistics, recruiting, telecommunications, security systems, staffing, milestones, resource allocation, budgeting, and cost allocations",
        "Space and logistics management for 500 Local Census Offices, and 12 Regional Census Centers",
        "Nation-wide Tier 2-level help desk operations",
        "Assessed, and planned for the rapidly changing technology and emerging automated systems for data collection, data processing, data dissemination and information systems",
        "Full system design and development support"
      ]
    },
    {
      client: "Office of the Comptroller of the Currency",
      logo: "/assets/clients/treasury.png",
      summary: "During financial crisis, FWG was chosen as a partner with OCC to support the bank supervision's mission during the critical implementation of the Base II standards.",
      details: [
        "System support, resource allocation and planning associated with bank examination activities",
        "Enterprise-level activities",
        "Develop and implemented the information clearinghouse and other instruments of communications",
        "Standardized data collection methods, developed architecture models and defined data and functional requirements repositories and databases"
      ]
    },
    {
      client: "Internal Revenue Service",
      logo: "/assets/clients/treasury.png",
      summary: "FWG was tasked to provide strategic planning, strategic communications, and overall management support to deliver functional capabilities for the IRS to fulfill its obligations in terms of the complex legislation of the Patient Protection and Affordable Care Act.",
      details: [
        "Successfully formulated and executed strategies and action plans in preparation for the impact the Affordable Care Act will have on IRS tax systems",
        "Developed a concept of operations for transforming the investment management process at the IRS",
        "Organized requirements for process innovation",
        "Tactical support to achieve the detailed design and implementation of the ACA PMO"
      ]
    },
    {
      client: "USDA",
      logo: "/assets/clients/agriculture-83x83.png",
      summary: "FWG played a critical role in the successful development and launch of the USDA Public Health Information Systems (PHIS) training.",
      details: [
        "Developed documentation for computer-based training to support the deployment of the Public Health Information Systems including program definition, training needs and existing resources assessments, training agenda, draft and pilot training packages, and courseware simulations",
        "Developed and delivered a 2 week classroom based training for all field personnel (>5000 trainees)",
        "Developed an innovative courseware platform using standalone laptops which allow large groups of students to experience the system simultaneously and learn the software without requiring internet access"
      ]
    }
  ];

  const stories = data.stories && data.stories.length > 0 ? data.stories : defaultStories;

  const toggleStory = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl" data-tina-field="heading">
              {data.heading || "Success Stories"}
            </h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-900 to-purple-600" />
            {data.subtitle && (
              <p className="mt-6 text-xl text-slate-600" data-tina-field="subtitle">
                {data.subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {stories.map((story, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card-hover rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleStory(index)}
                  className="w-full p-4 md:p-8 text-left flex items-start gap-3 md:gap-6 hover:bg-slate-50 transition-colors"
                >
                  {story.logo && (
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={story.logo}
                        alt={`${story.client} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3" data-tina-field={`stories.${index}.client`}>
                      {story.client}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed" data-tina-field={`stories.${index}.summary`}>
                      {story.summary}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-2">
                    {expandedIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-800" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-blue-800" />
                    )}
                  </div>
                </button>

                {expandedIndex === index && (
                  <div className="px-4 md:px-8 pb-4 md:pb-8 pt-0">
                    <div className="border-t border-slate-200 pt-4 md:pt-6">
                      <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4">Our team:</h4>
                      <ul className="space-y-3">
                        {story.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex gap-3" data-tina-field={`stories.${index}.details.${detailIndex}`}>
                            <span className="text-blue-800 font-bold flex-shrink-0">•</span>
                            <span className="text-slate-600 leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
