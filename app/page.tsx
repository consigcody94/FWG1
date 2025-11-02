import { getPage } from "@/lib/sanity.queries";
import { SanityPage } from "./components/SanityPage";

export default async function Home() {
  // Fetch page data from Sanity
  const page = await getPage("home");

  return <SanityPage page={page} />;
}

export const revalidate = 60; // Revalidate every 60 seconds
