import { Container } from "./styles";



interface SetProps {
    children: React.ReactNode | React.ReactNode[];
}


export function Set({ children }: SetProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}