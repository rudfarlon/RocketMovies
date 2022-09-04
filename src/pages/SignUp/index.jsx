import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h2>RocketMovies</h2>

        <p>Aplicação para acompanhar tudo que assistir. </p>

        <h1>Crie sua conta</h1>

        <Input placeholder='Nome' icon={FiUser}/>

        <Input placeholder='E-mail' icon={FiMail}/>

        <Input placeholder='Senha' icon={FiLock}/>

        <Button title='Cadastrar' />

        <Link to='/'><FiArrowLeft />Voltar para o login</Link>
      </Form>

    </Container>
  );
}