import Head from 'next/head'
import { Container, Form, Title } from 'src/styles/pages/Login'
import { Set } from 'src/components/Form/Set';
import { Input } from 'src/components/Form/Input';




const Login = () => {

    return (
        <>
            <Head>
                <title>Login | Portfolio</title>
            </Head>

            <Container>
                <Form>
                    <Title>Login</Title>

                    <Set>
                        <Input type="text" />
                    </Set>
                </Form>
            </Container>
        </>
    )
}






export default Login;