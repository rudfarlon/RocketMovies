import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

import { Container } from "./styles";

export function Stars({ rating }) {
  return (
    <Container>
      <span> {rating >= 1 ? <ImStarFull /> : rating > 0 ? <ImStarHalf /> : <ImStarEmpty />} </span>
      <span> {rating >= 2 ? <ImStarFull /> : rating > 1 ? <ImStarHalf /> : <ImStarEmpty />} </span>
      <span> {rating >= 3 ? <ImStarFull /> : rating > 2 ? <ImStarHalf /> : <ImStarEmpty />} </span>
      <span> {rating >= 4 ? <ImStarFull /> : rating > 3 ? <ImStarHalf /> : <ImStarEmpty />} </span>
      <span> {rating >= 5 ? <ImStarFull /> : rating > 4 ? <ImStarHalf /> : <ImStarEmpty />} </span>
    </Container>
  );
}