import { PortableText } from '@portabletext/react'

interface ContentBlockProps {
  data: {
    body?: any;
    backgroundColor?: any;
    textColor?: any;
    maxWidth?: string;
  };
}

export function ContentBlock({ data }: ContentBlockProps) {
  if (!data.body) return null;

  const maxWidthClasses = {
    narrow: "max-w-2xl",
    medium: "max-w-4xl",
    wide: "max-w-6xl",
    full: "max-w-none"
  };

  const widthClass = maxWidthClasses[data.maxWidth as keyof typeof maxWidthClasses] || "max-w-4xl";

  // Extract color values from Sanity color objects
  const bgColor = data.backgroundColor?.hex || data.backgroundColor;
  const textColor = data.textColor?.hex || data.textColor;

  return (
    <section
      className="py-24"
      style={{
        backgroundColor: bgColor || 'white',
        color: textColor || undefined,
      }}
    >
      <div className={`mx-auto ${widthClass} px-6`}>
        <div className="prose prose-lg prose-slate max-w-none">
          <PortableText value={data.body} />
        </div>
      </div>
    </section>
  );
}
