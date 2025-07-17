import { marvelLogo } from "../assets"

const NavBar = () => {
    return (
        <nav className="w-full h-12 flex items-center justify-between z-20 bg-dark opacity-[.95] sticky !px-10">
            <ul className="flex items-center gap-6 list-none text-nav">
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
                        <div className="skew-x-[12deg] flex items-center gap-2 text-yellow ">
                            <img src={marvelLogo} alt="Marvel Logo" className="h-14 w-auto" />
                            <span>HOME</span>
                        </div>
                    </div>
                </li>
                <li className="!px-6"> PLAY </li>
                {['SEASON', 'HEROES', 'STORE', 'TOURNAMENT', 'GALLERY'].map(item => (
                    <li key={item} className="!px-1">
                        {item}
                    </li>
                ))}
            </ul>
            <ul className="list-none text-nav ">
                <li>test</li>
            </ul>
        </nav>
    )
}

export default NavBar