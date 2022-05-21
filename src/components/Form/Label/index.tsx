import { Container } from "./styles";



interface LabelProps {
    htmlFor: string;
    title: string;
}




export function Label({ htmlFor, title }: LabelProps) {
    return (
        <Container htmlFor={htmlFor}>{title}</Container>
    )
}