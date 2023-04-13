import { ItemProduto } from '../../dtos/produtoDTO'
import { Button } from '../Button';
import './styles.css'

import info from '../../assets/information.svg'
import deleteIcon from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'

type Props = {
    nome: string;
    descricao: string;
    data?: ItemProduto[];
    onClick?: () => void;
    onClickDelete?: () => void;
    onClickEdit?: () => void;
}

export function CardProduto({ data, onClick, nome, descricao, onClickDelete, onClickEdit }: Props) {

    return (


        <div className="container-card">
            <div className="container-body">
                <div className='title-card'>
                    <h1>{nome}</h1>
                </div>
                <div className="content-card">
                    <p>{descricao}</p>
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