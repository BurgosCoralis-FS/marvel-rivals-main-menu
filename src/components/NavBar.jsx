import { 
    marvelLogo,
    blueCurrency,
    goldCurrency,
    settings,
    messages,
    friends,
    notification,
    profile } from "../assets"

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
        !pl-10 
        !pr-7
        text-lg">
            <ul className="flex items-center list-none gap-10 text-nav">
                <li className="relative h-12">
                    <div className="
                    h-full 
                    skew-x-[-12deg] 
                    bg-primary-100 
                    !px-6
                    flex 
                    items-center 
                    border-b-4 
                    border-l-2 
                    border-r-2
                    border-yellow-400">
                        <div className="skew-x-[12deg] flex items-center text-yellow cursor-pointer ">
                            <img src={marvelLogo} alt="Marvel Rivals Logo" className="h-14 w-auto" />
                            <span>HOME</span>
                        </div>
                    </div>
                </li>

                <li className="relative h-12  bg-[#2e2e39] skew-x-[-12deg] !px-14 !ml-[-41px] cursor-pointer">
                    <div
                        className="absolute inset-0 bg-[#363543] clip-hourglass"
                    ></div>
                    <div className="relative z-10 h-full flex items-center justify-center text-white text-2xl" 
                    style={{ fontFamily: 'Refrigerator Deluxe Extra Bold'}}>
                        PLAY
                    </div>
                </li>

                <li className="flex items-center gap-1 relative">
                    SEASON
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li>
                    HEROES
                </li>

                <li className="flex items-center gap-1 relative">
                    STORE
                    <span className="relative top-[-6px]">
                        <img src={notification} alt="notification" className="h-5 w-4" />
                    </span>
                </li>

                <li>
                    TOURNAMENT
                </li>

                <li>
                    GALLERY
                </li>
            </ul>

            <ul className="flex items-center list-none gap-10 text-nav ">
                <li className="flex gap-5">
                    <img src={goldCurrency} alt='gold currency icon' /> 
                    <span> 0 </span>
                    <img src={blueCurrency} alt='blue currency icon' />
                    <span> 0 </span>
                </li>

                {/* divider */}
                <div className="w-px h-6 rotate-[20deg] bg-divider" />

                <li className="flex gap-9">
                    <img src={settings} alt='settings icon'  className="w-4.5"/>
                    <img src={messages} alt='messages icon' className="w-4.5"/>
                    <img src={friends} alt='friends icon' className="w-4.5"/>
                </li>

                <div className="w-px h-6 rotate-[20deg] bg-divider" />

                <li className="relative h-12">
                    <img src={profile} alt='player profile icon' className="h-14 w-11"/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar