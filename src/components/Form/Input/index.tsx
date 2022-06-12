import { Container } from "./styles";


interface InputProps {
    type: string;
    id: string;
    register: any;
    placeholder?: string;
}

interface InputWithRefProps {
    type: string;
    id: string;
    placeholder?: string;
    inputRef: any;
}




export function Input({ type, id, register, placeholder }: InputProps) {
    return (
        <Container 
            type={type} 
            id={id} 
            {...register} 
            placeholder={placeholder} />
    )
}



export function InputWithRef({ type, id, placeholder, inputRef }: InputWithRefProps) {
    return (
        <Container 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            ref={inputRef} />
    )
}