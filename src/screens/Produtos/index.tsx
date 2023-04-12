import { useEffect, useState } from "react";
import { CardProduto } from "../../components/CardProduto";
import { NavBar } from "../../components/NavBar";
import { api } from "../../services/api";
import './styles.css'
import { ItemProduto } from "../../dtos/produtoDTO";

export function Produtos() {
    const [produto, setProduto] = useState<ItemProduto[]>([])
    
    async function fetchProdutos() {
        try {
            const { data } = await api.get('produtos/')
            setProduto(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProdutos();
    }, [])

    return (
        <>
            <NavBar />
            <div className="parent">
                <div className="body-produtos">
                    <CardProduto
                        data={produto}
                    />
                </div>
            </div>
        </>
    )
}