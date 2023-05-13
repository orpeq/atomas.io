import { forwardRef } from "react"

import { ButtonVariants, StyledButton } from "./button.styled"

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
  variant: ButtonVariants
  children: React.ReactNode
  className?: string
  iconName?: string
  onClick?: () => void
}

export const Button = forwardRef<any, ButtonProps>(
  ({ variant, children, className, onClick, ...props }, ref) => (
    <StyledButton
      ref={ref}
      {...props}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
)

Button.displayName = "Button"
