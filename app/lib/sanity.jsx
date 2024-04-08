import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "eoslg9os",
  dataset: "production",
  apiVersion: "2024-04-04",
  useCdn: true,
});

const imageBuilder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  return imageBuilder.image(source);
};
