import { Meme } from "@/pages"
import Image from "next/image"
import Link from "next/link"

import {BsReddit} from 'react-icons/bs'
import {BiUpvote} from 'react-icons/bi'


type MemeCardProps = {
} & Meme


export default function MemeCard ({ title, author, url, nsfw, postLink, spoiler, subreddit, ups }: MemeCardProps) {

    return (
        <li className="w-[90%] flex flex-col items-center gap-5 p-5 bg-gray-900 rounded-md">
            <div className="relative w-96 h-96">
                <Link href={postLink} target='_blank'>
                    <Image className="rounded-lg object-contain w-full" src={url} alt={title} fill />
                </Link>
            </div>
            <div className="flex flex-col self-start gap-2 text-gray-400 w-full">
                {title &&
                    <div>
                        <p className="text-xl font-medium break-words">{title}</p>
                    </div>
                }
                <div className="text-sm">
                    <p>posted by <Link className="hover:underline" href={`https://www.reddit.com/user/${author}/`}>u/{author}</Link></p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <BsReddit className="text-xl" />
                        <Link href={`https://www.reddit.com/r/${subreddit}/`} target='_blank'>{subreddit}</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>{ups}</p>
                        <BiUpvote />
                    </div>
                </div>
            </div>
        </li>
    )
}