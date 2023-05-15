import { Tooltip } from "@mui/material"
import { Main } from "./navigation.styled"
import {
  HomeOutlined,
  Person2Outlined,
  CasesOutlined,
  MiscellaneousServicesOutlined,
  LeaderboardOutlined,
  ChatOutlined,
  EmailOutlined,
} from "@mui/icons-material/"

const Navigation = () => {
  return (
    <Main>
      <Tooltip title="Home" arrow placement="left">
        <HomeOutlined />
      </Tooltip>
      <Tooltip title="About" arrow placement="left">
        <Person2Outlined />
      </Tooltip>
      <Tooltip title="Resume" arrow placement="left">
        <CasesOutlined />
      </Tooltip>
      <Tooltip title="Services" arrow placement="left">
        <MiscellaneousServicesOutlined />
      </Tooltip>
      <Tooltip title="Skills" arrow placement="left">
        <LeaderboardOutlined />
      </Tooltip>
      <Tooltip title="Testimonials" arrow placement="left">
        <ChatOutlined />
      </Tooltip>
      <Tooltip title="Contact" arrow placement="left">
        <EmailOutlined />
      </Tooltip>
    </Main>
  )
}

export default Navigation
