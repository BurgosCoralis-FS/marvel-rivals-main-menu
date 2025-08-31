import { calendar, challengesBg, clock } from "../assets"

const Challenges = () => {
    return (
        <div className="relative w-[288px] h-[110px] md:w-[396px] md:h-[121px] md:!ml-[-7px] z-[-1]">
            <img src={challengesBg} alt="Challenges background" className="absolute inset-0 w-full h-full"/>

            <div className="absolute inset-0 flex items-center justify-around !px-6">
                <div className="flex items-center gap-2">
                    <img src={clock} alt="dailies icon" className="w-7 md:w-fit" />

                    <div className="flex flex-col">
                        <p className="text-white text-2xl md:text-3xl font-semibold">0/7</p>
                        <div className="flex gap-[2px] !mt-1">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="w-[7px] md:w-[10px] h-[6px] bg-box " />
                            ))}
                        </div>
                    </div>
                </div>

            <div className="w-px h-12 !mx-6 rotate-[20deg] bg-dash " />

            <div className="flex items-center gap-2">
                <img src={calendar} alt="weekly icon" className="w-7 md:w-fit" />

                <div className="flex flex-col">
                    <p className="text-white text-2xl md:text-3xl font-semibold">0/3</p>
                    <div className="flex gap-[2px] !mt-1">
                        {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-[15px] md:w-[24px] h-[5px] bg-box " />
                        ))}
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Challenges
