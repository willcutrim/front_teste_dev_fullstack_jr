import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './screens/Home'
import { Fornecedores } from './screens/Fornecedores';
import { Categorias } from './screens/Catagorias';
import { Produtos } from './screens/Produtos';
import { CadastrarProdutos } from './screens/CadastrarProdutos';
import { CadastrarFornecedor } from './screens/CadastrarFornecedor';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/fornecedores' element={< Fornecedores/>} />
        <Route path='/categorias' element={<Categorias/>} />
        <Route path='/cadastrar-produtos' element={<CadastrarProdutos/>} />
        <Route path='/cadastrar-fornecedor' element={<CadastrarFornecedor/>} />
      </Routes>
    </BrowserRouter>
     
  )
}

export default App