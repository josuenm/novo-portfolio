import { NextPage } from "next";
import { SafeArea } from "src/components/SafeArea";
import { Footer } from "src/components/Sections/Footer";
import { ProjectHeader } from "src/components/Header";
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
} from "src/styles/pages/Project"
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import projects from "src/utils/projects";
import Link from "next/link";
import Head from "next/head";



type ProjectProps = {
    id: number,
    name: string,
    description: string,
    technologies: string[],
    repository: string,
    website: string,
}



const Project: NextPage = () => {

    const router = useRouter()
    const query = router.query


    const [project, setProject] = useState<any>({
        name: '',
        description: '',
        technologies: [''],
        repository: '',
        website: '',
    })

    useEffect(() => {

        const selectedProject = projects.find(p => {
            if(p.name.replace(/\s/g, '') === query.id) {
                return p
            }
        })

        setProject(selectedProject as SetStateAction<ProjectProps | null>)

    }, [query.id])

    return (
        <>
            <Head>
                <title>{project.name} | Portfolio</title>
            </Head>
            <SafeArea>
                <ProjectHeader />
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
                        <Title>{project.name}</Title>
                        <Description>{project.description}</Description>

                        <TechnologiesTitle>Tecnologias usadas</TechnologiesTitle>

                        <ListDescription>
                            {project.technologies.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ListDescription>

                        <ButtonSet>
                            <Link href={project.website}>
                                <LinkTo outlined>Acessar</LinkTo>
                            </Link>
                            <Link href={project.repository}>
                                <LinkTo outlined={false}>Repositório</LinkTo>
                            </Link>
                        </ButtonSet>
                    </InfoContainer>
                </Container>
            </SafeArea>
            <Footer />
        </>
    )
}


export default Project;