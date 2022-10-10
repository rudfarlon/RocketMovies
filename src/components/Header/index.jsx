import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { api } from "../../Services/api";
import { useAuth } from '../../hooks/auth';
import { Input } from '../Input'; 
import { Container, Search, Profile, Logout } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header({ handleTitle, handleSearch }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar] = useState(avatarUrl)

  return (
    <Container>
      <div className='header-wrapper'>
        <div>
          <h1>RocketMovies</h1>
        </div>

        <Search>
          <Input 
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={e => handleTitle(e.target.value)}
          >
          <button onClick={handleSearch}>
            <FiSearch />
          </button>

          </Input>
        </Search>

        <Profile>
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>

            <Logout onClick={signOut}>
              <Link to="/">Sair</Link>
            </Logout>
          </div>

          <Link to="/profile">
            <img 
              src={avatar}
              alt="Foto do usuário"
            /> 
          </Link> 
        </Profile>
      </div>
    </Container>
  );
}