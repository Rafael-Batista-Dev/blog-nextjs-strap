import { fromImageToUrl, API_URL } from '../utils/urls'
// import pp from './api/pages.json'
import axios from 'axios'

// const page1 = pp[1]

export default function sobreNos({ pages }) {
  // console.log(page1);
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
      <hr />
      <h1>
        {
          pages.body.find((item) => item.__component === "page.ask")
            .title
        }
      </h1>
      <div>
        <p>
          {
            pages.body.find((item) => item.__component === "page.ask")
              .description
          }
        </p>
      </div>
      <hr />
      <>
        {pages.body
          .find((item) => item.__component === "page.ask")
          .questions.map((question) => (
            <div key={question.id}>
              <h2>{question.title}</h2>
              <p>{question.descriptions}</p>
              <hr />
            </div>
          ))}
      </>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>
        {
          pages.body.find((item) => item.__component === "page.contact")
            .title
        }
      </h1>
      <div>
        <p>
          {
            pages.body.find((item) => item.__component === "page.contact")
              .description
          }
        </p>
      </div>
      <hr />
      <>
        {pages.body
          .find((item) => item.__component === "page.contact")
          .cardContact.map((card) => (
            <div key={card.id}>
              <h2>{card.title}</h2>
              <h3>{card.contactData}</h3>
              <div><img src={fromImageToUrl(card.contactIcon)} width={80} height={80} /></div>
              <p>{card.contactDescription}</p>
              <hr />
            </div>
          ))}
      </>
    </>
  )
}

export async function getStaticProps() {
  const { data: pages } = await axios.get(
    `${API_URL}/pages/2`);
  return { props: { pages } };
}