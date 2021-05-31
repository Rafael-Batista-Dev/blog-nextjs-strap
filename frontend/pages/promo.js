import React from 'react'
import { fromImageToUrl, API_URL } from '../utils/urls'
//import promocoes from './api/promocoes.json'
import axios from 'axios'

//const page = promocoes[0]

export default function contato({ promocoes }) {
  console.log(promocoes);
  return (
    <>
      <div>
        <h1>{promocoes.title}</h1>
        <p>{promocoes.descriptions}</p>
      </div>
      <br />
      <br />
      <hr />
      <div>
        {promocoes.compo_title.map(prom => (
          <div key={prom.id}>
            <div><img src={fromImageToUrl(prom.imagem)} width={400} height={200} /></div>
            <h3>{prom.destiny}</h3>
            <h3><s>{prom.real_price}</s></h3>
            <h3>{prom.descount_price}</h3>
            <p>{prom.percentage}</p>
            <hr />
          </div>
        ))
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data: promocoes } = await axios.get(
    `${API_URL}/promocoes/3`);
  return { props: { promocoes } };
}