import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import './styles.css'
import { Fornecedor } from "../../dtos/fornecedorDTO";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CadastrarFornecedor() {

    const navigate = useNavigate()

    const [nomeFantasia, setNomeFantasia] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [telefone, setTelefone] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [estado, setEstaddo] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')

    const data = {
        endereco: {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            cep: cep
        },
        nome_fantasia: nomeFantasia,
        razao_social: razaoSocial,
        cnpj: cnpj,
        telefone: telefone
    }

    async function createFornecedor(e: any) {
        try {
            e.preventDefault();
            await api.post('fornecedores/', data)

            navigate('/fornecedores')
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <NavBar />
            <div className="new-fornecedor">
                <h2>Criar novo fornecedor</h2>

                <h4>Dadso da empresa</h4>
                <form onSubmit={(e) => createFornecedor(e)}>
                    <div>
                        <div className="form-control">
                            <label htmlFor="nome">Nome fantasia:</label>
                            <input type="text" name="nome_fantasia" id="nome" placeholder="Nome fantasia" onChange={(e) => setNomeFantasia(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="nome">Razão social:</label>
                            <input type="text" name="razao_social" id="razao" placeholder="Razão social" onChange={(e) => setRazaoSocial(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="nome">CNPJ:</label>
                            <input type="text" name="cnpj" id="cnpj" placeholder="CNPJ" onChange={(e) => setCnpj(e.target.value)} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="nome">Telefone:</label>
                            <input type="text" name="telefone" id="telefone" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <hr></hr>

                    <h2>Endereço</h2>
                    <div className="form-control">
                        <label htmlFor="nome">Rua:</label>
                        <input type="text" name="rua" id="rua" placeholder="Rua" onChange={(e) => setRua(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nome">Número:</label>
                        <input type="text" name="numero" id="numero" placeholder="Número" onChange={(e) => setNumero(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nome">Bairro:</label>
                        <input type="text" name="bairro" id="bairro" placeholder="Bairro" onChange={(e) => setBairro(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nome">Cidade:</label>
                        <input type="text" name="cidade" id="cidade" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nome">Estado:</label>
                        <input type="text" name="estado" id="estado" placeholder="Estado" onChange={(e) => setEstaddo(e.target.value)} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nome">CEP:</label>
                        <input type="text" name="cep" id="cep" placeholder="CEP" onChange={(e) => setCep(e.target.value)} />
                    </div>
                    <input type="submit" value="Criar fornecedor" className="botao" />
                </form>
            </div>
        </>
    )
}

// onChange={(e) => setData(e.target.value)}