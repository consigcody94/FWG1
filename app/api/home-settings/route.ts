import { NextResponse } from 'next/server';
import { getHomeSettings } from '@/app/lib/content';

export async function GET() {
  const settings = getHomeSettings();

  if (!settings) {
    return NextResponse.json({
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
      ]
    });
  }

  return NextResponse.json(settings);
}

// Enable revalidation so changes show up quickly
export const revalidate = 0;
