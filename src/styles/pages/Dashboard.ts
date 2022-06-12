import styled from "styled-components";




export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 3rem;
`


export const Header = styled.header`
    width: 100%;
    padding: 5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};

    display: flex;
    justify-content: space-between;
`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`


export const PictureContainer = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid ${({ theme }) => theme.colors.gray50};
    
    .picture {
        border-radius: 50%;
    }
`

export const ExitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`



export const Greetings = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #fff;
`


export const MainContainer = styled.main`
    width: 100%;
    padding: 2rem 3rem 8rem 3rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: 991.98px) {
     padding: 2rem 0;   
    }
`


export const ExitButtonContainer = styled.button`
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    border-radius: 3rem;
    padding: .5rem 2rem;
    background: transparent;

    transition: ease .4s all;
    &:hover {
        background: #151515;
    }
`



export const ExitButtonTitle = styled.span`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #fff;
`


interface TitleProps {
    marginBottom?: string;
}


export const Title = styled.h3<TitleProps>`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin-bottom: ${({ marginBottom }) => marginBottom?marginBottom:'3rem'};
`

export const SetContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


export const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`