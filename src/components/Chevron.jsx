import { leftBtn, rightBtn } from '../assets'

const Chevron = ({ isOpen, onClick }) => {
    return (
        <button onClick={onClick} className='focus:outline-none'>
            <img
                src={isOpen ? leftBtn : rightBtn}
                alt='Chevron toggle'
                className='h-4 md:h-fit' />
        </button>
    )
}

export default Chevron
