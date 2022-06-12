import { Container } from "./styles";




interface SubmitProps {
    title: string;
    margin?: string;
    isDisabled?: boolean;
}



export function Submit({ title, margin, isDisabled }: SubmitProps) {
    return (
        <Container value={title} margin={margin} isDisabled={isDisabled} />
    )
}