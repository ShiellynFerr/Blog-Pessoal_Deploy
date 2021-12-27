import React, { useState, useEffect, ChangeEvent } from "react";
import "./Login.css";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import {toast} from 'react-toastify';

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); //previne o comportamento padrão do botão, impedi que o botão atualize a tela
    
    try {
      await login(`/usuarios/logar`, userLogin, setToken); // dados de tentativa conexão
      toast.success('Usuário logado com sucesso', {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme:"colored",
        progress:undefined,
      });

      //variavel resposta, é a resposta da requisição a api
      // await = é preciso aguardar enquanto a api da uma resposta
    } catch (error) {
      toast.error('Dados do usuário inconsistentes,erro ao logar.', {
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme:"colored",
        progress:undefined,
      });
    }
  }

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token))
      history.push("/home");
    }
  }, [token]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="background-login"
    >
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="texto-bold"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => uptadeModel(e)}
              type="email"
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => uptadeModel(e)}
              type="password"
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                className="text-decorator-none"
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastroUsuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="texto-bold"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem-login"></Grid>
    </Grid>
  );
}

export default Login;

// anotações

// UserLogin = acessar as informações do states

//setUserLogin = alterar as informações do states
