import { useEffect, useState } from "react";
import { CardProduto } from "../../components/CardProduto";
import { NavBar } from "../../components/NavBar";
import { api } from "../../services/api";
import './styles.css'
import { ItemProduto } from "../../dtos/produtoDTO";
import { ModalProduto } from "../../components/ModalProduto";

import React from 'react'

export function Produtos() {
    const [produto, setProduto] = useState<ItemProduto[]>([])
    const [produtoModal, setProdutoModal] = useState<ItemProduto[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false);

    async function deleteProduto(id: number){
        try {
            await api.delete(`produtos/${id}`)
            setProduto(produto.filter(produto => produto.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    async function openModal(id: number) {
        try {
            setIsOpenModal(true)
            const { data } = await api.get(`produtos/${id}`);
            
            setProdutoModal(data)
        } catch (error) {
            console.log(error)
        }

    }

    async function fetchProdutos() {
        try {
            const { data } = await api.get('produtos/')
            setProduto(data)
        } catch (error) {
            console.log(error)
        }
    }

    function closeModal() {
        setIsOpenModal(false)
    }

    useEffect(() => {
        fetchProdutos();
    }, [])

    return (
        <>
            <NavBar />
            <ModalProduto
                isOpen={isOpenModal}
                onClose={closeModal}
                title="Info. Produto"
                info={produtoModal}
            />
            <div className="parent">
                <div className="body-produtos">
                    {produto.map((item) => (
                        <CardProduto
                            nome={item.nome}
                            descricao={item.descricao}
                            data={produto}
                            onClick={() => openModal(item.id)}
                            onClickDelete={() => deleteProduto(item.id)}
                        />

                    ))}
                </div>
            </div>
        </>
    )
}