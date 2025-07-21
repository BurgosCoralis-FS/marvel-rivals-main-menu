
import Bg from './components/Bg'
import Carousel from './components/Carousel'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar />
    <div className='!m-4 flex-col gap-4'>
    <Carousel />
    </div>
    
    <Bg />
    </>
  )
}

export default App
