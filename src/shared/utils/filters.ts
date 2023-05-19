const defaultParams = {
  limit: 10,
  search: '',
  sort: 'id',
  offset: 0
}

export const getLimitParam = () => {
  const limit: number = Number(sessionStorage.getItem('limit')) || defaultParams.limit
  return limit
}
export const setLimitParam = (limit: number) => {
  sessionStorage.setItem('limit', limit.toString())
}

export const getSearchParam = () => {
  const search: string = sessionStorage.getItem('search') ?? defaultParams.search
  return search
}

export const setSearchParam = (search: string) => {
  sessionStorage.setItem('search', search)
}



