import styled from "styled-components"




export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`


export const Form = styled.form`
    max-width: 500px;
    min-width: 350px;
    background-color: #373737;
    padding: 2rem 3rem;
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`



export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
`