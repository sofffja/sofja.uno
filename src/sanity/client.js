import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "q17inq20",
  dataset: "production",
  apiVersion: "2024-03-11",
  useCdn: false,
});
