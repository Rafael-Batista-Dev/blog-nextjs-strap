import React from 'react'
import { fromImageToUrl, API_URL } from '../utils/urls'
//import pages from './api/pages.json'
import axios from 'axios'

//const page = pages[0]

export default function contato({ pages }) {
  console.log(pages);
  return (
    <>
      <div>
        <h1>{pages.pageName}</h1>
        <p>{pages.description}</p>
      </div>
      <br />
      <br />
      <hr />
      <div>
        {pages.paragraph.map(parag => (
          <div key={parag.id}>
            <h3>{parag.titleParagraph}</h3>
            <div><img src={fromImageToUrl(parag.imgParagraph)} width={400} height={200} /></div>
            <p>{parag.descriptionParagraph}</p>
            <hr />
          </div>
        ))
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data: pages } = await axios.get(
    `${API_URL}/pages/1`);
  return { props: { pages } };
}