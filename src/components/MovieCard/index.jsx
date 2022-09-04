import { Stars } from '../Stars' 
import { Tag } from '../Tag' 

import { Container } from "./styles";

export function MovieCard({ title, rating, tagvalue, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Stars rating={rating} />
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, esse nam doloribus laboriosam enim maxime consequuntur? Ex at molestias natus repellat dolorum, fuga doloremque, eum mollitia debitis optio illum! Dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem non ipsa inventore! Distinctio, adipisci voluptates.</p>

      <div className="tags">
        {tagvalue.map((tag, index) => (<Tag key={index} value={tag}/>))}
      </div>
    </Container>
  );
}