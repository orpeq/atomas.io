import {
  Heading,
  MainContent,
  HeroSection,
  MainContainer,
  Span,
  Paragraph,
} from "./content.styled"

const Content = () => {
  return (
    <HeroSection>
      <MainContainer>
        <MainContent>
          <Heading>
            Hi! My name is <Span>Tomas</Span>, i am a Front End Developer!
          </Heading>
          <Paragraph>
            Passionate and motivated junior front-end developer with a strong
            eye for design. I specialize in crafting visually stunning and
            user-friendly web experiences.
          </Paragraph>
        </MainContent>
      </MainContainer>
    </HeroSection>
  )
}

export default Content
