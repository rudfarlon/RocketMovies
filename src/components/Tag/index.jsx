import { Container } from "./styles";

export function Tag({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  );
}