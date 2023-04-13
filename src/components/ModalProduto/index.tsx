import { ItemProduto } from '../../dtos/produtoDTO';
import './styles.css'

type ModalProps = {
    info: ItemProduto[] | any;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}


export function ModalProduto({ isOpen, onClose, title, info }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }
    
    return (

        <div className="modal-container-produto">
            <h3>{title}</h3>
            <div className="modal-content-produto">
                <div className="content-produto">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="body-content">
                    <div className="content-info">
                        <h3>Informações da produto</h3>
                        
                        <p><strong>Nome:</strong> {info['nome']}</p>
                        <p><strong>categoria:</strong> {info['categoria']}</p>
                        <p><strong>descrição:</strong> {info['descricao']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}