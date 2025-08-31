import Bg from './components/Bg'
import Challenges from './components/Challenges'
import Chat from './components/Chat'
import Chevron from './components/Chevron'
import Carousel from './components/Carousel'
import Event from './components/Event'
import NavBar from './components/NavBar'
import Uid from './components/Uid'
import { leftBtn, mrLogo } from './assets'
import { useState } from 'react'

function App() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='custom-cursor'>
            <Bg />
            <NavBar />
            <div className='!m-4 flex flex-col'>
                {/* events */}
                <div className='flex flex-row justify-between'>
                    <div className={`flex flex-row items-start gap-1 transition-transform duration-500 ease-in-out ${
                    isOpen ? "translate-x-0" : " -translate-x-102"}`}>
                        <div className='flex flex-col gap-1'>
                            <Carousel />
                            <Event />
                            <Challenges />
                        </div>
                        <Chevron isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                    </div>
                    <img src={mrLogo} alt='Marvel Rivals Logo' className='w-[60px] h-[70px] md:w-[200px] md:h-[90px] lg:w-[255px] lg:h-[108px] !mr-10' />                </div>
            </div>
            <Chat />
            <Uid />
        </div>
    )
}

export default App