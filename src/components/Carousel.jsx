import React, { useState, useEffect, useRef } from 'react'
import { imgBg, mrVsMs, battlePass } from '../assets'

const carouselData = [
    { id: 1, image: mrVsMs },
    { id: 2, image: battlePass },
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselData.length)
        }, 3000)
        return () => clearInterval(timerRef.current)
    }, [])

    const slidesCount = carouselData.length
    const offsetPercent = (currentIndex * 100) / slidesCount

    return (
        <div
        className="relative w-[240px] h-[104px] md:w-[389px] md:h-[204px] overflow-hidden z-[-1]"
        style={{
            backgroundImage: `url(${imgBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>

            <div
            className="transition-transform duration-500 ease-in-out will-change-transform"
            style={{
            display: 'flex',
            flexDirection: 'column',
            transform: `translateY(-${offsetPercent}%)`}}>
                {carouselData.map((item) => (
                    // bg
                    <div
                    key={item.id}
                    className="w-[240px] h-[110px] md:w-[380px] md:h-[204px] flex items-end justify-start">
                        {/* image */}
                        <img
                        src={item.image}
                        alt={`Slide ${item.id}`}
                        className="w-[235px] h-[106px] md:w-[385px] md:h-[196px] object-cover border border-border"/>
                    </div> ))}
            </div>

            <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                {carouselData.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="p-1">
                        <div
                        className={`w-[3px] h-3 transition-colors duration-300 ${
                            currentIndex === index ? 'bg-yellow' : 'bg-nav'}`}/>
                    </button>))}
            </div>
        </div>
    )
}

export default Carousel