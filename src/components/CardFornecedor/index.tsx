import { Fornecedor } from '../../dtos/fornecedorDTO'
import { Button } from '../Button'
import './styles.css'

import info from '../../assets/information.svg'
import deleteIcon from '../../assets/delete.svg'



type Props = {
    nome_fantasia: string;
    cnpj: string;
    data?: Fornecedor[];
    onClick?: () => void;
    onClickDelete?: () => void;
}

export function CardFornecedor({ data, onClick, nome_fantasia, cnpj, onClickDelete }: Props) {
    return (

        <div className="card-fornecedor">
            <div className='card-content'>
                <div className='content-info'>
                    <h3>{nome_fantasia}</h3>
                    <p>{cnpj}</p>

                </div>
                <div className='icon'>
                    <Button
                        onClick={onClick}
                        btnIcon={info}
                    />
                    <Button
                        onClick={onClickDelete}
                        btnIcon={deleteIcon}
                    />
                    
                </div>
            </div>
        </div>

    )
}