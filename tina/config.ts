import { defineConfig, type Template } from "tinacms";

// Reusable component blocks for page builder
const pageBlocks: Template[] = [
  {
    name: "hero",
    label: "Hero Section",
    fields: [
      { type: "string", name: "title", label: "Title" },
      { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
      { type: "string", name: "buttonText", label: "Button Text" },
      { type: "string", name: "buttonLink", label: "Button Link" },
      { type: "image", name: "backgroundImage", label: "Background Image" },
    ],
  },
  {
    name: "stats",
    label: "Statistics",
    fields: [
      {
        type: "object",
        name: "items",
        label: "Stats",
        list: true,
        fields: [
          { type: "string", name: "value", label: "Number" },
          { type: "string", name: "label", label: "Label" },
        ],
      },
    ],
  },
  {
    name: "services",
    label: "Services Grid",
    fields: [
      { type: "string", name: "heading", label: "Section Heading" },
      {
        type: "object",
        name: "services",
        label: "Services",
        list: true,
        fields: [
          { type: "string", name: "title", label: "Service Name" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "icon", label: "Icon/Image" },
        ],
      },
    ],
  },
  {
    name: "testimonials",
    label: "Testimonials",
    fields: [
      { type: "string", name: "heading", label: "Section Heading" },
      {
        type: "object",
        name: "testimonials",
        label: "Testimonials",
        list: true,
        fields: [
          { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
          { type: "string", name: "author", label: "Author Name" },
          { type: "string", name: "role", label: "Author Title" },
          { type: "image", name: "avatar", label: "Avatar" },
        ],
      },
    ],
  },
  {
    name: "content",
    label: "Rich Content",
    fields: [
      { type: "rich-text", name: "body", label: "Content", isBody: true },
    ],
  },
  {
    name: "team",
    label: "Team Members",
    fields: [
      { type: "string", name: "heading", label: "Section Heading" },
      {
        type: "object",
        name: "members",
        label: "Team Members",
        list: true,
        fields: [
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "role", label: "Role/Title" },
          { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
          { type: "image", name: "photo", label: "Photo" },
          { type: "string", name: "email", label: "Email" },
        ],
      },
    ],
  },
  {
    name: "cta",
    label: "Call to Action",
    fields: [
      { type: "string", name: "heading", label: "Heading" },
      { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
      { type: "string", name: "buttonText", label: "Button Text" },
      { type: "string", name: "buttonLink", label: "Button Link" },
    ],
  },
];

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

  search: {
    tina: {
      indexerToken: "cc4aae63c066b4b9890f0cc4cb6b5ea2166e5155",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  schema: {
    collections: [
      // ====================
      // PAGES (Block-Based Page Builder)
      // ====================
      {
        name: "pages",
        label: "📄 Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "SEO Description",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "blocks",
            label: "Page Content (Drag to Reorder)",
            list: true,
            templates: pageBlocks,
          },
        ],
      },

      // ====================
      // NAVIGATION
      // ====================
      {
        name: "navigation",
        label: "🧭 Navigation",
        path: "content/navigation",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "Menu Items",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label", required: true },
              { type: "string", name: "href", label: "Link" },
              {
                type: "object",
                name: "subItems",
                label: "Sub-menu Items",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
            ],
          },
        ],
      },

      // ====================
      // SITE SETTINGS
      // ====================
      {
        name: "settings",
        label: "⚙️ Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "general",
        },
        fields: [
          { type: "string", name: "siteName", label: "Site Name" },
          { type: "string", name: "siteUrl", label: "Site URL" },
          { type: "string", name: "logo", label: "Logo Path" },
          { type: "string", name: "tagline", label: "Tagline" },
          {
            type: "object",
            name: "social",
            label: "Social Media",
            fields: [
              { type: "string", name: "twitter", label: "Twitter URL" },
              { type: "string", name: "linkedin", label: "LinkedIn URL" },
              { type: "string", name: "facebook", label: "Facebook URL" },
              { type: "string", name: "github", label: "GitHub URL" },
            ],
          },
        ],
      },

      // ====================
      // CONTACT INFO
      // ====================
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
          { type: "string", name: "phone", label: "Phone Number" },
          { type: "string", name: "email", label: "Email Address" },
          { type: "string", name: "address", label: "Office Address", ui: { component: "textarea" } },
          { type: "string", name: "hours", label: "Office Hours" },
        ],
      },

      // ====================
      // JOB POSTINGS
      // ====================
      {
        name: "jobs",
        label: "💼 Job Postings",
        path: "content/jobs",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Job Title", required: true, isTitle: true },
          { type: "string", name: "location", label: "Location" },
          { type: "string", name: "department", label: "Department" },
          { type: "string", name: "type", label: "Employment Type", options: ["Full Time", "Part Time", "Contract"] },
          { type: "rich-text", name: "body", label: "Job Description", isBody: true },
          {
            type: "string",
            name: "requirements",
            label: "Requirements",
            list: true,
          },
          { type: "string", name: "salary", label: "Salary Range" },
          { type: "boolean", name: "published", label: "Published" },
        ],
      },

      // ====================
      // BLOG POSTS (Optional)
      // ====================
      {
        name: "blog",
        label: "📝 Blog Posts",
        path: "content/blog",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", required: true, isTitle: true },
          { type: "string", name: "description", label: "Excerpt", ui: { component: "textarea" } },
          { type: "image", name: "coverImage", label: "Cover Image" },
          { type: "datetime", name: "date", label: "Publish Date" },
          { type: "string", name: "author", label: "Author" },
          { type: "string", name: "tags", label: "Tags", list: true },
          { type: "boolean", name: "published", label: "Published" },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
        ],
      },
    ],
  },
});
