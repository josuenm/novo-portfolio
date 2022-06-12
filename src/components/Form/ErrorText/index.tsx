import { Container } from "./styles";






export function ErrorText({ title }: { title: string | undefined }) {
    return (
        <Container>{title}</Container>
    )
}