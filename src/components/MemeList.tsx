import MemeCard from "./MemeCard"

import { CgSpinner } from 'react-icons/cg'
import { Meme } from "@/pages"

type MemesListProps = {
    data: Meme [] | null
    loadingScreen: boolean
}

export default function MemeList ({data, loadingScreen}: MemesListProps) {


    if (loadingScreen) {
        return (
            <LoadingScreen />
        )
    }
    
    return (
        <ul className="flex flex-col items-center gap-5 w-full pt-5 pb-10 md:flex-row md:flex-wrap md:justify-center">
            {data?.map((meme, index) => (
                <MemeCard 
                    key={index}
                    title={meme.title} 
                    url={meme.url} 
                    author={meme.author} 
                    nsfw={meme.nsfw} 
                    postLink={meme.postLink} 
                    spoiler={meme.spoiler} 
                    subreddit={meme.subreddit} 
                    ups={meme.ups} 
                    preview={meme.preview}
                />
            ))}
        </ul>
    )
}

function LoadingScreen () {
    return (
        <div className="h-screen max-h-[70vh] flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <CgSpinner className='mx-auto text-2xl animate-spin' />
                <p className="text-sm uppercase">Choosing best memes...</p>
            </div>
        </div>
    )
}

