import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import useProdutos from '../../hooks/useProdutos'
import useFilterCategoriaPro from '../../hooks/useFilterCategoriaPro'
import axios from 'axios'
import { API_URL } from '../../utils/urls'
import styles from '../../styles/Home.module.css'


export default function Produtos() {

  const [produtos, setProdutos] = useState([])
  const [filtradas, setFiltradas] = useState([])

  const { Produtos } = useProdutos(filtradas)
  const { categoria, FiltroUI } = useFilterCategoriaPro()

  useEffect(() => {

    if (categoria) {
      const filtradas = produtos.filter(produtos => produtos.categoria_pro.id == categoria)
      //console.log(filtradas);
      setFiltradas(filtradas);
    } else {
      const obterProdutos = async () => {
        const resultado = await axios.get(`${API_URL}/produtos`)
        setProdutos(resultado.data);
        setFiltradas(resultado.data);
        //console.log(resultado.data);
        console.log(categoria);
      }
      obterProdutos()
    }

  }, [categoria])

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <a href="https://nextjs.org">Produtos</a>
        </h1>

        <p className={styles.description}>
          Categoria{' '}
          <code className={styles.code}> <FiltroUI /></code>
        </p>
        <div className={styles.grid} style={{ width: "650px" }}>
          <Produtos />
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}