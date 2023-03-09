import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 576,
  site: "recipes",
  domains: ["recipes.deco.site"],
});