import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:'skpfZ0hQuibmtdrn49nbluTMgQY4tFT1yIa9hpgiqAL1xe9PdnL0PRtG9TskecBQJwO9dz7LzVkbNcXZwE5PL0XBOImZ5ERWB5JJq82CRhOcGw84NzaCKlgk3IdArUOEL0eKoZU7mRSLohhwyabcl45LR2lL4bNRK64iX2xgU7SORMT3TKiE', // Replace with your Sanity API token
})
