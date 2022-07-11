import Head from "next/head";
import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";
import { Box } from "../src/theme/components";
import { theme } from "../src/theme/theme";

// interface FAQ_Response {
//   faq: {
//     question: string,
//     answer: string
//   }[]
// }

const facts = [
  {
    title: 'Trabalho solo',
    curiosity: 'Homem de Ferro é o primeiro filme produzido pela Marvel Entertainment sem a participação de qualquer distribuidora.'
  },
  {
    title: 'Ficaram de fora',
    curiosity: `Nicolas Cage e Tom Cruise manifestaram interesse em interpretar Tony Stark. Rachel McAdams era a primeira escolha do diretor para a personagem Virginia \"Pepper\" Potts, mas ela recusou o papel.`
  },
  {
    title: 'Construindo a armadura',
    curiosity: 'Os três modelos da armadura do Homem de Ferro vistos em cena foram criados por Phil Saunders e Avi Granov. Granov trabalhava na revista em quadrinhos do próprio Homem de Ferro na época das filmagens.'
  },
  {
    title: 'Mudança de ares',
    curiosity: 'Jon Favreau rodou Homem de Ferro na California, por considerar que muitos filmes recentes de super-herói foram feitos na costa leste dos Estados Unidos, especialmente em Nova York.'
  },
  {
    title: 'Diálogos improvisados',
    curiosity: 'Durante as filmagens Jon Favreau preferiu improvisar nas cenas de diálogo, seguindo influência do diretor Robert Altman.'
  }
]

// export async function getStaticProps() {
//   const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
//     const faq: FAQ_Response[] = await fetch(FAQ_API_URL)
//       .then(resp => {
//         return resp.json()
//       })
//       .then(data => data)

//   return {
//     props: {faq}, // will be passed to the page component as props
//   }
// }


function PaginaFAQ() {

  return ( 
    <Box
      as="main"
      styleSheet={{
        flex: 1,
        backgroundColor: theme.colors.neutral["050"],
        padding: {
          xs: theme.space.x6,
          sm: theme.space.x12,
        }
      }}
    >
      <PageTitle title={'Iron Man - Curiosidades'} />
      <h1>
        Iron Man - Curiosidades
      </h1>
      <Link href="/">Ir para a Home</Link>
      <ul>
        {facts.map(({title, curiosity}, index) => (
          <li key={index}>
            <h2>{title}</h2>
            <p>{curiosity}</p>
          </li>
        ))}
      </ul>
      <small>Fonte: <a href="https://www.adorocinema.com/filmes/filme-53751/curiosidades/">AdoroCinema</a></small>
    </Box>
  );
}

export default PaginaFAQ;