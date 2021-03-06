import styled from "styled-components";




export const Container = styled.section`
    span {
        color: ${({ theme }) => theme.colors.blue40};
    }
`


export const DescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 10%;

    @media (max-width: 991.98px) {
        display: flex;
        flex-direction: column;
    }
`


export const DescriptionText = styled.p`
    color: ${({ theme }) => theme.colors.gray60};
    font-size: .9rem;
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    @media (max-width: 991.98px) {
        font-size: 1.1rem;
    }
`



export const MainDescriptionContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 10%;

    @media (max-width: 991.98px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const ModalSet = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10rem;

    @media (max-width: 991.98px) {
        padding-bottom: 20rem;
    }
`


export const InfoSet = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 991.98px) {
        text-align: center;
    }
`

export const InfoTitle = styled.h3`
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 1.3rem;
    
    @media (max-width: 991.98px) {
        font-size: 1.9rem;
    }
`


export const InfoDescription = styled.p`
    font-size: .9rem;
    color: ${({ theme }) => theme.colors.gray60};
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    @media (max-width: 991.98px) {
        font-size: 1.1rem;
    }
`




export const TechnologiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 5rem 0;
    
    @media (max-width: 991.98px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Technology = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 2px;

    background-color: #151515;
    border-radius: 3rem;
    padding: .5rem 1rem;
    text-align: center;
    cursor: pointer;
    
    opacity: .5;
    transition: ease .4s opacity;
    &:hover {
        opacity: 1;
    }

    @media (max-width: 991.98px) {
        width: 60%;
    }
    
    .title {
        font-size: .9rem;
        color: #fff;
    }
    
    .experience {
        font-size: .8rem;
        color: ${({ theme }) => theme.colors.blue40};
    }
`