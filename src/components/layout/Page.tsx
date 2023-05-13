import { useRouter } from "next/router"
import { ReactNode, createContext, useContext } from "react"
import { PageContainer } from "./page.styled"

const PageContext = createContext({
  pageUrl: "",
})

export const usePageContext = () => useContext(PageContext)

// This component represents general page layout, that is valid for all website pages
export const Page = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <>
      <PageContext.Provider value={{ pageUrl: router.pathname }}>
        <PageContainer>{children}</PageContainer>
      </PageContext.Provider>
    </>
  )
}
