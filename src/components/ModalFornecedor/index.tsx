import { Fornecedor } from "../../dtos/fornecedorDTO";
import './styles.css'
import React from 'react'

type ModalProps = {
    info: Fornecedor[] | any;
    title: string;
    isOpen: boolean;
    onClose: () => void;
}


export function ModalFornecedor({ isOpen, onClose, title, info }: ModalProps) {
    
    if (!isOpen) {
        return null;
    }    
    
    return (

        <div className="modal-container-fornecedor">
            <h3>{title}</h3>
            <div className="modal-content-user">
                <div className="comments-content-user">
                    <button onClick={onClose}>x</button>
                </div>
                <div className="body-content">
                    <div className="content-info">
                        <h3>Informações da empresa</h3>
                        
                        <p><strong>Nome:</strong> {info['razao_social']}</p>
                        <p><strong>telefone:</strong> {info['telefone']}</p>
                        <p><strong>nome fantasia:</strong> {info['nome_fantasia']}</p>
                        <p><strong>cnpj:</strong> {info['cnpj']}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}