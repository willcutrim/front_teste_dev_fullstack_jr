import React from "react";
import './styles.css'
import { Item } from "../../dtos/categoriaDTOS";

type Props = {
    data: Item[]
}

export function TabelaCategoria({ data }: Props) {
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
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.date_cadastro}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}