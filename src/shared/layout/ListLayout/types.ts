import { IBreadcrumb, ListFiltersBlockProps } from 'shared/components'
import { ReactNode } from 'react'

export interface ListLayoutProps extends ListFiltersBlockProps {
  breadcrumbs: IBreadcrumb[]
  children: ReactNode
}
