import React, { useEffect } from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import "./Home.css";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { Link, useHistory } from "react-router-dom";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify';

function Home() {

  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens);
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
          position:"top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme:"colored",
          progress:undefined,
        });
          history.push("/login")
  
      }
  }, [token])
  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="background-home "
        >
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
                className="titulo"
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="h5"
                align="center"
                className="titulo"
              >
                Ao Blog Las Girls, um blog dedicado a personagens femininas do
                universo dos heróis, séries e filmes!
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem/>
              </Box>
              <Link to="/posts">
              <Button variant="outlined" color="primary" className="botão">
                Ver postagens
              </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/973/891/680/the-avengers-avengers-endgame-avengers-endgame-gamora-zoe-saldana-hd-wallpaper-preview.jpg"
              alt=""
              width="675px"
              // height="400px"
            />
          </Grid>
          <Grid xs={12} className="background-branco">
            <TabPostagem />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;
