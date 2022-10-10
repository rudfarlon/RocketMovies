import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { MovieCard } from "../../components/MovieCard";
import { Header } from "../../components/Header"; 
import { Button } from "../../components/Button";
import { api } from '../../Services/api';

import { Container } from "./styles";

function orderByTitle(a, b) {
  const titleA = a.title.toLowerCase()
  const titleB = b.title.toLowerCase()

  if (titleA < titleB) return -1
  if (titleA > titleB) return 1

  return 0;
}

export function Home() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState([]);

  const navigate = useNavigate();

  function handleTitle(title) {
    setSearch(title);
  }

  async function handleSearch() {
    const response = await api.get(`movie_notes?title=${search}`);
    
    if (search.length === 0) {
      return alert("Digite um título");
    } else {
      setSearch(response.data.title);
    }
  }

  function handleNew() {
    navigate("/new")
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchTitle() {
      const response = await api.get(`/movie_notes?title=${search&&search}`);
      setTitle(response.data);
    }
    fetchTitle();
  }, [search])

  return (
    <Container>
      <Header
        handleTitle={handleTitle}
        handleSearch={handleSearch}
      />
      <main>
        <div>         
          <div className="title">
            <h2>Meus filmes</h2>
            <Button 
              title="Adicionar filme" 
              icon={FiPlus}
              onClick={() => handleNew()}
            />
          </div>

          <div className="cards">
            {
              title.sort(orderByTitle).map(note => (
                <li key={note.id} className="card">
                  <MovieCard 
                    title={note.title}
                    rating={note.rating}
                    description={note.description}
                    tagvalue={[note.tags]}
                    onClick={() => handlePreview(note.id)}
                  />
                </li>
              ))
            }
          </div>
        </div>
      </main>
    </Container>
  );
}