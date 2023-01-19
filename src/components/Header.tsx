

export default function Header () {
    return (
        <header className="flex items-center justify-between p-5 bg-gray-100">
            <div className="w-[90%] mx-auto md:w-[75%] flex flex-col items-start gap-1">
                <h1 className='text-3xl font-medium text-gray-800'>Memerr.</h1>
                <span className="opacity-70 text-sm translate-y-1">That&apos;s where all the memes at</span>
            </div>
        </header>
    )
}