import * as yup from "yup"
import nookies from "nookies";
import Head from "next/head";
import projectApi from "src/services/project";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "src/components/Form/Label";
import { Submit } from "src/components/Form/Submit";
import { ErrorText } from "src/components/Form/ErrorText";
import { Input, InputWithRef } from "src/components/Form/Input";
import { Set } from "src/components/Form/Set";
import { SafeArea } from "src/components/SafeArea";
import { useRouter } from "next/router";
import { ProjectHeader } from "src/components/Header";
import { 
    Container, 
    Form, 
    TechList, 
    TechContainer, 
    TechName, 
    TechDelete, 
    AddContainer, 
    AddButton 
} from "src/styles/pages/CreateProject";
import { GetServerSideProps } from "next";



type Inputs = {
    title: string;
    description: string;
    repository: string;
    website: string;
    technologies: string[];
}


const schema = yup.object({
    title: yup.string().required("Digite um título"),
    description: yup.string().required("Digite uma descrição"),
    repository: yup.string(),
    website: yup.string(),
}).required()



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



const CreateProject = () => {

    const router = useRouter();

    const [techs, setTechs] = useState<string[] | []>([]);

    const [generalError, setGeneralError] = useState({
        error: false,
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        setIsLoading(true)
        
        const cookies = nookies.get(null, 'jnm.token')

        const formatedData = {
            ...data,
            technologies: techs
        }

        const res = await projectApi.create(cookies['jnm.token'], formatedData) as { status: number };

        switch(res.status) {

            case 200:
                setValue("title", "")
                setValue("description", "")
                setValue("repository", "")
                setValue("website", "")
                setTechs([])
                setIsLoading(false)
                break;
            
            case 500:
                setGeneralError(prev => ({
                    ...prev, 
                    error: true, 
                    message: "Erro no servidor, tente novamente"
                }))
                setIsLoading(false)
                break;
            
            case 401:
                nookies.destroy({}, 'jnm.token')
                router.push("/login")
                break;
            
            default:
                break;
        }
    };

    useEffect(() => {
        techInputRef.current.value = ""
    }, [techs])

    const techInputRef = useRef<any>(null);

    function removeTech(id: never) {
        if(techs.length === 1) {
            setTechs([]);
            return;
        }

        const index = techs.indexOf(id);
        
        if (index !== -1) {
            let newTechs = []

            for(let i = 0; i < techs.length; i++) {
                if(index !== i) {
                    newTechs.push(techs[i]);
                }
            }

            setTechs(newTechs);
        }
    }

    function addTech() {
        if(techInputRef.current?.value === "") return

        setTechs(prev => ([...prev, techInputRef.current?.value]));
    }

    return (
        <>
            <Head>
                <title>Criar Projeto | Portfolio</title>
            </Head>

            <SafeArea>
                <ProjectHeader href="/dashboard" />
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Set>
                            <Label htmlFor="title" title="Título" />
                            <Input 
                                type="text" 
                                id="title" 
                                placeholder="Digite o título do projeto" 
                                register={{...register("title")}} />
                            {!!errors.title && <ErrorText title={errors.title.message} />}
                        </Set>

                        <Set>
                            <Label htmlFor="description" title="Descrição" />
                            <Input 
                                type="text" 
                                id="description" 
                                placeholder="Digite a descrição do projeto" 
                                register={{...register("description")}} />
                                {!!errors.description && <ErrorText title={errors.description.message} />}
                        </Set>
                        
                        <Set>
                            <Label htmlFor="repository" title="Repositório" />
                            <Input 
                                type="text" 
                                id="repository" 
                                placeholder="Digite o link do repositório" 
                                register={{...register("repository")}} />
                        </Set>

                        <Set>
                            <Label htmlFor="website" title="Website" />
                            <Input 
                                type="text" 
                                id="website" 
                                placeholder="Digite o link do website" 
                                register={{...register("website")}} />
                        </Set>

                        <Set>
                            <Label htmlFor="techs" title="Tecnologias" />

                            {techs.length > 0 && <TechList>
                                {techs.map((item) => (
                                    <TechContainer key={item}>
                                        <TechName>{item}</TechName>
                                        <TechDelete onClick={() => removeTech(item as never)}>
                                            Deletar
                                        </TechDelete>
                                    </TechContainer>
                                ))}
                            </TechList>}
                            <AddContainer>
                                <InputWithRef 
                                    type="text" 
                                    id="techs" 
                                    placeholder="Digite a tecnologia"
                                    inputRef={techInputRef} />
                                <AddButton onClick={addTech}>Adicionar</AddButton>
                            </AddContainer>

                            {generalError.error && <ErrorText title={generalError.message} />}
                        </Set>

                        <Submit 
                            title="Salvar" 
                            margin="2rem 0 0 0" 
                            isDisabled={isLoading} />
                    </Form>
                </Container>
            </SafeArea>
        </>
    )

}


export default CreateProject;