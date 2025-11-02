"use client";

import { useTina } from "tinacms/dist/react";
import client from "@/tina/__generated__/client";
import { PageBlocks } from "../components/blocks";

export default function DemoPage() {
  // For now, we'll use inline data until we set up proper data fetching
  // In production, this would come from getStaticProps or similar
  const initialData = {
    pages: {
      title: "Demo Page - Visual Editing",
      description: "This demo page shows Tina's visual editing in action",
      blocks: [
        {
          __typename: "PagesBlocksHero",
          title: "Welcome to Tina Visual Editing",
          subtitle: "Click any text to edit it in real-time!",
          buttonText: "Get Started",
          buttonLink: "/about",
        },
        {
          __typename: "PagesBlocksStats",
          items: [
            { value: "20+", label: "Years of Excellence" },
            { value: "500+", label: "Expert Professionals" },
            { value: "1000+", label: "Projects Completed" },
            { value: "150+", label: "Government Partners" },
          ],
        },
        {
          __typename: "PagesBlocksCta",
          heading: "Ready to Experience Tina?",
          text: "Start editing this page now and see your changes in real-time!",
          buttonText: "Go to Admin",
          buttonLink: "/admin",
        },
      ],
    },
  };

  const query = `
    query {
      pages(relativePath: "demo.json") {
        title
        description
        blocks {
          __typename
          ... on PagesBlocksHero {
            title
            subtitle
            buttonText
            buttonLink
            backgroundImage
          }
          ... on PagesBlocksStats {
            items {
              value
              label
            }
          }
          ... on PagesBlocksCta {
            heading
            text
            buttonText
            buttonLink
          }
          ... on PagesBlocksContent {
            body
          }
        }
      }
    }
  `;

  // Use the useTina hook for visual editing
  const { data } = useTina({
    query,
    variables: { relativePath: "demo.json" },
    data: initialData,
  });

  return (
    <div className="bg-white text-slate-900">
      <main>
        <PageBlocks blocks={data.pages.blocks} />
      </main>
    </div>
  );
}
