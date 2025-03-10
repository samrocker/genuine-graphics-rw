import { client } from './client'
import { faqsQuery, beautifulWorksQuery, socialLinksQuery } from './queries'

// Type definitions
export interface FAQ {
  _id: string
  question: string
  answer: string
  order: number
}

export interface BeautifulWork {
  _id: string
  title: string
  imageUrl: string
}

export interface SocialLink {
  _id: string
  platform: string
  url: string
}

// Function to fetch FAQs
export async function getFaqs(): Promise<FAQ[]> {
  return await client.fetch(faqsQuery)
}

// Function to fetch beautiful works
export async function getBeautifulWorks(): Promise<BeautifulWork[]> {
  return await client.fetch(beautifulWorksQuery)
}

// Function to fetch social links
export async function getSocialLinks(): Promise<SocialLink[]> {
  return await client.fetch(socialLinksQuery)
} 