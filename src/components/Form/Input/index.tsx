import { Container } from "./styles";


interface InputProps {
    type: string;
}




export function Input({ type }: InputProps) {
    return (
        <Container type={type} />
    )
}