import { useEffect, useState } from 'react'
import { CardFornecedor } from '../../components/CardFornecedor'
import { NavBar } from '../../components/NavBar'
import './styles.css'
import { Fornecedor } from '../../dtos/fornecedorDTO'
import { api } from '../../services/api'
import { ModalFornecedor } from '../../components/ModalFornecedor'
import React from 'react'


export function Fornecedores() {

    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])
    const [fornecedoresModal, setFornecedoresModal] = useState<Fornecedor[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false);

    async function openModal(id: number) {
        try {
            setIsOpenModal(true)
            const { data } = await api.get(`fornecedores/${id}`);
            
            setFornecedoresModal(data)
        } catch (error) {
            console.log(error)
        }

    }

    async function deleteFornecedor(id: number){
        try {
            await api.delete(`fornecedores/${id}`)
            setFornecedores(fornecedores.filter(fornecedores => fornecedores.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchFornecedores() {
        try {
            const { data } = await api.get('fornecedores/')
            setFornecedores(data)
        } catch (error) {
            console.log(error)
        }
    }

    function closeModal() {
        setIsOpenModal(false)
    }


    useEffect(() => {
        fetchFornecedores();
    }, [])

    return (
        <>
            <NavBar />
            <ModalFornecedor
                isOpen={isOpenModal}
                onClose={closeModal}
                title="Info. do fornecedor"
                info={fornecedoresModal}

            />
            <div className='container-fornecedores'>
                {fornecedores.map((item) => (
                    <CardFornecedor
                        data={fornecedores}
                        nome_fantasia={item.nome_fantasia}
                        cnpj={item.cnpj}
                        onClick={() => openModal(item.id)}
                        onClickDelete={() => deleteFornecedor(Number(item.id))}
                    />

                ))}
            </div>
        </>
    )
}