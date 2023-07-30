import { z, defineCollection } from 'astro:content'

const jobs = defineCollection({
  schema: ({ image }) =>
    z.object({
      building: z.string(),
      location: z.string().optional().nullable(),
      country: z.string().optional().nullable(),
      cover: image(),
      architect: z.string().optional().nullable(),
      year: z.number(),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  residential: jobs,
  landmarks: jobs,
  commercial: jobs
}
