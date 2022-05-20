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
} from "./styles";




export function MyDevelopment() {

  const firstWords = [
    'ReactJS', 'NextJS', 'ChakraUI', 'Bootstrap', 'HTML', 'CSS', 'SASS', 'NodeJS', 'Express', 'MongoDB'
  ]

  const secondWords = [
    'Javascript', 'Typescript', 'Redux Toolkit', 'React-Hook-Form', 'Styled-components', 'Axios', 'MirageJS', 'Express', ' NodeJS', 'MongoDB',
  ]




  return (
    <Container id="development">
      <SafeArea>
        <Checkpoint title='Desenvolvimento' phrase='Perfeito é melhor que feito' chapter={1} />

        <SectionTitle title="A minha forma desenvolvimento" />

        <DescriptionContainer>
          <DescriptionText>
            No front-end web geralmente eu uso <span>Next.js</span>, <span>React.js</span> ou o básico com <span>HTML</span>, <span>SASS</span>, <span>Javascript</span>. No mobile eu uso <span>React Native</span>. Além disso também faço o uso de frameworks de interface declarativa, quando uso React ou Next eu uso o <span>ChakraUI</span> e quando uso apenas o básico eu opto pelo <span>Bootstrap</span>. Além disso uso algumas dependências para auxiliar no desenvolvimento.
          </DescriptionText>

          <DescriptionText>
            Não tenho foco no back-end mas consigo fazer o necessário para servir o front-end com segurança e salvar dados em banco de dados. Como eu sempre uso Javascript eu optei pelo <span>Node.js</span> com Express. E já usei <span>MongoDB</span> e <span>FaunaDB</span>. Além disso uso algumas dependências para auxiliar no desenvolvimento.
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
                Antes de tudo gosto de esboçar o layout do projeto no figma e depois começo a fazer o desenvolvimento do layout, caso eu precise de dados que vem do back-end eu faço usando dados fakes com mirage.js ou eu opto por começar pelo back-end.
              </InfoDescription>

            </InfoSet>



            <InfoSet>
              <InfoTitle>
                Interfaces do futuro
              </InfoTitle>

              <InfoDescription>
                A criação de interfaces modernas e performáticas está se tornando cada vez mais comum. E para acompanhar isso eu faço o uso de algumas plataformas aonde como behance e dribble aonde eu posso me inspirar em alguma parte do layout. E a performance da aplicação é muito importante, pensando nisso eu dou uma atenção maior para frameworks e bibliotecas que ajudam na performance.
              </InfoDescription>

            </InfoSet>

            <InfoSet>
              <InfoTitle>
                Back-End Eficáz
              </InfoTitle>

              <InfoDescription>
                Por mais que meu foco não seja totalmente no back-end eu tento fazer ao máximo para criar um back-end seguro e que sirva o front-end de forma eficáz. Pensando nisso eu faço a criptografia de dados sigilosos para o banco de dados, autenticação JWT para o front-end e até estruturas ejs.
              </InfoDescription>
            </InfoSet>
          </InfoContainer>        
        </MainDescriptionContainer>
        <ScrollerContainer>
          <Scroller words={firstWords} speed='35s' />
          <Scroller words={secondWords} speed='40s' />
        </ScrollerContainer>
      </SafeArea>
    </Container>
  )
}