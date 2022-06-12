import Link from "next/link";
import Head from "next/head";
import nookies from "nookies";
import projectApi from "src/services/project";
import { GetServerSideProps, NextPage } from "next";
import { SafeArea } from "src/components/SafeArea";
import { Footer } from "src/components/Sections/Footer";
import { ProjectHeader } from "src/components/Header";
import { Button } from "src/styles/pages/SelectedProject";
import { 
    ButtonSet, 
    Container, 
    Description, 
    ImageContainer, 
    InfoContainer, 
    LinkTo, 
    ListDescription, 
    Screen, 
    SkeletonColumn, 
    SkeletonElement, 
    SkeletonRow, 
    TechnologiesTitle, 
    Title 
} from "src/styles/pages/Project";







export const getServerSideProps:GetServerSideProps = async (ctx) => {

    const { id } = ctx.query;

    const res = await projectApi.findOne(id as string) as { status: number, data: ProjectProps };

    console.log(res)

    switch(res.status) {
        case 200:
            return {
                props: {
                    project: res.data
                }
            }
            break;
        
        case 500:
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false,
                }
            }
            break;

        case 401:
            nookies.destroy({}, 'jnm.token')
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                }
            }
            break;
        
        default:
            break;
    }


    return {
        props: {
        }
    }
}



type ProjectProps = {
    _id: string;
    title: string;
    description: string;
    technologies: string[];
    repository: string;
    website: string;
}


const SelectedProject: NextPage = ({ project }: any) => {


    return (
        <>
            <Head>
                <title>{project.title} | Portfolio</title>
            </Head>
            <SafeArea>
                <ProjectHeader href="/dashboard" />
                <Container>
                    <ImageContainer>
                        <Screen>
                            <SkeletonRow>
                                <SkeletonColumn>
                                    <SkeletonElement width="100%" height="150px" />
                                </SkeletonColumn>
                                <SkeletonColumn align="flex-end">
                                    <SkeletonElement width="100%" height="10px" />
                                    <SkeletonRow>
                                        <SkeletonElement width="100%" height="25px" />
                                        <SkeletonElement width="100%" height="25px" />
                                    </SkeletonRow>
                                    <SkeletonElement width="100%" height="50px" />
                                </SkeletonColumn>
                            </SkeletonRow>
                            <SkeletonRow>
                                <p>Preview não esta disponível</p>
                            </SkeletonRow>
                        </Screen>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{project.title}</Title>
                        <Description>{project.description}</Description>

                        <TechnologiesTitle>Tecnologias usadas</TechnologiesTitle>

                        <ListDescription>
                            {project.technologies.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ListDescription>

                        <ButtonSet>
                            <Link href={project.website} target="_blank">
                                <LinkTo outlined>Acessar</LinkTo>
                            </Link>
                            <Link href={project.repository} target="_blank">
                                <LinkTo outlined={false}>Repositório</LinkTo>
                            </Link>
                        </ButtonSet>

                        <Link href={`/dashboard/${project._id}/edit`}>
                            <Button outline={true}>Editar</Button>
                        </Link>
                        <Button outline={false}>Apagar</Button>
                    </InfoContainer>
                </Container>
            </SafeArea>
            <Footer />
        </>
    )
}


export default SelectedProject;