import { useEffect, useState } from 'react'
import axios from 'axios'

const useFilterCategoriaPro = () => {


  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const obterCategoria = async () => {
      const resultado = await axios.get('http://localhost:1337/categoria-pros');
      setCategorias(resultado.data)
      console.log(resultado.data);
    }
    obterCategoria();
  }, [])

  const FiltroUI = () => (

    <>
      <form>
        <select onChange={e => setCategoria(e.target.value)} value={categoria}>
          <option value="">-- Filtrar --</option>
          {
            categorias.map(opcao => (
              <option key={opcao.id} value={opcao.id}>
                {opcao.nome_categoria_pro}
              </option>
            ))
          }
        </select>
      </form>
    </>

  )

  return { categoria, FiltroUI }

}

export default useFilterCategoriaPro