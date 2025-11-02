"use client";

import { useTina } from "tinacms/dist/react";
import { PageBlocks } from "./blocks";

interface TinaPageProps {
  data: any;
  query: string;
  variables: {
    relativePath: string;
  };
}

export function TinaPage({ data, query, variables }: TinaPageProps) {
  // Use the useTina hook for visual editing
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  // Debug: log the data structure (client-side only)
  if (typeof window !== 'undefined') {
    console.log('TinaPage received data:', tinaData);
    console.log('Blocks:', tinaData?.pages?.blocks);
  }

  return (
    <div className="bg-white text-slate-900">
      <main>
        <PageBlocks blocks={tinaData?.pages?.blocks} />
      </main>
    </div>
  );
}
