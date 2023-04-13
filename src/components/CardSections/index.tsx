import { Button } from '../Button'
import './styles.css'

import next from '../../assets/next-icon.svg'

type Props = {
    title: string;
}
export function CardSections({ title }: Props){
    return (
        <div className="container-card-section">
            <div className="container-body-section">
                    <h1>{title}</h1>
                    <Button
                        btnIcon={next}
                    />
            </div>
        </div>
    )
}