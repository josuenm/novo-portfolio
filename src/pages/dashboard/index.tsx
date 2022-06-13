import Head from "next/head";
import Image from "next/image";
import ExitIcon from "src/assets/icons/Exit.svg"
import nookies from "nookies";
import Link from "next/link";
import Router from "next/router";
import { GetServerSideProps, NextPage } from "next";
import { ListOfProjects } from "src/components/ListOfProjects";
import { SafeArea } from "src/components/SafeArea";
import { Button } from "src/components/Button";
import { 
    Container, 
    Title, 
    MainContainer, 
    SetContainer,
    Header,
    PictureContainer,
    ProfileContainer,
    Greetings,
    ExitContainer,
    ExitButtonContainer,
    ExitButtonTitle,
    SectionContainer,
    ButtonContainer,
} from "src/styles/pages/Dashboard";


export const getServerSideProps:GetServerSideProps = async (ctx: any) => {

    const cookies = nookies.get(null, 'jnm.token')

    if(cookies['jnm.token'] === undefined || cookies['jnm.token'] === null) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const Dashboard: NextPage = () => {
    
    
    function handleExit() {
        nookies.destroy({}, 'jnm.token')
        Router.push('/login')
    }

    return (
        <>
            <Head>
                <title>Home | Dashboard</title>
            </Head>
            <SafeArea>
                <Container>
                    <Header>
                        <ProfileContainer>
                            <PictureContainer>
                                <Image 
                                    src="https://github.com/josuenm.png" 
                                    alt="Foto de perfil" 
                                    layout="fixed" 
                                    className="picture" 
                                    width={50}
                                    height={50}
                                />
                            </PictureContainer>
                            <Greetings>Olá Josué!</Greetings>
                        </ProfileContainer>
                        <ExitContainer>
                            <ExitButtonContainer onClick={handleExit}>
                                <Image 
                                    src={ExitIcon} 
                                    alt="Botão de sair" 
                                    layout="fixed" 
                                    width={18} 
                                    height={18} 
                                />
                                <ExitButtonTitle>Sair</ExitButtonTitle>
                            </ExitButtonContainer>
                        </ExitContainer>
                    </Header>
                    <MainContainer>
                        <SetContainer>
                            <SectionContainer>
                                <Title marginBottom="1.5rem">Criar projeto</Title>
                                    <ButtonContainer>
                                        <Link href="/dashboard/create">
                                            <Button title="Criar" />
                                        </Link>
                                    </ButtonContainer>
                            </SectionContainer>
                            <SectionContainer>
                                <Title>Projetos</Title>
                                <ListOfProjects href="/dashboard" />
                            </SectionContainer>
                        </SetContainer>
                    </MainContainer>
                </Container>
            </SafeArea>
        </>
    )

}


export default Dashboard;