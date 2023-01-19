import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Memerr</title>
        <meta name="description" content="Meme viewing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-5xl text-red-600'>Hello Memerr</h1>
      </main>
    </>
  )
}
