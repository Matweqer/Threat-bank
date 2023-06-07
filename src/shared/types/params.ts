export type ItemParams = {
  id: string
}

export interface ICatalogParams {
  search?: string
  limit?: number
  offset?: number
  ordering?: string
  next?: string
  my?: boolean
}
