import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ContentBlockProps {
  data: {
    body?: any;
  };
}

export function ContentBlock({ data }: ContentBlockProps) {
  if (!data.body) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="prose prose-lg prose-slate max-w-none" data-tina-field="body">
          <TinaMarkdown content={data.body} />
        </div>
      </div>
    </section>
  );
}
