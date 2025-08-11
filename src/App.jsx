
import Bg from './components/Bg'
import Carousel from './components/Carousel'
import Challenges from './components/Challenges'
import Event from './components/Event'
import NavBar from './components/NavBar'
import { leftBtn, mRLogo } from './assets'

function App() {
  return (
    <>
    <NavBar />
    <div className='!m-4 flex flex-col gap-1'>
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
    
    <Bg />
    </>
  )
}

export default App
