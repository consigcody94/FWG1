import { getPage, getAllPageSlugs } from "@/lib/sanity.queries";
import { SanityPage } from "../components/SanityPage";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DynamicPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.join("/");

  const page = await getPage(slug);

  if (!page) {
    notFound();
  }

  return <SanityPage page={page} />;
}

// Generate static params for all pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();

  return slugs
    .filter((slug: string) => slug !== "home") // Home is handled by app/page.tsx
    .map((slug: string) => ({
      slug: slug.split("/"),
    }));
}

export const revalidate = 60; // Revalidate every 60 seconds
