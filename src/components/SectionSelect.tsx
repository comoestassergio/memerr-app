import uniqid from 'uniqid'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
        <Swiper
            className='w-[90%] mx-auto md:w-[75%]'
            spaceBetween={12}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {SUBREDDITS.map(el => (
                <SwiperSlide className={`px-3 py-1 border-2 max-w-fit border-fuchsia-500 rounded-md text-gray-700 ${currentSubreddit === el.name && 'bg-fuchsia-400 text-purple-900 border-fuchsia-400'}`}>
                    <button onClick={handleClick} type="button" name={el.name}>{el.name}</button>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}