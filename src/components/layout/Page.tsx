import { useRouter } from "next/router"
import { ReactNode } from "react"
import { PageContainer } from "./page.styled"
import Navigation from "./Navigation/Navigation"

// This component represents general page layout, that is valid for all website pages
export const Page = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <>
      <PageContainer>
        <Navigation />
        {children}
      </PageContainer>
    </>
  )
}
