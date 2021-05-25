import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'
import axios from 'axios'

export default function Product({ produto }) {

  console.log(produto);

  return (
    <div className={styles.container}>
      <Head>
        {
          produto.meta_title && <title>{produto.meta_title}</title>
        }
        {
          produto.meta_description && <meta name="description" content={produto.meta_description} />
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <a href="https://nextjs.org">Produtos</a>
        </h1>

        <p className={styles.description}>
          Produtos{' '}
          <code className={styles.code}> legais</code>
        </p>
        <div className={styles.grid} style={{ width: "650px" }}>
          <div className={styles.card} style={{ textAlign: "center" }}>
            <div><h2 style={{ fontSize: "20px", textAlign: 'justify' }}>{produto.nome}</h2></div>
            <div style={{ padding: " 20px 0" }}><img src={fromImageToUrl(produto.foto)} width={200} height={200} /></div>
            <div><p style={{ fontSize: "12px", textAlign: "justify" }}>{produto.descricao}</p></div>
            <div style={{ textAlign: "left" }}><h3>R$: {twoDecimals(produto.preco)}</h3></div>
          </div>
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


export async function getStaticProps({ params: { slug } }) {
  const produtos_res = await fetch(`${API_URL}/produtos/?slug=${slug}`)
  const found = await produtos_res.json()

  return {
    props: {
      produto: found[0]
    }
  }
}

export async function getStaticPaths() {
  const produtos_res = await fetch(`${API_URL}/produtos/`)
  const produtos = await produtos_res.json()

  return {
    paths: produtos.map(produto => ({
      params: { slug: String(produto.slug) }
    })),
    fallback: false
  }

}