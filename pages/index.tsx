import type { NextPage } from 'next'
import Head from 'next/head'
import Link from '../src/components/Link'

function Title({children, as}: {children: string, as: any}) {
  const Tag = as;
  return ( 
    <>
      <Tag>{children}</Tag>
      <style>{`
        ${Tag} {
          color: #214477;
        }
      `}</style>
    </>
   );
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alura Cases</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title as='h1'>Alura Cases - Home</Title>
        <Link href="/faq">Ir para o FAQ</Link>
      </main>

    </div>
  )
}

export default Home
