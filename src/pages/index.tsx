import MemeList from '@/components/MemeList'
import Head from 'next/head'
import axios from "axios"
import { useEffect, useState } from 'react'

import { CgSpinner } from 'react-icons/cg'

export type Meme = {
  postLink: string
  url: string
  subreddit: string
  nsfw: boolean
  spoiler: boolean
  author: string
  ups: number
  title: string
  preview: string []
}

type HomeProps = {
  data: Meme []
}

export default function Home({data}: HomeProps) {

  const [error, setError] = useState<unknown>()
  const [memes, setMemes] = useState(data)
  const [loadingMemes, setLoadingMemes] = useState<boolean>(false)

  useEffect(() => {
    setMemes(data)
  }, [])


  const handleLoadMore = async () => {

    setLoadingMemes(true)

    try {
        const res = await axios.get('https://meme-api.com/gimme/18')
        const data = res.data.memes

        setMemes(prevMemes => {
          return [...prevMemes, ...data]
        })
        setLoadingMemes(false)

      } catch (error) {
        setError(error)
        setLoadingMemes(false)
      } 
   
  }

  return (
    <>
      <Head>
        <title>Memerr</title>
        <meta name="description" content="Meme viewing app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' bg-gradient-to-b from-gray-100 to-gray-900'>
        <MemeList data={memes} />
        <div className='flex items-center justify-center w-full py-5'>
          <button onClick={handleLoadMore} type='button' className='px-5 py-2 w-[60%] max-w-[250px] bg-fuchsia-400 rounded-md text-lg text-purple-900 font-medium flex items-center h-12 shadow-[0px_0px_14px_2px] shadow-fuchsia-300/50 hover:shadow-[0px_0px_14px_4px] hover:shadow-fuchsia-300/50 hover:text-fuchsia-800 transition-shadow'>
            <>
              {loadingMemes && !error &&
                <CgSpinner className='mx-auto text-2xl animate-spin' />
              }
              {!loadingMemes && !error &&
                <p className='mx-auto  text-sm uppercase transition-colors'>Load more</p>
              }
              {error &&
                <p className='mx-aut text-sm uppercase transition-colors '>Error</p>
              }
            </>
          </button>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {

  const res = await axios.get('https://meme-api.com/gimme/18')
  const data = res.data.memes

  return {
      props: {
          data
      }
  }
}
