import { CardProduto } from "../../components/CardProduto";
import { CardSections } from "../../components/CardSections";
import { NavBar } from "../../components/NavBar";
import './styles.css'
import { Link } from "react-router-dom";

export function Home(){
    return(
        <>
            <NavBar/>
            <div className="body-home">
                <Link to='/produtos' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <CardSections
                        title="Produtos"
                    />
                </Link>
                
                <Link to='/fornecedores' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <CardSections
                        title="Fornecedores"
                    />
                </Link>
                
                <Link to='/categorias' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <CardSections
                        title="Categorias"
                    />
                </Link>
                
            </div>
            
        </>
    )
}