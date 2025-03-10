import { NextResponse } from 'next/server'
import { getFaqs } from '@/sanity/lib/api'

export async function GET() {
  try {
    const faqs = await getFaqs()
    return NextResponse.json(faqs)
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    )
  }
} 