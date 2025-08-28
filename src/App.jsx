
import Bg from './components/Bg'
import Carousel from './components/Carousel'
import Challenges from './components/Challenges'
import Event from './components/Event'
import NavBar from './components/NavBar'
import { leftBtn, mRLogo, chat } from './assets'

function App() {
  return (
    <>
    <NavBar />
    <div className='!m-4 flex flex-col gap-1'>
      {/* events */}
      <div className='flex flex-row justify-between'>

        <div className='flex flex-row items-start gap-1'>
          <Carousel />
          <img src={leftBtn} alt='Left chevron button' />
        </div>
        <img src={mRLogo} alt='Marvel Rivals Logo' className='w-[255px] h-[108px] !mr-10' />
      </div>
      
      <Event />
      <Challenges />
    </div>

    <img 
      src={chat} 
      alt="chat" 
      className='fixed bottom-5'/>

    <p className='fixed 
    bottom-0 
    text-nav 
    drop-shadow-[2px_2px_0px_black]
    left-2
    text-sm
    opacity-75'> 
      UID: 1689655152 | 1400244 | 241206123 
    </p>
    
    <Bg />
    </>
  )
}

export default App
