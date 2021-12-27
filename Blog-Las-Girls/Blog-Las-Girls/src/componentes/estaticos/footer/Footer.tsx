import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Grid,Typography,IconButton, Button,Box,} from "@material-ui/core";
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

var footerComponent;

if(token != ""){footerComponent=< Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
      >
        <Grid alignItems="center" item xs={12}>
          <Box className='box-footer cor-footer'>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className='cor-texto-branco'
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.facebook.com/generationbrasil"
                target="_blank"
              >
                <FacebookIcon className='redes-sociais' />
              </a>
              <a
                href="https://www.instagram.com/generationbrasil/"
                target="_blank"
              >
                <InstagramIcon className='redes-sociais'/>
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
              >
                <LinkedInIcon  className='redes-sociais'/>
              </a>
            </Box>
          </Box>
          <Box className='box-footer2 cor-footer'>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className='cor-texto-branco'
              >
                © 2020 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className='cor-texto-branco'
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>}
  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
