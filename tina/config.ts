import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

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
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "pages",
        label: "📄 Website Pages",
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
            type: "object",
            name: "hero",
            label: "Hero Section (Top Banner)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Main Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button 1 Text",
              },
              {
                type: "string",
                name: "secondButtonText",
                label: "Button 2 Text",
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Company Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "value",
                label: "Number",
                description: "e.g., 20+",
              },
              {
                type: "string",
                name: "label",
                label: "Description",
                description: "e.g., Years of Excellence",
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Service Name",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "object",
            name: "coreValues",
            label: "Core Values",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Value",
                description: "e.g., INNOVATE",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            list: true,
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Quote",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "author",
                label: "Author Name",
              },
              {
                type: "string",
                name: "role",
                label: "Author Title",
              },
            ],
          },
          {
            type: "object",
            name: "certifications",
            label: "Certifications",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Certification",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Description",
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "📞 Contact Information",
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
            label: "Phone Number",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "address",
            label: "Office Address",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hours",
            label: "Office Hours",
          },
        ],
      },
      {
        name: "jobs",
        label: "💼 Job Postings",
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
            type: "string",
            name: "location",
            label: "Location",
            options: [
              "Washington, DC",
              "McLean, VA",
              "Tuscaloosa, AL",
              "Remote",
            ],
          },
          {
            type: "string",
            name: "department",
            label: "Department",
          },
          {
            type: "string",
            name: "type",
            label: "Employment Type",
            options: ["Full Time", "Part Time", "Contract"],
          },
          {
            type: "rich-text",
            name: "description",
            label: "Job Description",
          },
          {
            type: "string",
            name: "requirements",
            label: "Requirements",
            list: true,
          },
          {
            type: "string",
            name: "salary",
            label: "Salary Range",
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
        ],
      },
    ],
  },
});
