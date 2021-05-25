import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'
import axios from 'axios'


const useProdutos = (produtos) => {
  console.log(produtos);
  const Produtos = () => (
    <>
      {produtos.map(produto => (
        <Link href={`/produtos/${produto.slug}`} key={produto.id}>
          <a className={styles.card} target="_blank">
            <div><h4 style={{ textAlign: "justify" }}>{produto.nome}</h4></div>
            <div style={{ padding: " 20px 0", textAlign: "center" }} ><img src={fromImageToUrl(produto.foto)} width={200} height={200} /></div>
            <div style={{ textAlign: "left" }}><h4>R$: {twoDecimals(produto.preco)}</h4></div>
            <div><h4>Categoria: {produto.categoria_pro.nome_categoria_pro}</h4></div>
          </a>
        </Link>
      ))}
    </>
  )
  return {
    Produtos
  }
}

export default useProdutos

export async function getStaticProps() {
  const { data: produtos } = await axios.get(
    `${API_URL}/produtos`);
  return { props: { produtos } };
}