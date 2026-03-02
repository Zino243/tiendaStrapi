export interface StrapiImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}
export interface StrapiImage {
  id: number
  documentId: string
  name: string
  alternativeText: null
  caption: null
  focalPoint: null
  width: number
  height: number
  formats: {
    thumbnail: StrapiImageFormat
    small?: StrapiImageFormat
    medium?: StrapiImageFormat
    large?: StrapiImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
  publishedAt: string
}
export interface Product {
  id: number
  documentId: string
  name: string
  description: string
  price: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: StrapiImage
}
export interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}