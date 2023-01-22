import MemeList from '@/components/MemeList'
import SectionSelect from '@/components/SectionSelect'

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

type MemesArr = {
  data: Meme [] | null
}

export default function Home() {

  const [error, setError] = useState<unknown>()
  const [memes, setMemes] = useState<Meme [] | []>([])
  const [loadingScreen, setLoadingScreen] = useState<boolean>(false)
  const [loadingMoreMemes, setLoadingMoreMemes] = useState<boolean>(false)
  const [currentSubreddit, setCurrentSubreddit] = useState<string | null>('all')

  useEffect(() => {
    fetchMemes()
    
  }, [currentSubreddit])


  const handleLoadMore = async () => {

    setLoadingMoreMemes(true)

    try {
      let apiEndPoint

      if (currentSubreddit === 'all') {
        apiEndPoint = 'https://meme-api.com/gimme/18'
      } else {
        apiEndPoint = `https://meme-api.com/gimme/${currentSubreddit}/18`
      }

      const res = await axios.get(apiEndPoint)
      const data = res.data.memes

      setMemes(prevMemes => {
        return [...prevMemes, ...data]
      })
      setLoadingMoreMemes(false)

    } catch (error) {
      setError(error)
      setLoadingMoreMemes(false)
    } 
   
  }

  const fetchMemes = async () => {

    setLoadingScreen(true)

    let apiEndPoint

    if (currentSubreddit === 'all') {
      apiEndPoint = 'https://meme-api.com/gimme/18'
    } else {
      apiEndPoint = `https://meme-api.com/gimme/${currentSubreddit}/18`
    }

    const res = await axios.get(apiEndPoint)
    const data = res.data.memes

    setMemes(data)
    setLoadingScreen(false)
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
        <SectionSelect setCurrentsubreddit={setCurrentSubreddit} currentSubreddit={currentSubreddit} />
        <MemeList data={memes} loadingScreen={loadingScreen}/>
        {!loadingScreen &&
          <div className='flex items-center justify-center w-full py-5'>
            <button onClick={handleLoadMore} type='button' className='px-5 py-2 w-[60%] max-w-[250px] bg-fuchsia-400 rounded-md text-lg text-purple-900 font-medium flex items-center h-12 shadow-[0px_0px_14px_2px] shadow-fuchsia-300/50 hover:shadow-[0px_0px_14px_4px] hover:shadow-fuchsia-300/50 hover:text-fuchsia-800 transition-shadow'>
              <>
                {loadingMoreMemes && !error &&
                  <CgSpinner className='mx-auto text-2xl animate-spin' />
                }
                {!loadingMoreMemes && !error &&
                  <p className='mx-auto  text-sm uppercase transition-colors'>Load more</p>
                }
                {error &&
                  <p className='mx-aut text-sm uppercase transition-colors '>Error</p>
                }
              </>
            </button>
          </div>
        }
        
      </div>
    </>
  )
}
