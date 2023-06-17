import {
  Heading,
  MainContent,
  HeroSection,
  MainContainer,
  Span,
  Subtitle,
  Label,
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
          <Label>Languages and Frameworks</Label>
        </MainContent>
      </MainContainer>
    </HeroSection>
  )
}

export default Content
