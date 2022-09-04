import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { TagInput } from '../../components/TagInput';

export function New() {

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
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
        
          <Textarea placeholder="Observações" />
        
          <h3>Marcadores</h3>
            
          <div className="tags">
            <TagInput value="ação"/>

            <TagInput isNew placeholder="Novo marcador"/>
          </div>

          <div className="button-wrapper">
            <Button className="button-black" title="Excluir filme"/>
            <Button className="button-save" title="Salvar alterações"/>
          </div>
        </div>  
      </main>
      
    </Container>
  )
}


