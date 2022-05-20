import styled from "styled-components";






export const Container = styled.div`
    position: absolute;
    width: 100%;
`



export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background-color: rgba(0,0,0,0.5);
`




export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    padding: 2rem 1.5rem;
    max-width: 350px;
    width: 100%;
    border-radius: 1rem;
    background-color: #252525;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`


export const Label = styled.label`
    color: #fff;
    margin-bottom: .5rem;
`

export const Input = styled.input`
    border-radius: .25rem;
    padding: .5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    background: #101010;
    margin-bottom: 2rem;
`



export const Submit = styled.input.attrs({
    type: "submit",
})`
    background-color: transparent;
    color: #fff;
    width: 100%;
    padding: .7rem 0;
    font-size: 1rem;
    border-radius: .25rem;
    border: 1px solid #fff;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    transition: ease .4s all;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`



export const Title = styled.h4`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: 2rem;
    text-align: center;
`