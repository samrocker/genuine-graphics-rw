import { groq } from 'next-sanity'

// Query to fetch all FAQs ordered by the 'order' field
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`

// Query to fetch beautiful works
export const beautifulWorksQuery = groq`
  *[_type == "beautifulWorks"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
`

// Query to fetch social links
export const socialLinksQuery = groq`
  *[_type == "socialLinks"] {
    _id,
    platform,
    url
  }
` 