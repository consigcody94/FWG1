import { client } from "./tina-client";

// GraphQL query for fetching a page with all blocks
export const pageQuery = `
  query PageQuery($relativePath: String!) {
    pages(relativePath: $relativePath) {
      title
      description
      blocks {
        __typename
        ... on PagesBlocksHero {
          title
          subtitle
          buttonText
          buttonLink
          backgroundImage
        }
        ... on PagesBlocksStats {
          items {
            value
            label
          }
        }
        ... on PagesBlocksServices {
          heading
          services {
            title
            description
            icon
          }
        }
        ... on PagesBlocksTestimonials {
          heading
          testimonials {
            quote
            author
            role
            avatar
          }
        }
        ... on PagesBlocksContent {
          body
        }
        ... on PagesBlocksTeam {
          heading
          members {
            name
            role
            bio
            photo
            email
          }
        }
        ... on PagesBlocksCta {
          heading
          text
          buttonText
          buttonLink
        }
      }
    }
  }
`;

// Fetch page data for a given filename
export async function fetchPageData(filename: string) {
  const relativePath = `${filename}.json`;

  try {
    const response = await client.queries.pages({ relativePath });
    return {
      data: response.data,
      query: response.query,
      variables: response.variables,
    };
  } catch (error) {
    console.error(`Error fetching page data for ${filename}:`, error);
    // Return fallback data if page doesn't exist yet
    return {
      data: {
        pages: {
          title: `${filename.charAt(0).toUpperCase() + filename.slice(1)}`,
          description: "",
          blocks: [],
        },
      },
      query: pageQuery,
      variables: { relativePath },
    };
  }
}
