import React from 'react'
import { fromImageToUrl, API_URL } from '../utils/urls'
import pp from './api/pages.json'
import axios from 'axios'

const page1 = pp[1]

export default function sobreNos({ pages }) {
  console.log(page1);
  return (
    <>
      <div>
        <h1>{pages.pageName}</h1>
        <h3>{pages.title}</h3>
        <p>{pages.description}</p>
      </div>
      <hr />
      <br />
      <br />
      <div>
        {pages.paragraph.map(parag => (
          <div key={parag.id}>
            <h3>{parag.titleParagraph}</h3>
            <div><img src={fromImageToUrl(parag.imgParagraph)} width={400} height={200} /></div>
            <p>{parag.descriptionParagraph}</p>
          </div>
        ))
        }
      </div>
      <hr />
      <br />
      <br />
      <br />
      {/* <div>
        {pages.paragraph.map(parag => (
          <div key={parag.id}>
            <h3>{parag.titleParagraph}</h3>
            <div><img src={fromImageToUrl(parag.imgParagraph)} width={400} height={200} /></div>
            <p>{parag.descriptionParagraph}</p>
          </div>
        ))
        }
      </div> */}
    </>
  )
}

export async function getStaticProps() {
  const { data: pages } = await axios.get(
    `${API_URL}/pages/2`);
  return { props: { pages } };
}