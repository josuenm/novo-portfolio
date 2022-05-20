import styled from "styled-components";




export const Container = styled.div`
    width: 500px;
    height: 350px;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
    overflow: hidden;

    @media (max-width: 575.98px) {
        width: 350px;
        transform: scale(.9);
    }
    
    @media (min-width: 575.99px) and (max-width: 991.98px) {
        width: 400px;
    }

    &.modalInterface {
        position: absolute;
        top: 10rem;
        left: 3.5rem;
        z-index: 2;
        transform: scale(.9);
        

        @media (max-width: 575.98px) {
            left: 0;
            transform: scale(.95);
        }
    }
`



export const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray50};

    display: flex;
    padding: 0 20px;
    background-color: #000;
`



export const BulletSet = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Bullet = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;

    &.red {
        background: #FF5A5A;
    }

    &.yellow {
        background: #FFC75A;
    }

    &.green {
        background: #10C600;
    }
`


export const Window = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.gray50};
    border-right: 1px solid ${({ theme }) => theme.colors.gray50};
    border-left: 1px solid ${({ theme }) => theme.colors.gray50};

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    height: calc(100% - 10px);
    padding: 0 20px;
    margin-left: 50px;
    border-radius: .25rem .25rem 0 0;
`


export const WindowTitle = styled.span`
    color: white;
    font-size: .9rem;
`



export const CodeContainer = styled.div`
    display: flex;
    height: calc(100% - 50px);
`

export const NumberSet = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #202020;
    height: 100%;
    padding: 10px;
    margin-right: 5px;
`


export const Number = styled.span`
    color: ${({ theme }) => theme.colors.gray60};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
`



export const Code = styled.div`
    color: white;
    margin-left: 10px;
    margin-top: 10px;

    span {
        &.colored {
            color: ${({ theme }) => theme.colors.blue40};
        }
    }
`





export const SearchBar = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    background: #303030;
    padding: .3rem 2rem;
    margin-inline: auto;
    border-radius: .25rem;
    transform: translateX(-20px);
`



export const SearchBarText = styled.span`
    color: #fff;
`



export const PageContainer = styled.div`
    height: calc(100% - 50px);
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #000;
`


interface PageColumnProps {
    alignItems?: string;
}


export const PageColumn = styled.div<PageColumnProps>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.alignItems};
    flex-direction: column;
    gap: 1rem;
`

interface PageRowProps {
    justifyContent?: string;
}


export const PageRow = styled.div<PageRowProps>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    flex-direction: row;
    gap: 1rem;
`


interface SkeletonProps {
    width: string;
    height: string;
    bg?: string;
}

export const Skeleton = styled.div<SkeletonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 1rem;
    background: ${(props) => props.bg ? props.bg : '#252525'};
`

