import uniqid from 'uniqid'


type SectionSelectProps = {
    setCurrentsubreddit: (value: string | null) => void
    currentSubreddit: string | null
}

const SUBREDDITS = [

    {
        id: uniqid(),
        name: 'all',
    },

    {
        id: uniqid(),
        name: 'memes',
    },

    {
        id: uniqid(),
        name: 'dankmemes',
    },

    {
        id: uniqid(),
        name: 'me_irl',
    },

    {
        id: uniqid(),
        name: 'wholesomememes',
    },

]

export default function SectionSelect({ setCurrentsubreddit, currentSubreddit }: SectionSelectProps) {

    const handleClick = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const {target} = e
        setCurrentsubreddit((target as HTMLButtonElement).name)
    }

    return (
        <ul className="flex items-center gap-3 pt-3 w-[90%] mx-auto overflow-x-auto md:w-[75%]">
            {SUBREDDITS.map(el => (
                <li key={el.id} className={`px-3 py-1 border-2 border-fuchsia-500 rounded-md text-gray-700 ${currentSubreddit === el.name && 'bg-fuchsia-400 text-purple-900 border-fuchsia-400'}`}>
                    <button onClick={handleClick} type="button" name={el.name}>{el.name}</button>
                </li>
            ))}
        </ul>
    )
}