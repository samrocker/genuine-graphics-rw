import { groq } from 'next-sanity'

export const beautifulWorksQuery = groq`
  *[_type == "beautifulWorks"] | order(order asc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
`

export interface BeautifulWork {
  _id: string
  title: string
  imageUrl: string
}

export const socialLinksQuery = groq`
  *[_type == "socialLinks"][0] {
    _id,
    title,
    discord,
    facebook,
    instagram,
    twitter
  }
`

export interface SocialLinks {
  _id: string
  title: string
  discord?: string
  facebook?: string
  instagram?: string
  twitter?: string
} 