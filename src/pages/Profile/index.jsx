import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Avatar, Form } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft />Voltar</Link>
      </header>

      <Avatar>
        <img 
          src="https://github.com/rudfarlon.png" 
          alt="Foto do usuário" 
        />

        <label htmlFor="avatar">
          <FiCamera />

          <input 
            id="avatar"
            type="file" 
          />
        </label>
      </Avatar>

      <Form>
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}