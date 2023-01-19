import MemeList from '@/components/MemeList'
import Head from 'next/head'
import axios from "axios"

export type Meme = {
  postLink: string
  url: string
  subreddit: string
  nsfw: boolean
  spoiler: boolean
  author: string
  ups: number
  title: string
}

type HomeProps = {
  data: Meme []
}

export default function Home({data}: HomeProps) {
  return (
    <>
      <Head>
        <title>Memerr</title>
        <meta name="description" content="Meme viewing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-3xl font-medium'>Memerr</h1>
        <MemeList data={data} />
      </main>
    </>
  )
}

export async function getServerSideProps() {

  const res = await axios.get('https://meme-api.com/gimme/10')
  const data = res.data.memes

  return {
      props: {
          data
      }
  }
}
