
import Bg from './components/Bg'
import Carousel from './components/Carousel'
import Event from './components/Event'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <div className='!m-4 flex flex-col gap-1'>
    <Carousel />
    <Event />
    </div>
    
    <Bg />
    </>
  )
}

export default App
