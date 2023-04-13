import React, { useState } from "react";
import './styles.css'
import { Item } from "../../dtos/categoriaDTOS";
import { api } from "../../services/api";

type Props = {
    data: Item[]
}

export function TabelaCategoria({ data }: Props) {

    const [categoria, setCategoria] = useState<Item[]>([])

    async function deleteCategoria(id: number){
        try {
            await api.delete(`categorias/${id}`)
            setCategoria(categoria.filter(categoria => categoria.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="content-table">
            <div className="title-table">
                <h1>Categorias</h1>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de Cadastro</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.date_cadastro}</td>
                            <td>
                                <button onClick={() => deleteCategoria(item.id)}>
                                    deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}