import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'


export default function Footer () {
    return (
        <footer className="flex flex-col gap-3 h-[20vh] bg-gray-900 pt-10">
            <div className="w-[90%] h-px bg-gray-600 mx-auto md:w-[75%]"></div>
            <div className="text-gray-500 w-[90%] mx-auto md:w-[75%]">
                <p className="text-lg">Created by <AiFillGithub className=" inline-block text-2xl ml-1" /> <Link className="font-medium hover:underline" href={'https://github.com/comoestassergio'} target='_blank'>comoestassergio</Link></p>
                <p><Link className="font-medium hover:underline" href={'https://github.com/D3vd/Meme_Api'} target='_blank'>API</Link> by <Link className="font-medium hover:underline" href={'https://github.com/D3vd'} target='_blank'>D3vd</Link></p>
                <p><Link className="font-medium hover:underline" href={'https://en.wikipedia.org/wiki/Meme'} target='_blank'>Memes</Link> from <Link className="font-medium hover:underline" href={'https://www.reddit.com/'} target='_blank'>Reddit</Link></p>
            </div>
        </footer>
    )
}