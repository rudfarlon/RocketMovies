import { Container, Search, Profile, Logout } from './styles';
import { Input } from '../Input'; 

import { Link } from 'react-router-dom';

export function Header() {
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
        />
        </Search>

        <Profile>
          <div>
            <Link to="/profile">
              <strong>Rud Farlon</strong>
            </Link>

            <Logout>
              <Link to="/">Sair</Link>
            </Logout>
          </div>

          <Link to="/profile">
            <img src="https://github.com/rudfarlon.png" alt="Foto do usuário"/> 
          </Link> 
        </Profile>
      </div>
    </Container>
  );
}