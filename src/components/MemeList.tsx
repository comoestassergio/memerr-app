import MemeCard from "./MemeCard"

import { useEffect } from "react"
import { Meme } from "@/pages"

type MemesListProps = {
    data: Meme []
}

export default function MemeList ({data}: MemesListProps) {

    console.log(data)

    return (
        <ul className="flex flex-col items-center gap-5 w-full pt-5 pb-10">
            {data.map((meme, index) => (
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
                />
            ))}
        </ul>
    )
}

