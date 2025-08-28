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

    return (
        <div
        className="relative w-[389px] h-[204px] overflow-hidden"
        style={{
            backgroundImage: `url(${imgBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
        <div
        className="transition-transform duration-500 ease-in-out"
        style={{
        display: 'flex',
        flexDirection: 'column',
        transform: `translateY(-${currentIndex * 204}px)` }}>

            {carouselData.map((item) => (
                <div
                key={item.id}
                className="w-[380px] h-[204px] flex items-end justify-center">
                    <img
                    src={item.image}
                    alt={`Slide ${item.id}`}
                    className="w-[385px] h-[196px] object-fit border-[1px] border-border" />
                </div>
            ))}
        </div>

        
        {carouselData.map((_, index) => (
        <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="absolute  right-2 z-10 p-1"
            style={{ top: `${88 + index * 15}px` }}>
            <div
            className={`w-[3px] h-3 transition-colors duration-300 ${
                currentIndex === index ? 'bg-yellow' : 'bg-nav'}` }/>
        </button>
        ))}
        </div>
    )
}

export default Carousel