import { Header } from "../../components/Header";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from "./styles";

export function Preview() {
  return (
    <Container>
      <Header />

      <main>
        <div>
          <div className="content">
            <Link to="/"><FiArrowLeft />Voltar</Link>

            <div className="title">
              <h2>Nome filme</h2>
              <Stars rating={4} />
            </div>

            <div className="posted">
              <img src="https://github.com/rudfarlon.png" alt="Foto do usuário" />
              <p>Por Rud Farlon</p>
              <span className="date"><FiClock /> 
              23/05/22 às 08:00
              </span>
            </div>

            <div className="tags">
              <Tag value="Ação" /> {/*tem que pegar a informação da pag Home*/}
            </div>
          </div>

          <div className="sinopse">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, dolores fuga laborum earum ad veritatis illum maxime ipsa officiis harum voluptatum sit. Laborum labore sunt, excepturi et delectus quaerat animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, exercitationem ducimus dignissimos officia suscipit quas illo vitae itaque odit! Cupiditate atque quod aut accusantium optio odio nihil debitis magnam corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sint alias, aliquid velit laboriosam quidem odio placeat molestiae nostrum obcaecati! Eveniet aut, pariatur voluptatem accusamus maxime ducimus adipisci? Veniam, dolorem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias itaque ea quam placeat sequi. Tenetur eos numquam reiciendis hic laboriosam modi porro dolor ut sit ipsum facere magni, aperiam quos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae esse, consequuntur totam eos quaerat perferendis ea perspiciatis sequi, nam eligendi magni, natus quisquam vero maxime corporis. Sequi, vero nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nobis aliquam repellat, autem provident minus quibusdam dicta sint fugiat dignissimos optio molestiae deleniti unde qui. Aut ut vel nesciunt quibusdam!</p>
          </div>
        </div>
      </main>

    </Container>
  );
}