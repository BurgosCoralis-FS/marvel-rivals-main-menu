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

const NavBar = () => {
    return (
        <nav className="
        w-full
        h-12 
        flex 
        items-center 
        justify-between 
        opacity-[.95] 
        static 
        text-lg
        !px-[2%]">
            <ul className="flex items-center list-none gap-12 text-nav ">
                <li className=" w-fit h-fit flex items-center justify-center cursor-pointer">
                    <img src={homeBg} alt="background" className="absolute h-12 z-0" />
                    <div className="relative z-10 flex items-center gap-1 !px-4 ">
                        <img src={logo} alt="Marvel Rivals Logo" className="h-14 w-auto" />
                        <p>HOME</p>
                    </div>
                </li>

                <li className=" w-fit h-fit flex items-center justify-center cursor-pointer">
                    <img src={playBg} alt="button background" className="absolute h-12 z-0" />
                    <div className="relative z-10 !px-3 text-white">
                        <p style={{ fontFamily: 'Refrigerator Deluxe Extra Bold'}}>PLAY</p>
                    </div>
                </li>

                <li className="flex items-center gap-1 !pl-4 cursor-pointer">
                    SEASON
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li className="cursor-pointer">
                    HEROES
                </li>

                <li className="flex items-center gap-1 relative cursor-pointer">
                    STORE
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li className="cursor-pointer">
                    TOURNAMENT
                </li>

                <li className="cursor-pointer">
                    GALLERY
                </li>
            </ul>

            <ul className="flex items-center list-none text-nav">
                <li className="flex gap-9 ">
                    <img src={goldCurrency} alt='Gold Currency icon' />
                    <p> 0 </p>
                    <img src={blueCurrency} alt='Blue Currency icon' />
                    <p> 0 </p>
                </li>

                <div className="w-px h-6 !mx-6 rotate-[20deg] bg-divider" />

                <li className="flex gap-9">
                    <img src={settings} alt='settings icon' className="w-4.5" />
                    <img src={messages} alt='messages icon' className="w-4.5" />
                    <img src={friends} alt='friends icon' className="w-4.5" />
                </li>

                <div className="w-px h-6 !mx-6 rotate-[20deg] bg-divider" />

                <li className="h-15 flex items-end">
                    <img src={profile} alt="player profile icon" className="h-12.5 w-auto object-cover" />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar