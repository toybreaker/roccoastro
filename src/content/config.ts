import { z, defineCollection } from 'astro:content'

const jobs = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      building: z.string(),
      location: z.string().optional().nullable(),
      photos: z.array(z.string()),
      architect: z.string().optional().nullable(),
      year: z.number().optional().nullable(),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  residential: jobs
}
