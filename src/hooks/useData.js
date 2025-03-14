import { useQuery } from "@tanstack/react-query";
import * as sanityUtils from "../sanity/sanity-utils";

export function useVisuals() {
  return useQuery({
    queryKey: ["visual"],
    queryFn: sanityUtils.getVisuals,
  });
}
