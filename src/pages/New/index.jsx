import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { api } from '../../Services/api';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { TagInput } from '../../components/TagInput';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleRating(value) {
    setRating(value);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título do filme");
    }

    if (rating === "") {
      return alert("De uma nota para o filme");
    }

    if (description === "") {
      return alert("Adicione uma descrição ao filme");
    }

    if (tags.length === 0) {
      return alert("Adicione pelo menos uma tag.");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar.")
    }

    await api.post("/movie_notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Notas criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header /> 

      <main>
        <div className="main-wrapper">
          <div className="wrapper">
            <Link to="/"><FiArrowLeft />Voltar</Link>
            <h2>Novo Filme</h2>
          </div>
          
          <div className="col2">
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRating(e.target.value.replace(',', '.'))}
              handleRating={handleRating}
            />
          </div>
        
          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />
        
          <h3>Marcadores</h3>
            
          <div className="tags">
            {
              tags.map((tag, index) => (
                <TagInput 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <TagInput 
              isNew 
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className="button-wrapper">
            <Button 
              className="button-black" 
              title="Excluir filme"
            />

            <Button 
              className="button-save" 
              title="Salvar alterações"
              onClick={handleNewNote}  
            />
          </div>
        </div>  
      </main>
      
    </Container>
  )
}


