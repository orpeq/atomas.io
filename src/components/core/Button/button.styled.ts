import styled, { css } from "styled-components"

export type ButtonVariants = "primary"

interface StyledButton {
  variant: ButtonVariants
}

export const defaultButton = css<StyledButton>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.accentColor};
  font-family: inherit;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.big};
  padding: 10px 58px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.accentColor};
  border-radius: 30px;
  gap: 10px;
  margin: 10px 0 0 0;
  box-sizing: border-box;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:disabled {
    cursor: not-allowed;
  }
`

export const primaryButton = css<StyledButton>`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.background};
    color: ${({ theme }) => theme.colors.primary.accentColor};
  }
`

export const StyledButton = styled.button<StyledButton>`
  ${defaultButton};
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return primaryButton
      default:
        return defaultButton
    }
  }};
`
