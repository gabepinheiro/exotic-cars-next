import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Exotic Cars</title>
      </Head>

      <main>
        <h1>Exotic Cars</h1>
        <Button />
      </main>
    </div>
  )
}

export default Home
