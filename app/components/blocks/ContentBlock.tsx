import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ContentBlockProps {
  data: {
    body?: any;
    backgroundColor?: string;
    textColor?: string;
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

  return (
    <section
      className="py-24"
      style={{
        backgroundColor: data.backgroundColor || 'white',
        color: data.textColor || undefined,
      }}
    >
      <div className={`mx-auto ${widthClass} px-6`}>
        <div className="prose prose-lg prose-slate max-w-none" data-tina-field="body">
          <TinaMarkdown content={data.body} />
        </div>
      </div>
    </section>
  );
}
