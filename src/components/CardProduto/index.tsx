import { ItemProduto } from '../../dtos/produtoDTO'
import './styles.css'

type Props = {
    data?: ItemProduto[];
}

export function CardProduto({ data }: Props) {

    return (

        data?.map((item) => (
            <div className="container-card">
            <div className="container-body">
                <div className='title-card'>
                    <h1>{item.nome}</h1>
                </div>
                <div className="content-card">
                    <p>{item.descricao}</p>
                </div>

            </div>
        </div>
        ))

    )
}