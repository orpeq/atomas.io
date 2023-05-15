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

export const Numbers = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  gap: 70px;
`
export const Number = styled.div`
  display: flex;
  flex-direction: column;
`
export const NumberValue = styled.p`
  font-size: 72px;
  color: ${({ theme }) => theme.colors.primary.accentColor};
  line-height: 56px;
  margin-bottom: 38px;
`
export const NumberLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
  color: #999999;

  line-height: 1.7;
  overflow-x: hidden;
  height: 100vh;
`
