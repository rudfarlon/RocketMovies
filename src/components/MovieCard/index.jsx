import { Tag } from '../Tag';
import { Stars } from '../Stars'; 

import { Container } from "./styles";

export function MovieCard({ title, rating, description, tagvalue, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Stars rating={rating} />
      
      <p>{ description }</p>

      <div className="tags">
        {tagvalue[0].map(note => (<Tag key={note.id} value={note.name}/>))}
      </div>
    </Container>
  );
}