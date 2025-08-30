import Bg from './components/Bg'
import Challenges from './components/Challenges'
import Chat from './components/Chat'
import Carousel from './components/Carousel'
import Event from './components/Event'
import NavBar from './components/NavBar'
import Uid from './components/Uid'
import { leftBtn, mrLogo } from './assets'

function App() {
  return (
    <div className='custom-cursor'>
      <Bg />
      <NavBar />
      <div className='!m-4 flex flex-col gap-1'>
        {/* events */}
        <div className='flex flex-row justify-between'>

          <div className='flex flex-row items-start gap-1'>
            <Carousel />
            <img src={leftBtn} alt='Left chevron button' />
          </div>
          <img src={mrLogo} alt='Marvel Rivals Logo' className='w-[200px] h-[90px] lg:w-[255px] lg:h-[108px] !mr-10' />
        </div>
        
        <Event />
        <Challenges />
      </div>

      <Chat />
      <Uid />
    </div>
  )
}

export default App
