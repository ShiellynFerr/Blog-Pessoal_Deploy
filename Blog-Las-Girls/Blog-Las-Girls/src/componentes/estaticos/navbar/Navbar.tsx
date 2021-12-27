import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
      progress: undefined,

    });
    history.push("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = <AppBar position="static" className="cor-navbar">
      <Toolbar variant="dense">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            Las Girls
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginX="auto"
        >
          <Link to="/home" className="text-decorator-none ">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
          </Link>
          <Link to="/posts" className="text-decorator-none ">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
          </Link>
          <Link to="/temas" className="text-decorator-none ">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
          </Link>
          <Link to="/formularioTema" className="text-decorator-none ">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
          </Link>

          <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                sair
              </Typography>
            </Box>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
