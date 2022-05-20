import styled from "styled-components";





export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Description = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray60};
    max-width: 800px;
    margin-bottom: 5rem;

    span {
        color: #00FF19;
    }

    @media (max-width: 991.98px) {
        width: 100%;
    }
`





export const HorizontalListContainer = styled.div`
    position: relative;
    width: calc(3 * 250px + 2 * 40px + 2 * 40px);
    display: flex;
    justify-content: flex-start;
    overflow: hidden;

    @media (max-width: 991.98px) {
        width: 100%;
        overflow-x: scroll;
    }
`


interface ScrollContainerProps {
    width: number;
    scrollX: number;
}


export const ScrollContainer = styled.div<ScrollContainerProps>`
    width: ${({ width }) => (width * 250) + (width * 40)}px;
    display: flex;
    gap: 40px;
    margin-left: -11px;
    transition: ease .4s all;
    transform: translateX(${({ scrollX }) => scrollX}px);
`


export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #252525;
    padding: 1rem;
    border-radius: 1rem;
    width: 250px;
    height: 180px;
`



export const ProjectHeader = styled.header`
    display: flex;
    gap: 10px;
`

export const ProjectMainContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0 .5rem 0;
`


export const ProjectTitle = styled.h3`
    text-align: center;
    color: white;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`



interface BulletProps {
    color: string;
}


export const Bullet = styled.div<BulletProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`


export const LinkToProject = styled.a`
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    text-align: center;
    width: fit-content;
    padding: .4rem 2.5rem;
    border-radius: .25rem;
    cursor: pointer;

    @media (min-width: 991.99px) {
        
        transition: ease .4s all;
        &:hover {
            background-color: #fff;
            color: #000;
        }
    }
`


interface ArrowContainerProps {
    left?: string;
    right?: string;
}


export const Arrow = styled.div<ArrowContainerProps>`
    position: absolute;
    top: 50%;
    z-index: 99;
    transform: translateY(-50%);
    left: ${({ left }) => left && left};
    right: ${({ right }) => right && right};

    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    cursor: pointer;
    
    @media (max-width: 991.98px) {
        display: none;
    }
    
    transition: ease .4s all;
    &:hover {
        border: 1px solid #fff;

        &::before, &::after {
            background-color: #fff;
        }
    }


    &::before {
        content: '';
        position: absolute;
        top: 55%;
        left: 35%;
        transform: ${({ left }) => left?'rotate(45deg)':'rotate(-45deg)'};
        width: 10px;
        height: 2px;
        border-radius: 3rem;
        background-color: ${({ theme }) => theme.colors.gray50};
    }

    &::after {
        content: '';
        position: absolute;
        top: 35%;
        left: 35%;
        transform: ${({ left }) => left?'rotate(-45deg)':'rotate(45deg)'};
        width: 10px;
        height: 2px;
        border-radius: 3rem;
        background-color: ${({ theme }) => theme.colors.gray50};
    }
`