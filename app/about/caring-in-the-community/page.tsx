import client from "@/tina/__generated__/client";
import { TinaPage } from "../../components/TinaPage";

export default async function CaringInTheCommunity() {
  const pageResponse = await client.queries.pages({ relativePath: "caring-in-the-community.json" });
  return <TinaPage data={pageResponse.data} query={pageResponse.query} variables={pageResponse.variables} />;
}
