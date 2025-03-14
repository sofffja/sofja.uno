import { client } from "./client";

export async function getVisuals() {
  return client.fetch(`*[_type == "visual"] | order(date desc){
    ...,
    image {
        'url': asset->url,
        'dimensions': asset->metadata.dimensions,
      },
    }`);
}
