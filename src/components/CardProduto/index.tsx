import { ItemProduto } from '../../dtos/produtoDTO'
import { Button } from '../Button';
import './styles.css'
import React from 'react'

type Props = {
    nome: string;
    descricao: string;
    data?: ItemProduto[];
    onClick?: () => void;
    onClickDelete?: () => void;
}

export function CardProduto({ data, onClick, nome, descricao, onClickDelete }: Props) {

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
                />
                <button onClick={onClickDelete}>Deletar</button>
            </div>
        </div>
    </div>
        

    )
}