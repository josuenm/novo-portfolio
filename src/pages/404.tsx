import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"



const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StatusCode = styled.h1`
    font-size: 3rem;
    color: #fff;
`

const Text = styled.h1`
    font-size: 2.5rem;
    color: #fff;
`





const _404: NextPage = () => {

    return (
        <>
            <Head>
                <title>404 | Portfolio</title>
            </Head>

            <Container>
                <StatusCode>404</StatusCode>
                <Text>Página não encontrada</Text>
            </Container>
        </>
    )
}



export default _404