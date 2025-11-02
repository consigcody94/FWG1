import client from "@/tina/__generated__/client";
import { TinaPage } from "../../components/TinaPage";

export default async function JobPage() {
  const pageResponse = await client.queries.pages({ relativePath: "it-asset-manager.json" });
  return <TinaPage data={pageResponse.data} query={pageResponse.query} variables={pageResponse.variables} />;
}
