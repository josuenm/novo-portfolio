import styled from 'styled-components';



export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin: 3rem 0 2rem 0;
    font-size: 2rem;
`


export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 767.98px) {
        width: 100%;
    }
`


export const AddContainer = styled.div`
    display: flex;
    gap: 1rem;
`


export const AddButton = styled.button.attrs({
    type: "button"
})`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #fff;
    background-color: #2daeeb;
    border: 0;
    padding: .2rem 1rem;
    border-radius: .25rem;

    transition: ease .4s all;
    &:hover {
        filter: brightness(1.2);
    }

    &:focus {
        box-shadow: 0 0 1px 3px rgba(45, 174, 235, .6);
    }
`


export const TechList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`


export const TechContainer = styled.div`
    &:nth-of-type(1) {
        border-top: 1px solid ${({ theme }) => theme.colors.gray50};
    }
    
    & + & {
        border-top: 1px solid ${({ theme }) => theme.colors.gray50};
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};
    }

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    padding: 1rem .5rem 1rem .5rem;
`

export const TechName = styled.div`
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: .9rem;
`

export const TechDelete = styled.button.attrs({
    type: "button"
})`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: #fff;
    background-color: #eb3434;
    border: 0;
    padding: .2rem 1rem;
    border-radius: .25rem;

    transition: ease .4s all;
    &:hover {
        filter: brightness(1.2);
    }

    &:focus {
        box-shadow: 0 0 1px 3px rgba(235, 52, 52, .6);
    }
`