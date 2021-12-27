import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useSelector } from 'react-redux';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Postagem from '../../../models/Postagem';
import { toast } from 'react-toastify';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
        progress: undefined,
      });
      history.push("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/Postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])


  return (
    <>
        {
          posts.map(post => (
            <Box justifyContent='center' display='flex'>
              <Box m={2} width="45%">
                <Card variant='outlined' className='card-postagem'>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom align='center' className='text-postagem'>
                      Postagens
                    </Typography>
                    <Typography variant="h5" component="h2" align='center' className='text-bold'>
                      {post.titulo}
                    </Typography>
                    <Typography variant="body2" component="p" align='justify' className='text-postagem'>
                      {post.texto}
                    </Typography>
                    <Typography variant="body2" component="p" className='text-bold-tema'>
                      Tema: {post.tema?.descricao}
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Box display="flex" justifyContent="center" mb={1.5} className='card-actions'>
                      <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="primary" className='botao-atualizar'>
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="secondary" className='botao-deletar'>
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            </Box>
          ))
        }
    </>
  )
}

export default ListaPostagem;