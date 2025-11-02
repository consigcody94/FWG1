import { PageBlocks } from "./blocks";

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
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Page Not Found</h1>
          <p className="mt-4 text-slate-600">This page hasn't been created in the CMS yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <main>
        <PageBlocks blocks={page.blocks} />
      </main>
    </div>
  );
}
