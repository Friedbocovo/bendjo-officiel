import { useT, TranslationKey } from '../data/translations'

export interface Product {
  id: string
  nameKey: TranslationKey
  descKey: TranslationKey
  benefits: string[]
  color: string
  accentColor: string
  price: number
  formatKey: TranslationKey
  image: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export const PRODUCTS: Product[] = [
  {
    id: 'hibiscus',
    nameKey: 'product_hibiscus_name',
    descKey: 'product_hibiscus_desc',
    benefits: ['Vitamine C', 'Calcium', 'Magnésium', 'Potassium'],
    color: '#FFF0F0',
    accentColor: '#D64545',
    price: 2500,
    formatKey: 'product_format',
    image: 'https://images.pexels.com/photos/3650229/pexels-photo-3650229.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'basilic',
    nameKey: 'product_basilic_name',
    descKey: 'product_basilic_desc',
    benefits: ['Vitamine A', 'Vitamine E', 'Vitamine C', 'Digestion facilitée'],
    color: '#F0F7F1',
    accentColor: '#4B7F52',
    price: 2500,
    formatKey: 'product_format',
    image: 'https://images.pexels.com/photos/4198932/pexels-photo-4198932.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'citronnelle',
    nameKey: 'product_citronnelle_name',
    descKey: 'product_citronnelle_desc',
    benefits: ['Vitamine E', 'Magnésium', 'Enzymes digestives', 'Antioxydants'],
    color: '#FFF8EC',
    accentColor: '#E08A2E',
    price: 2500,
    formatKey: 'product_format',
    image: 'https://images.pexels.com/photos/4820814/pexels-photo-4820814.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export function useProducts() {
  const t = useT()
  return PRODUCTS.map(p => ({
    ...p,
    name: t(p.nameKey),
    shortDesc: t(p.descKey),
    format: t(p.formatKey),
  }))
}
