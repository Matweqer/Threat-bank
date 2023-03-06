const defaultParams = {
  limit: 10
  // search: '',
  // sort: 'id'
}

export const getLimitParam = () => {
  const limit: number = Number(localStorage.getItem('limit')) || defaultParams.limit

  return limit
}
export const setLimitParam = (limit: number) => {
  localStorage.setItem('limit', limit.toString())
}




