import Content from "@components/core/Content/Content"
import { Main } from "./homePage.styled"
import PersonCard from "@components/core/PersonCard/PersonCard"

const HomePage = () => {
  return (
    <Main>
      <PersonCard />
      <Content />
    </Main>
  )
}

export default HomePage
