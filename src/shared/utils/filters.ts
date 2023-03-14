const defaultParams = {
  limit: 10,
  search: '',
  sort: 'id'
}

export const getLimitParam = () => {
  const limit: number = Number(localStorage.getItem('limit')) || defaultParams.limit
  return limit
}
export const setLimitParam = (limit: number) => {
  localStorage.setItem('limit', limit.toString())
}

export const getSearchParam = () => {
  const search: string = localStorage.getItem('search') ?? defaultParams.search
  return search
}
export const setSearchParam = (search: string) => {
  localStorage.setItem('search', search)
}




