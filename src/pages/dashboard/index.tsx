import Head from "next/head";
import Image from "next/image";
import ExitIcon from "src/assets/icons/Exit.svg"
import nookies from "nookies";
import { NextPage } from "next";
import { ListOfProjects } from "src/components/ListOfProjects";
import { SafeArea } from "src/components/SafeArea";
import { useRouter } from "next/router";
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
import { Button } from "src/components/Button";
import Link from "next/link";




const Dashboard: NextPage = () => {

    const router = useRouter()

    const cookies = nookies.get(null, 'jnm.token')

    if(cookies['jnm.token'] === null) {
        router.push('/login')
    }

    function handleExit() {
        nookies.destroy({}, 'jnm.token')
        router.push('/login')
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
                                <Link href="/dashboard/create">
                                    <ButtonContainer>
                                        <Button title="Criar" />
                                    </ButtonContainer>
                                </Link>
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