import Tema from '../models/Tema';
interface Postagem{
  id: number;
  titulo: string;
  texto: string;
  tema?: Tema|null
}

//permite que essa model seja acessível fora desse arquivo
export default Postagem;