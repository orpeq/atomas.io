import HomePage from "@components/layout/HomePage/HomePage"
import type { NextPage } from "next"

import Head from "next/head"

const Home: NextPage = () => (
  <>
    <Head>
      <title>Atomas.io</title>
      <meta name="description" content="Atomas.io" />
    </Head>
    <HomePage />
  </>
)

export default Home
