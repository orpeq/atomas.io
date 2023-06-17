import { Button } from "../Button/Button"
import { useState } from "react"
import {
  Sidebar,
  SidebarHeader,
  Designation,
  Text,
  Address,
  Copyright,
  SocialProfile,
  SocialLink,
  Heading,
} from "./personCard.styled"
import { MailOutline, GitHub, LinkedIn, Facebook } from "@mui/icons-material"
import Tooltip from "@mui/material/Tooltip"
import Image from "next/image"

const PersonCard = () => {
  const [isCopied, setIsCopied] = useState(false)
  const copyToClipboard = () => {
    const email = "hi@atomas.io"
    navigator.clipboard.writeText(email)
    setIsCopied(true)
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Heading>Tomas</Heading>
        <Designation>Front End Developer</Designation>
      </SidebarHeader>
      <Image
        className="me"
        src="/images/tomas-antanaitis.jpeg"
        width={250}
        height={250}
        alt={"Tomas"}
      />
      <Tooltip
        open={isCopied}
        onClose={() => setIsCopied(false)}
        title="Copied to clipboard"
        placement="bottom"
      >
        <Text onClick={copyToClipboard}>hi@atomas.io</Text>
      </Tooltip>
      <Address>Based in Vilnius, Lithuania</Address>
      <Copyright>&copy; 2023 Atomas. All Rights Reserved</Copyright>
      <SocialProfile>
        <SocialLink
          href="https://www.linkedin.com/in/tomas-antanaitis-2b2785171/"
          target="_blank"
        >
          <LinkedIn />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/tomas.antanaitis.10"
          target="_blank"
        >
          <Facebook />
        </SocialLink>
        <SocialLink href="https://github.com/orpeq" target="_blank">
          <GitHub />
        </SocialLink>
      </SocialProfile>
      <Button variant={"primary"}>
        <MailOutline />
        Contact Me
      </Button>
    </Sidebar>
  )
}

export default PersonCard
