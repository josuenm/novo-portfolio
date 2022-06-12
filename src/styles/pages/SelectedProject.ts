import styled from "styled-components";




interface ButtonProps {
    outline: boolean;
}


export const Button = styled.button<ButtonProps>`
    margin-top: 3rem;
    width: 100%;
    ${({ outline, theme }) => outline?`
        color: ${theme.colors.gray60};
        border: 1px solid ${theme.colors.gray60};
    `:`
        color: #000;
        border: 0;
    `}
    background: ${({ outline }) => outline?'transparent':'#fff'};
    border-radius: .25rem;
    padding: .5rem 0;
    font-size: 1.2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};

    transition: ease .4s all;
    &:hover {
        ${({ outline }) => outline?`
            color: #000;
            background: #eee;
        `:`
            color: #fff;
            border: 1px solid #fff;
            background: transparent;
        `}
    }
`
