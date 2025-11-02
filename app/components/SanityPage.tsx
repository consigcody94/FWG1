import { PageBlocks } from "./blocks";
import { AnimatedBackground } from "./effects/AnimatedBackground";
import { FloatingParticles } from "./effects/FloatingParticles";

interface SanityPageProps {
  page: {
    title: string;
    description?: string;
    blocks?: any[];
  } | null;
}

export function SanityPage({ page }: SanityPageProps) {
  if (!page) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden">
        <AnimatedBackground />
        <FloatingParticles count={20} />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-black text-white gradient-text-animated mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-300">This page hasn't been created in the CMS yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles count={30} />
      <main className="relative z-10">
        <PageBlocks blocks={page.blocks} />
      </main>
    </div>
  );
}
