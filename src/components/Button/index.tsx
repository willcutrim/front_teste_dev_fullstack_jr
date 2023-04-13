import './styles.css'
import next from '../../assets/next-icon.svg'
interface ButtonInterface {
    onClick?: () => void;
    btnIcon?: string
}

export function Button({ onClick, btnIcon}: ButtonInterface){
    return (
        <div className='button-container'>
            <button onClick={onClick}>
                    <img src={btnIcon} alt='next' />
            </button>
        </div>
    )
}