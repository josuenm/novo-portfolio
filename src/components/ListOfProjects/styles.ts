import styled from "styled-components";



export const Container = styled.div`
    position: relative;
    width: calc((3 * 250px) + (2 * 40px) + (2 * 40px));
    margin: 0 auto;

    display: flex;
    justify-content: center;

    @media (max-width: 991.98px) {
        width: 100%;
    }
`



export const HorizontalListContainer = styled.div`
    width: calc((3 * 250px) + (2 * 40px));
    overflow: hidden;

    @media (max-width: 991.98px) {
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
    transition: ease .4s all;
    transform: translateX(${({ scrollX }) => scrollX}px);
`


export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #151515;
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
    color: #fff;
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


export const Warning = styled.p`
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: 1.5rem;
`



export const LinkToProject = styled.a`
    color: #fff;
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



export const Loading = styled.div`
    width: 50px;
    height: 50px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    border-radius: 50%;
    margin: 0 auto;

    animation: loading 1s linear infinite;

    @keyframes loading {
        from {
            transform: rotate(0deg);
        } to {
            transform: rotate(360deg);
        }
    }
`