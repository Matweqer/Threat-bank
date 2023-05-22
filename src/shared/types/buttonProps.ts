export type buttonTypes = 'button' | 'submit' | 'reset' | undefined

export interface ButtonProps {
  buttonTitle?: string
  buttonOnClick?: () => void
  type?: buttonTypes
  className?: string
}
