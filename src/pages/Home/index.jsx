import { Header } from "../../components/Header"; 
import { Button } from "../../components/Button";
import { MovieCard } from "../../components/MovieCard";

import { FiPlus } from 'react-icons/fi';

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>         
          <div className="title">
            <h2>Meus filmes</h2>
            <Button 
              title="Adicionar filme" 
              icon={FiPlus}
            />
          </div>

          <div className="cards">
            <div className="card">
              <MovieCard title={"Velozes e Furiosos"} rating={4} tagvalue={["Corrida", "Ação"]} />
            </div>

            <div className="card">
              <MovieCard title={"algo"} rating={3} tagvalue={["Corrida", "Ação"]} />
            </div>

            <div className="card">
              <MovieCard title={"tiro"} rating={1} tagvalue={["Ficção", "Terror"]} />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}