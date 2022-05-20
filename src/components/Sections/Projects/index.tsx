import Link from "next/link";
import { useState } from "react";
import { Checkpoint } from "src/components/Checkpoint";
import { SafeArea } from "src/components/SafeArea";
import { SectionTitle } from "src/components/SectionTitle";
import projects from "src/utils/projects";
import { 
    Arrow, 
    Bullet, 
    Container, 
    Description, 
    HorizontalListContainer, 
    LinkToProject, 
    ProjectContainer, 
    ProjectHeader, 
    ProjectMainContainer, 
    ProjectTitle, 
    ScrollContainer 
} from "./styles";






export function Projects() {
    const [scrollX, setScrollX] = useState(40);
  

    function handleHorizontalList(order: 'left' | 'right') {

        if(order === 'left' && scrollX === 40) {
            return;
        }
        
        
        if(order === 'right' && scrollX === (((projects.length - 3) * 290 - 40) * -1)) {
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
        <SafeArea>
            <Container id="projects">
                <Checkpoint 
                    phrase="Quem sabe faz ao vivo"
                    chapter={3} 
                    title="Projetos" />

                <SectionTitle title="Alguns dos meus projetos" />
                <Description>
                    Aqui tem alguns dos meus projetos, clique em qual você quer saber mais e veja o <span>repositório</span> e <span>página</span> ou aplicativo se estiver disponível.
                </Description>

                <HorizontalListContainer>
                    <Arrow 
                    left="0"
                    onClick={() => handleHorizontalList('left')} />)

                    <Arrow 
                    right="0" 
                    onClick={() => handleHorizontalList('right')} />)

                    <ScrollContainer 
                        width={projects.length}
                        scrollX={scrollX}>
                        {projects.map((item) => (
                            <ProjectContainer key={item.id}>
                                <ProjectHeader>
                                    <Bullet color="#FF5A5A" />
                                    <Bullet color="#FFC75A" />
                                    <Bullet color="#10C600" />
                                </ProjectHeader>

                                <ProjectMainContainer>
                                    <ProjectTitle>{item.name}</ProjectTitle>

                                    <Link href={item.name.replace(/\s/g, '')}>
                                        <LinkToProject>Acessar</LinkToProject>
                                    </Link>
                                </ProjectMainContainer>
                            </ProjectContainer>
                        ))}
                    </ScrollContainer>
                </HorizontalListContainer>
            </Container>
        </SafeArea>
    )
}