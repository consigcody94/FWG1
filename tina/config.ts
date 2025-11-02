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
      mediaRoot: "assets/uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // Homepage Content
      {
        name: "homepage",
        label: "🏠 Homepage",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "site-content",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Hero Subtitle",
          },
        ],
      },
      // Contact Info
      {
        name: "contact",
        label: "📞 Contact Info",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact-info",
        },
        fields: [
          {
            type: "string",
            name: "phone",
            label: "Phone",
          },
          {
            type: "string",
            name: "email",
            label: "Email",
          },
        ],
      },
      // Job Postings
      {
        name: "jobs",
        label: "💼 Jobs",
        path: "content/jobs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Job Title",
            required: true,
            isTitle: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
      },
    ],
  },
});
