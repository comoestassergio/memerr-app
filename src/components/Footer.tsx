import Link from "next/link";


export default function Footer () {
    return (
        <footer className="flex flex-col gap-3 h-[20vh]">
            <div>
                <p>Created by <Link href={'https://github.com/comoestassergio'} target='_blank'>comoestassergio</Link></p>
                <p><Link href={'https://github.com/D3vd/Meme_Api'} target='_blank'>API</Link> by <Link href={'https://github.com/D3vd'} target='_blank'>D3vd</Link></p>
            </div>
        </footer>
    )
}