import { useEffect, useState } from 'react';
import { NavBar } from '../../components/NavBar'
import { TabelaCategoria } from '../../components/TabelaCategorias'
import './styles.css'
import { api } from '../../services/api';
import { Item } from '../../dtos/categoriaDTOS';
import { useNavigate } from 'react-router-dom';


export function Categorias() {
    const [categoria, setCategoria] = useState<Item[]>([]);
    const [nome, setCategoriaData] = useState('')

    const navigate = useNavigate()
    const data = {
        nome: nome
    }

    const createCategoria = async (e: any) => {
        try {
            e.preventDefault();
            await api.post('categorias/', data)

            // navigate('/categorias')
        } catch (error) {
            console.log(error)
        }
    }

    async function getCategoria() {
        try {
            const { data } = await api.get('categorias/')
            setCategoria(data);
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getCategoria();
    }, [categoria])

    return (
        <>
            <NavBar />
            <div className='categoria-div'>
                <div className='form'>
                    <h2>Cadastrar nova categoria</h2>
                    <form onSubmit={(e) => createCategoria(e)}>
                        <div className="form-control">
                            <label htmlFor="nome">Nome da categoria:</label>
                            <input type="text" name="categoria" id="categoria" placeholder="Nome da categoria" onChange={(e) => setCategoriaData(e.target.value)} />
                        </div>
                        <input type="submit" value="Criar categoria" className="botao" />
                    </form>
                </div>
                <TabelaCategoria
                    data={categoria}
                />
            </div>

        </>
    )
}