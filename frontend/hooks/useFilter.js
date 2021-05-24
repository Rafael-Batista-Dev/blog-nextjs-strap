import { useEffect, useState } from 'react'
import axios from 'axios'

const useFilter = () => {


  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    const obterCategoria = async () => {
      const resultado = await axios.get('http://localhost:1337/categorias');
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
                {opcao.nomeCategoria}
              </option>
            ))
          }
        </select>
      </form>
    </>

  )

  return { FiltroUI }

}

export default useFilter