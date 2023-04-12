import { Fornecedor } from '../../dtos/fornecedorDTO'
import { Button } from '../Button'
import './styles.css'

type Props = {
    nome_fantasia: string;
    cnpj: string;
    data?: Fornecedor[];
    onClick?: () => void;
}

export function CardFornecedor({ data, onClick, nome_fantasia, cnpj }: Props) {
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
                    />
                </div>
            </div>
        </div>

        // data?.map((item) => (
        //     <div className="card-fornecedor">
        //         <div className='card-content'>
        //             <div className='content-info'>
        //                 <h3>{nome_fantasia}</h3>
        //                 <p>{cnpj}</p>

        //             </div>
        //             <div className='icon'>
        //                 <Button 
        //                     onClick={onClick}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // ))

    )
}