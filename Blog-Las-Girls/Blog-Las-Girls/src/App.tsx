import React from "react";
import Home from "./paginas/home/Home";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./componentes/temas/listatema/ListaTema";
import ListaPostagem from "./componentes/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./componentes/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./componentes/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./componentes/temas/deletarTema/DeletarTema";
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={store}>

      <ToastContainer />

      <Router>

        <Navbar />

        {/* dentro do switch vão as rotas que serão alteradas */}
        <Switch>
          <div style={{ minHeight: "100vh" }}>
            {/* Route tem o caminho da rota de cada componente */}

            <Route exact path="/">
              <Login />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastroUsuario">
              <CadastroUsuario />
            </Route>

            <Route path="/temas">
              <ListaTema />
            </Route>

            <Route path="/posts">
              <ListaPostagem />
            </Route>

            <Route exact path="/formularioPostagem">
              <CadastroPost />
            </Route>

            <Route exact path="/formularioPostagem/:id">
              <CadastroPost />
            </Route>

            <Route exact path="/formularioTema">
              <CadastroTema />
            </Route>
            <Route exact path="/formularioTema/:id">
              <CadastroTema />
            </Route>

            <Route path="/deletarPostagem/:id">
              <DeletarPostagem />
            </Route>

            <Route path="/deletarTema/:id">
              <DeletarTema />
            </Route>

          </div>
        </Switch>

        <Footer />

      </Router>

    </Provider>
  );
}

export default App;
