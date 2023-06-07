export type buttonTypes = 'button' | 'submit' | 'reset' | undefined

export interface ButtonProps {
  buttonTitle?: string
  buttonOnClick?: (event: any) => void
  type?: buttonTypes
  className?: string
  isDisabled?: boolean
}
