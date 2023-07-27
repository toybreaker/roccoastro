import { z, defineCollection } from 'astro:content'

const jobs = defineCollection({
  schema: ({ image }) =>
    z.object({
      building: z.string(),
      location: z.string().optional().nullable(),
      country: z.string().optional().nullable(),
      cover: z.string(image()),
      architect: z.string().optional().nullable(),
      year: z.number().optional().nullable(),
      draft: z.boolean().optional().nullable()
    })
})

export const collections = {
  residential: jobs
}
