import styled from "styled-components";




interface SubmitProps {
    margin?: string;
    isDisabled?: boolean;
}



export const Container = styled.input.attrs({
    type: "submit",
})<SubmitProps>`
    
    color: #fff;
    border: 0;
    background-color: ${({ theme }) => theme.colors.gray50};
    border-radius: .25rem;
    padding: .8rem 0;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    cursor: pointer;
    margin: ${({ margin }) => margin};
    
    transition: ease .4s all;
    &:hover {
        filter: brightness(1.2);
    }

    ${({ isDisabled }) => isDisabled && `
        pointer-events: none;
        opacity: .5;
    `}
`