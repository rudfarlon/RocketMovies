import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { api } from "../../Services/api";
import { useAuth } from '../../hooks/auth';

import { Container } from "./styles";

function formatDateTime(datetime) {
  const [date, time] = datetime.split(" ")
  const [yyyy, mm, dd] = date.split("-")
  const dateFormated = `${dd}/${mm}/${yyyy}`
  const [hour, minutes, seconds] = time.split(":")
  const hourFormated = `${hour}:${minutes}`
  
  return {dateFormated, hourFormated}
}

export function Preview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const avartarUrl = `${api.defaults.baseURL}/files/${user.avatar}`
  const [avatar] = useState(avartarUrl);

  const params = useParams();

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }
    fetchNotes();
  }, [])

  return (
    <Container>
      <Header />
    { 
      data &&
      <main>
        <div>
          <div className="content">
            <Link to="/"><FiArrowLeft />Voltar</Link>

            <div className="title">
              <h2>{data.title}</h2>
              <Stars rating={data.rating} />
            </div>

            <div className="posted">
              <img src={avatar} alt="Foto do usuário" />

              <p>Por {data.user.name}</p>
              
              <span className="date"><FiClock /> 
                {formatDateTime(data.created_at).dateFormated}
                <span>às</span>
                {formatDateTime(data.created_at).hourFormated}
              </span>
            </div>

              <div className="tags">
                {
                  data.tags.map(tag => (
                    <Tag key={tag.id}
                      value={tag.name}
                    /> 
                  ))

                }
              </div>
           
            </div>

          <div className="sinopse">
            <p>{data.description}</p>
          </div>
        </div>
      </main>
    }
    </Container>
  );
}