import './styles.css'
import next from '../../assets/next-icon.svg'
interface ButtonInterface {
    onClick?: () => void;
}

export function Button({ onClick}: ButtonInterface){
    return (
        <div className='button-container'>
            <button onClick={onClick}>
                    <img src={next} alt='next' />
            </button>
        </div>
    )
}