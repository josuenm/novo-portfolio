import { useContext } from "react";
import { ContactContext, ContactContextType } from "src/contexts/contact";
import { Background, Container, Form, Input, Label, ModalContainer, Submit, Title } from "./styles";






export function Contact() {

    const { toggle } = useContext(ContactContext) as ContactContextType;

    const handleClose = () => toggle(false);

    return (
        <Container>
            <Background onClick={handleClose} />

            <ModalContainer>
                <Title>Contato será disponível em breve</Title>
            </ModalContainer>
        </Container>
    )
}