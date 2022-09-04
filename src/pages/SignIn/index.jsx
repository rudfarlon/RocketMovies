import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h2>RocketMovies</h2>

        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h1>Faça seu login</h1>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}