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
    width: 100%;
    background-color: #373737;
    padding: 1rem;
    border-radius: 0.5rem;
`



export const Title = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    text-align: center;
`