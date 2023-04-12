import { useEffect, useState } from "react"
import { NavBar } from "../../components/NavBar"
import { Item } from "../../dtos/categoriaDTOS";
import { Fornecedor } from "../../dtos/fornecedorDTO";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import './styles.css'

export function CadastrarProdutos() {
    const [categoria, setCategoria] = useState<Item[]>([]);
    const [fornecedor, setFornecedor] = useState<Fornecedor[]>([]);

    const [nome, setNome] = useState('')
    const [categoriaData, setCategoriaData] = useState(0)
    const [fornecedorData, setFornecedorData] = useState(0)
    const [descricao, setdescricao] = useState('')

    const navigate = useNavigate()

    const data = {
        categoria: categoriaData,
        fornecedores: [
            fornecedorData
        ],
        nome: nome,
        descricao: descricao,
    }

    const createProduto = async (e: any) => {
        try {
            e.preventDefault();
            await api.post('produtos/', data)

            navigate('/produtos')
        } catch (error) {
            console.log(error)
        }
    }


    async function fetchCategoriaAndFornecedores() {
        try {
            const categoria = await api.get('categorias/')
            const fornecedor = await api.get('fornecedores/')

            setCategoria(categoria.data)
            setFornecedor(fornecedor.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategoriaAndFornecedores();
    }, [])

    return (
        <>
            <NavBar />
            <div className="new-produto">
                <h2>Criar novo produto</h2>
                <form onSubmit={(e) => createProduto(e)}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome do produto:</label>
                        <input type="text" name="nome" id="nome" placeholder="Nome do produto" onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="nome">Categoria:</label>
                        <select onChange={(e) => setCategoriaData(Number(e.target.value))}>
                            {categoria.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="nome">Fornecedor:</label>

                        <select onChange={(e) => setFornecedorData(Number(e.target.value))}>
                            {fornecedor.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.razao_social}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="form-control">
                        <label htmlFor="nome">Descricão:</label>
                        <textarea name="descricao" id="descricao" placeholder="Descrição do produto" onChange={(e) => setdescricao(e.target.value)} />
                    </div>
                    <input type="submit" value="Criar produto" className="botao" />
                </form>
            </div>
        </>
    )
}