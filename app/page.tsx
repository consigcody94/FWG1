import client from "@/tina/__generated__/client";
import { TinaPage } from "./components/TinaPage";

export default async function Home() {
  // Fetch page data from Tina
  const pageResponse = await client.queries.pages({ relativePath: "home.json" });

  return (
    <TinaPage
      data={pageResponse.data}
      query={pageResponse.query}
      variables={pageResponse.variables}
    />
  );
}
