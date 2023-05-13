import HomePage from "@components/layout/HomePage/HomePage"
import { Page } from "@components/layout/Page"
import type { NextPage } from "next"

import Head from "next/head"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Atomas.io</title>
      <meta name="description" content="Atomas.io" />
    </Head>
    <Page>
      <HomePage />
    </Page>
  </>
)

export default Home
