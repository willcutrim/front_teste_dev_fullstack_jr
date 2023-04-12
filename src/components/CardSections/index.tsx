import { Button } from '../Button'
import './styles.css'
type Props = {
    title: string;
}
export function CardSections({ title }: Props){
    return (
        <div className="container-card-section">
            <div className="container-body-section">
                    <h1>{title}</h1>
                    <Button/>
            </div>
        </div>
    )
}