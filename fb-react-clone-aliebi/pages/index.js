import Head from 'next/head'
import Header from '../components/Header';
import Login from '../components/Login';


export default function Home( session ) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main>

      </main>
      {/* <h1>We want to make FB clone With Next.js</h1> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}