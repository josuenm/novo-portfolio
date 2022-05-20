import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'src/components/Button'
import { Checkpoint } from 'src/components/Checkpoint'
import { Header } from 'src/components/Header'
import { ModalCode, ModalInterface } from 'src/components/ModalWindow'
import { Footer } from 'src/components/Sections/Footer'
import { MyDevelopment } from 'src/components/Sections/MyDevelopment'
import { MyNetwork } from 'src/components/Sections/MyNetwork'
import { Presentation } from 'src/components/Sections/Presentation'
import { Projects } from 'src/components/Sections/Projects'
import { Container } from 'src/styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | Portfolio</title>
      </Head>

      <Header />
      <Presentation />      
      <MyDevelopment />
      <MyNetwork />
      <Projects />
      <Footer />

    </Container>
  )
}

export default Home
