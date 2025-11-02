import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "3e5bb2b1-9af5-4872-9350-3e07d890973f",
  token: "c830407a1b2b821f1439b277921ba197b3d78c2e",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
