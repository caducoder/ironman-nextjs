import Link from "../src/components/Link";

interface FAQ_Response {
  faq: {
    question: string,
    answer: string
  }[]
}

export async function getStaticProps() {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
    const faq: FAQ_Response[] = await fetch(FAQ_API_URL)
      .then(resp => {
        return resp.json()
      })
      .then(data => data)

  return {
    props: {faq}, // will be passed to the page component as props
  }
}


function PaginaFAQ({ faq }: FAQ_Response) {

  return ( 
    <div>
      <h1>
        Alura Cases - FAQ
      </h1>
        <Link href="/">Ir para a Home</Link>
        <ul>
          {faq.map(({question, answer}, index) => (
            <li key={index}>
              <h2>{question}</h2>
              <p>{answer}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default PaginaFAQ;