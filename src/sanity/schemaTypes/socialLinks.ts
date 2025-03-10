import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for this set of social links (e.g., "Main Social Links")',
    }),
    defineField({
      name: 'discord',
      title: 'Discord Link',
      type: 'url',
      description: 'URL to your Discord server',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Link',
      type: 'url',
      description: 'URL to your Facebook page',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Link',
      type: 'url',
      description: 'URL to your Instagram profile',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X Link',
      type: 'url',
      description: 'URL to your Twitter/X profile',
    }),
  ],
}) 