export type HeaderMenuItem = {
  id: number
  link: string
  name: string
}

export type ActiveMenuItemElement = HeaderMenuItem & {
  status: boolean
}

