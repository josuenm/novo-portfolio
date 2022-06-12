import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import projectApi from "src/services/project";
import { 
    Arrow, 
    Bullet, 
    Container, 
    HorizontalListContainer, 
    LinkToProject, 
    Loading, 
    ProjectContainer, 
    ProjectHeader, 
    ProjectMainContainer, 
    ProjectTitle, 
    ScrollContainer, 
    Warning 
} from "./styles";


type ProjectProps = {
    _id: string,
    title: string,
    description: string,
    technologies: string[],
    repository: string,
    website: string,
}


export function ListOfProjects({ href }: { href?: string }) {

    const [scrollX, setScrollX] = useState(0);
    const [projects, setProjects] = useState([] as ProjectProps[]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllProjects = useCallback( async () => {
        setIsLoading(true)

        const res = await projectApi.getAll() as { data: ProjectProps[] };

        setIsLoading(false)

        setProjects(res.data.slice(0).reverse());
    }, [])

    useEffect(() => {
        getAllProjects()
    }, [getAllProjects])


    function handleHorizontalList(order: 'left' | 'right') {

        if(order === 'left' && scrollX === 0) {
            return;
        }

        if(order === 'right' && scrollX < (((projects.length - 2) * 200) - (projects.length - 40)) * -1) {
            return;
        }
        

        switch(order) {
            
            case 'right':
                setScrollX(prev => prev - (250 + 40));
                break;
                
                case 'left':
                setScrollX(prev => prev + (250 + 40));
                break;
            
            default:
                break;
        
        }
    }


    return (
        <>
            {isLoading ?(
                <Loading />
            ):(
                projects.length > 0 ? ( 
                
                    <Container>
                        <HorizontalListContainer>
                            {projects.length > 3 && <Arrow 
                            left="0"
                            onClick={() => handleHorizontalList('left')} />}
        
                            {projects.length > 3 && <Arrow 
                            right="0" 
                            onClick={() => handleHorizontalList('right')} />}
        
                            <ScrollContainer 
                                width={projects.length}
                                scrollX={scrollX}>
                                {projects.map((item) => (
                                    <ProjectContainer key={item._id}>
                                        <ProjectHeader>
                                            <Bullet color="#FF5A5A" />
                                            <Bullet color="#FFC75A" />
                                            <Bullet color="#10C600" />
                                        </ProjectHeader>
        
                                        <ProjectMainContainer>
                                            <ProjectTitle>{item.title}</ProjectTitle>
        
                                            <Link href={href?`${href}/${item._id}`:item._id}>
                                                <LinkToProject>Acessar</LinkToProject>
                                            </Link>
                                        </ProjectMainContainer>
                                    </ProjectContainer>
                                ))}
                            </ScrollContainer>
                        </HorizontalListContainer>
                    </Container>) : (
                        <Warning>Nenhum projeto foi encontrado</Warning>
                    )
            )}
        </>
    )
}