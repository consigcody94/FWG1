import { HeroBlock } from "./HeroBlock";
import { StatsBlock } from "./StatsBlock";
import { ContentBlock } from "./ContentBlock";
import { CTABlock } from "./CTABlock";
import { ServicesBlock } from "./ServicesBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { TeamBlock } from "./TeamBlock";

export const Blocks = {
  hero: HeroBlock,
  stats: StatsBlock,
  content: ContentBlock,
  cta: CTABlock,
  services: ServicesBlock,
  testimonials: TestimonialsBlock,
  team: TeamBlock,
};

interface PageBlocksProps {
  blocks?: Array<{
    __typename: string;
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
      {blocks.map((block, index) => {
        const blockType = block.__typename?.replace("PagesBlocks", "").toLowerCase();
        const Component = Blocks[blockType as keyof typeof Blocks];

        if (!Component) {
          console.warn(`No component found for block type: ${blockType}`);
          return null;
        }

        return <Component key={index} data={block} />;
      })}
    </>
  );
}
