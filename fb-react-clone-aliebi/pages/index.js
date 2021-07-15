import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      {/* <h1>We want to make FB clone With Next.js</h1> */}
    </div>
  )
}
