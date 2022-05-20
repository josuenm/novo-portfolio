import styled from "styled-components";





export const Container = styled.div`
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 10rem;

    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 991.98px) {
        display: flex;
        flex-direction: column;
        padding-inline: 0 1rem;
    }
`


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5rem;

    @media (max-width: 991.98px) {
        padding-left: 0;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.gray60};
    margin-top: 2rem;
`


export const TechnologiesTitle = styled.h3`
    font-size: 1.3rem;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-top: 2rem;
`

export const ListDescription = styled.ul`
    color: ${({ theme }) => theme.colors.gray60};
    margin-top: 2rem;
    margin-left: 1rem;
`


interface LinkToProps {
    outlined: boolean;
}

export const LinkTo = styled.button<LinkToProps>`
    color: ${({outlined}) => outlined?'#aaa':'#000'};
    border: ${({outlined}) => outlined?'1px solid #aaa':'1px solid'};
    background: ${({outlined}) => outlined?'transparent':'#fff'};
    width: 200px;
    border-radius: .25rem;
    padding: .8rem 0;
    text-align: center;
    
    transition: ease .4s all;
    &:hover {
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
    }

    @media (max-width: 575.98px) {
        width: 100%;
    }
`

export const ButtonSet = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    @media (max-width: 575.98px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`



export const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    border-radius: 1rem;
    padding: 1rem;

    @media (max-width: 991.98px) {
        height: 300px;
        margin: 0 auto;
        margin-bottom: 2rem;
    }
`




export const Screen = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: inherit;
    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SkeletonRow = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    justify-content: center;
    align-items: center;

    p {
        margin-top: 1rem;
        color: #000;
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        font-size: 1.2rem;
    }
`

interface SkeletonColumnProps {
    justify?: string;
    align?: string;
}

export const SkeletonColumn = styled.div<SkeletonColumnProps>`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
`


interface SkeletonElementProps {
    width: string;
    height: string;
}


export const SkeletonElement = styled.div<SkeletonElementProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 1rem;
    background-color: #aaa;
    
`