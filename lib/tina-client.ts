import { createClient, TinaClient } from "tinacms/dist/client";
import { queries } from "@/tina/__generated__/types";

// Create client for server-side data fetching
export const client = createClient({
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4001/graphql"
      : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "3e5bb2b1-9af5-4872-9350-3e07d890973f"}/github/${process.env.NEXT_PUBLIC_TINA_BRANCH || "main"}`,
  token: process.env.TINA_TOKEN || "c830407a1b2b821f1439b277921ba197b3d78c2e",
  queries,
});

export type { TinaClient };
