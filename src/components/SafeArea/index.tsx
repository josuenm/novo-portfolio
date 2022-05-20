import { Container } from "./styles";


interface SafeAreaProps {
    children: React.ReactNode;
}




export function SafeArea({ children }: SafeAreaProps) {
    return <Container>{children}</Container>
}