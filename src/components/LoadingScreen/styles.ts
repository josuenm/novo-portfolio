import styled from "styled-components";





export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    width: 100vw;
    height: 100vh;
    background-color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    border-top: 1px solid #fff;
    border-left: 1px solid #fff;

    animation: spinner-animation linear 1s infinite forwards;

    @keyframes spinner-animation {
        to {
            transform: rotate(390deg);
        }
    }
`