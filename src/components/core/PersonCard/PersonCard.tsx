import { Button } from "../Button/Button"
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
import { MailOutline, GitHub } from "@mui/icons-material"

import Image from "next/image"
const PersonCard = () => {
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
      <Text>hello@atomas.io</Text>
      <Address>Based in Vilnius, Lithuania</Address>
      <Copyright>&copy; 2023 Atomas. All Rights Reserved</Copyright>
      <SocialProfile>
        <SocialLink href="">
          <GitHub />
        </SocialLink>
        <SocialLink href=""></SocialLink>
        <SocialLink href=""></SocialLink>
        <SocialLink href=""></SocialLink>
      </SocialProfile>
      <Button variant={"primary"}>
        <MailOutline />
        Contact Me
      </Button>
    </Sidebar>
  )
}

export default PersonCard
