import Image from "next/image";
import TachIcon from "src/assets/icons/Tech.svg";
import { Checkpoint } from "src/components/Checkpoint";
import { ModalCode, ModalInterface } from "src/components/ModalWindow";
import { SafeArea } from "src/components/SafeArea";
import { Scroller, ScrollerContainer } from "src/components/Scroller";
import { SectionTitle } from "src/components/SectionTitle";
import { 
  Container, 
  DescriptionContainer,
  DescriptionText,
  MainDescriptionContainer,
  ModalSet,
  InfoContainer,
  InfoSet,
  InfoTitle,
  InfoDescription,
  TechnologiesContainer,
  Technology,
} from "./styles";




export function MyDevelopment() {

  const firstWords = [
    'ReactJS', 'NextJS', 'ChakraUI', 'Bootstrap', 'HTML', 'CSS', 'SASS', 'NodeJS', 'Express'
  ]

  const secondWords = [
    'Javascript', 'Typescript', 'Redux Toolkit', 'React-Hook-Form', 'Styled-components', 'Axios', 'MirageJS', 'MongoDB', 'Firebase'
  ]


  const technologies = [
    {
      id: 1,
      name: "Javascript",
      experience: "1 a 2 anos"
    },
    {
      id: 2,
      name: "Typescript",
      experience: "1 a 2 anos"
    },
    {
      id: 3,
      name: "ReactJS",
      experience: "1 a 2 anos"
    },
    {
      id: 4,
      name: "React Native",
      experience: "menos de 1 ano"
    },
    {
      id: 5,
      name: "NextJS",
      experience: "menos de 1 ano"
    },
    {
      id: 6,
      name: "Redux Toolkit",
      experience: "menos de 1 ano"
    },
    {
      id: 7,
      name: "SASS",
      experience: "1 a 2 anos"
    },
    {
      id: 8,
      name: "NodeJS",
      experience: "menos de 1 ano"
    },
    {
      id: 9,
      name: "Express",
      experience: "menos de 1 ano"
    },
    {
      id: 10,
      name: "MongoDB",
      experience: "menos de 1 ano"
    },
  ]



  return (
    <Container id="development">
      <SafeArea>
        <Checkpoint title='Desenvolvimento' phrase='Perfeito é melhor que feito' chapter={1} />

        <SectionTitle title="A minha forma desenvolvimento" />

        <DescriptionContainer>
          <DescriptionText>
            No front-end web geralmente eu uso <span>Next.js</span>, <span>React.js</span> ou o básico com <span>HTML</span>, <span>SASS</span>, <span>Javascript</span>. No mobile ainda estou aprendendo <span>React Native</span>. Além disso também faço o uso de frameworks de interface declarativa, quando uso React ou Next eu uso o <span>ChakraUI</span> e quando uso apenas o básico eu opto pelo <span>Bootstrap</span>. Além disso uso algumas dependências para auxiliar no desenvolvimento.
          </DescriptionText>

          <DescriptionText>
            Meu foco não é totalmente no back-end mas consigo fazer o necessário para servir o front-end com segurança e manipular dados usando um MongoDB. Como eu sempre uso Javascript eu optei pelo <span>Node.js</span> com <span>Express</span> mas estou aprendendo aos poucos o <span>AdonisJS</span>.
          </DescriptionText>
        </DescriptionContainer>


        
        <MainDescriptionContainer>
          <ModalSet>
            <ModalCode />
            <ModalInterface />
          </ModalSet>


          <InfoContainer>
            <InfoSet>
              <InfoTitle>
                O começo
              </InfoTitle>

              <InfoDescription>
                Antes de tudo gosto de esboçar o design do projeto no <span>figma</span>, isso ajuda a separar as responsabilidades, quando estou fazendo o design eu quero esboçar como projeto final vai ser, quando estou codando a responsabilidade é o design fiel, performance e achar soluções para problemas que acontece em desenvolvimento
              </InfoDescription>

            </InfoSet>



            <InfoSet>
              <InfoTitle>
                Interfaces do futuro com React e Next
              </InfoTitle>

              <InfoDescription>
                Interfaces com React geralmente são pesadas e perde o SEO, para isso existe uma solução ótima que se chama NextJS (framework server side), com ele a performance fica melhor e o SEO é garantido. Mas ainda sim podemos sofrer com performance então para isso é sempre bom avançar no quesito React e dar uma olhada no fluxo de renderização com <span>dev-tools</span> e também saber usar <span>Memo, useMemo, useCallback</span>, lazy e dynamic, e até um <span>bundle analyzer</span> para saber quais bibliotecas estão pesando mais do que o normal.
              </InfoDescription>

            </InfoSet>

            <InfoSet>
              <InfoTitle>
                Back-End Eficáz
              </InfoTitle>

              <InfoDescription>
                Meu foco não é totalmente em back-end mas estou correndo atrás para aperfeiçoar mais meu conhecimento, mas ainda sim eu consigo servir o front-end com estruturas <span>.ejs</span>, <span>JWT</span>, criação de models, status code para diferentes ocasiões, metodos <span>GET, POST, PUT, PATCH, DELETE</span>. Tudo isso eu consigo fazer usando o <span>MongoDB</span>. Entendo que isso não é tudo e pode parecer pouco para quem esta em outro patamar na tecnologia, mas é oque eu consigo oferecer por enquanto e estou procurando cada vez mais conhecimento.
              </InfoDescription>
            </InfoSet>
          </InfoContainer>        
        </MainDescriptionContainer>

        <TechnologiesContainer>
            {technologies.map((tech) => (
              <Technology key={tech.id}>
                <span className="title">{tech.name}</span>
                <span className="experience">{tech.experience}</span>
              </Technology>
            ))}
        </TechnologiesContainer>

        <ScrollerContainer>
          <Scroller words={firstWords} speed='35s' />
          <Scroller words={secondWords} speed='40s' />
        </ScrollerContainer>
      </SafeArea>
    </Container>
  )
}