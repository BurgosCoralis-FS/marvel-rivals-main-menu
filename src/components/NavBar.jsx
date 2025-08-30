import { useState } from "react"
import { 
    logo,
    blueCurrency,
    goldCurrency,
    settings,
    messages,
    friends,
    notification,
    profile,
    homeBg,
    playBg } from "../assets"

import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <nav className="
        w-full
        h-12 
        flex 
        items-center 
        justify-between 
        opacity-[.95] 
        static 
        text-base
        md:text-lg
        !px-[2%]">
            {/* hamburger menu */}
            <button 
            className="md:hidden absolute top-3 left-3 z-50" 
            onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu className="text-nav text-xl" />
            </button>

            {/* slide out menu */}
            <div className={`
            fixed top-0 left-0 h-full w-2/3 bg-dark
            transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out
            md:hidden`}>
                <ul className="flex flex-col p-6 !mt-12 items-center gap-6 text-nav">
                    <li>HOME</li>
                    <li>PLAY</li>
                    <li className="flex items-center gap-2">
                        SEASON <img src={notification} alt="notification" className="h-4" />
                    </li>
                    <li>HEROES</li>
                    <li className="flex items-center gap-2">
                        STORE <img src={notification} alt="notification" className="h-4" />
                    </li>
                    <li>TOURNAMENT</li>
                    <li>GALLERY</li>

                    <li className="flex gap-6 ">
                        <img src={goldCurrency} alt='Gold Currency icon' />
                        <p className="text-sm md:text-base"> 0 </p>
                        <img src={blueCurrency} alt='Blue Currency icon' />
                        <p className="text-sm md:text-base"> 0 </p>
                    </li>

                    <li className="flex gap-6">
                        <img src={settings} alt='settings icon' className="w-4.5" />
                        <img src={messages} alt='messages icon' className="w-4.5" />
                        <img src={friends} alt='friends icon' className="w-4.5" />
                    </li>

                    <li className="h-15">
                        <img src={profile} alt="player profile icon" className="h-10 md:h-12.5 w-auto object-cover" />
                    </li>
                </ul>
            </div>

            {/* Desktop View Left Side */}
            <ul className="flex items-center list-none gap-6 md:gap-12 text-nav">
                <li className=" w-fit h-fit hidden md:flex items-center justify-center ">
                    <img src={homeBg} alt="background" className="absolute h-12 z-0" />
                    <div className="relative z-10 flex items-center gap-1 !px-2 md:!px-4 ">
                        <img src={logo} alt="Marvel Rivals Logo" className="h-10 md:h-14 w-auto" />
                        <p className="hidden sm:block">HOME</p>
                    </div>
                </li>

                <li className=" w-fit h-fit hidden md:flex items-center justify-center">
                    <img src={playBg} alt="button background" className="absolute h-12 z-0 " />
                    <div className="relative z-10 !px-2 text-white">
                        <p style={{ fontFamily: 'Refrigerator Deluxe Extra Bold'}}>PLAY</p>
                    </div>
                </li>

                <li className="hidden md:flex items-center gap-1 !pl-4">
                    SEASON
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li className="hidden md:block">
                    HEROES
                </li>

                <li className="hidden md:flex items-center gap-1 relative ">
                    STORE
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li className="hidden md:block">
                    TOURNAMENT
                </li>

                <li className="hidden md:block">
                    GALLERY
                </li>
            </ul>

            {/* right side */}
            <ul className="flex items-center list-none text-nav">
                <li className="hidden md:flex gap-4 md:gap-9 ">
                    <img src={goldCurrency} alt='Gold Currency icon' />
                    <p className="text-sm md:text-base"> 0 </p>
                    <img src={blueCurrency} alt='Blue Currency icon' />
                    <p className="text-sm md:text-base"> 0 </p>
                </li>

                <div className="hidden md:block w-px h-6 !mx-3 md:!mx-6 rotate-[20deg] bg-divider" />

                <li className="hidden md:flex gap-6 md:gap-9">
                    <img src={settings} alt='settings icon' className="w-4.5" />
                    <img src={messages} alt='messages icon' className="w-4.5" />
                    <img src={friends} alt='friends icon' className="w-4.5" />
                </li>

                <div className="hidden md:block w-px h-6 !mx-3 md:!mx-6 rotate-[20deg] bg-divider" />

                <li className="h-15 hidden md:flex items-end">
                    <img src={profile} alt="player profile icon" className="h-10 md:h-12.5 w-auto object-cover" />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar