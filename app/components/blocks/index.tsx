import { HeroBlock } from "./HeroBlock";
import { VideoHeroBlock } from "./VideoHeroBlock";
import { ClientsLogosBlock } from "./ClientsLogosBlock";
import { StatsBlock } from "./StatsBlock";
import { ContentBlock } from "./ContentBlock";
import { CTABlock } from "./CTABlock";
import { ServicesBlock } from "./ServicesBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { TeamBlock } from "./TeamBlock";

export const Blocks = {
  hero: HeroBlock,
  videoHero: VideoHeroBlock,
  clientsLogos: ClientsLogosBlock,
  stats: StatsBlock,
  content: ContentBlock,
  cta: CTABlock,
  services: ServicesBlock,
  testimonials: TestimonialsBlock,
  team: TeamBlock,
};

interface PageBlocksProps {
  blocks?: Array<{
    _type: string;
    _key: string;
    [key: string]: any;
  }>;
}

export function PageBlocks({ blocks }: PageBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-24 text-center text-slate-600">
        <p>No content blocks yet. Add some in the CMS!</p>
      </div>
    );
  }

  return (
    <>
      {blocks.map((block) => {
        // Sanity uses _type directly (e.g., "hero", "stats", etc.)
        const blockType = block._type;
        const Component = Blocks[blockType as keyof typeof Blocks];

        if (!Component) {
          console.warn(`No component found for block type: ${blockType}`, block);
          return (
            <div key={block._key} className="border-2 border-red-500 p-4 m-4">
              <p className="text-red-600">Unknown block type: {blockType}</p>
              <pre className="text-xs">{JSON.stringify(block, null, 2)}</pre>
            </div>
          );
        }

        // Pass the entire block as data - components will extract what they need
        return <Component key={block._key} data={block as any} />;
      })}
    </>
  );
}
