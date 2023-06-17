import {
  Heading,
  MainContent,
  HeroSection,
  MainContainer,
  Span,
  Subtitle,
} from "./content.styled"

const Content = () => {
  return (
    <HeroSection>
      <MainContainer>
        <MainContent>
          <Heading>
            Junior <Span>Front-End Developer</Span>
          </Heading>
          <Subtitle>
            Currently looking for Junior/Mid JavaScript roles with focus on
            <strong> ReactJS</strong>.
          </Subtitle>
        </MainContent>
      </MainContainer>
    </HeroSection>
  )
}

export default Content
