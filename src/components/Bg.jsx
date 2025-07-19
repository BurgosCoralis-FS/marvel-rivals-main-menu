import { marvelRivalsBg } from "../assets"

const Bg = () => {
    return (
        <div
        className="fixed top-0 w-full h-full overflow-hidden z-[-1]">
            <video
                autoPlay
                loop
                playsInline
                muted 
                className="h-full w-full object-cover">
                <source src={marvelRivalsBg} type="video/mp4" />
            </video>
        </div>
    )
}

export default Bg
