// FAQScreen.js
import Footer from '../../components/Footer';
import Link from '../../components/Link';
import { theme } from '../../theme/theme';
import { Box, Text } from '../../theme/components';

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

export default function CuriosityScreen() {
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral["050"]
      }}
    >
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          maxWidth: theme.space.xcontainer_xl,
          marginHorizontal: "auto",
          paddingHorizontal: {
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
          paddingVertical: {
            xs: theme.space.x16,
            lg: theme.space.x20,
          },
        }}
      >
        <Box
          styleSheet={{
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(3,minmax(0,1fr))",
            },
            gap: {
              lg: theme.space.x8,
            }
          }}
        >
          <Box>
            <Text
              as="h2"
              styleSheet={{
                textVariant: theme.typography.variants.heading2,
                color: theme.colors.neutral[900],
              }}
            >
              Curiosidades: Fatos interessantes
            </Text>
            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              Fonte: {' '}
              <Link
                href="https://www.adorocinema.com/filmes/filme-53751/curiosidades/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
                target="_blank"
              >
                AdoroCinema
              </Link>
            </Text>

            <Text
              as="p"
              styleSheet={{
                marginTop: theme.space.x4,
                textVariant: theme.typography.variants.body1,
                color: theme.colors.neutral[500],
              }}
            >
              <Link
                href="/"
                styleSheet={{
                  color: theme.colors.primary[400],
                  fontWeight: '500',
                  hover: {
                    color: theme.colors.primary[300],
                  },
                }}
              >
                Voltar para home
              </Link>
            </Text>
          </Box>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.space.x12,
                lg: theme.space.x0,
              },
              gridColumn: {
                lg: "span 2 / span 2;",
              }
            }}
          >
            <Box as="dl">
              {facts.map((f, i) => (
                <Box
                  key={i}
                  styleSheet={{
                    marginBottom: theme.space.x12,
                  }}
                >
                  <Text
                    as="dt"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral[900],
                    }}
                  >
                    {f.title}
                  </Text>
                  <Text
                    as="dd"
                    styleSheet={{
                      marginTop: theme.space.x2,
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral[500],
                    }}
                  >
                    {f.curiosity}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}