import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import heroImages from './heroImages'
import logoImage from './logos'
import mainLogo from './mainLogo'
import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,heroImages,logoImage,mainLogo,category],
}
