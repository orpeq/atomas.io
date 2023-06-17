import styled from "styled-components"

export const HeroSection = styled.section`
  padding: 140px 0;
  position: relative;
`

export const MainContainer = styled.main`
  max-width: 1130px;
  padding: 0 15px;
  margin: auto;
`

export const MainContent = styled.div`
  max-width: 770px;
  width: 100%;
  margin-left: auto;
`

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primary.text};
  font-size: 78px;
  letter-spacing: -0.2px;
  line-height: 90px;
  margin-bottom: 43px;
  font-weight: 400;
`

export const Subtitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  max-width: 500px;
  margin: 0 0 16px;
`

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.primary.accentColor};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 78px;
  line-height: 90px;
`

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: #999;
  max-width: 520px;
  width: 100%;
  font-weight: 500;
`
export const Label = styled.div`
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0;
  border: 1px solid #565656;
  padding: 9px 20px;
  border-radius: 30px;
  margin-bottom: 53px;
  display: inline-flex;
  align-items: center;
  margin-top: 24px;
`
