import { marvelRivalsBg } from "../assets"

const Bg = () => {
    return (
        <div
        className="noselect w-fit h-fit absolute z-10">
            <div className="relative w-screen h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="absolute top-0 left-0 w-screen h-screen object-cover">
                    <source src={marvelRivalsBg} type="video/webm" />
                </video>
            </div>
        </div>
    )
}

export default Bg
