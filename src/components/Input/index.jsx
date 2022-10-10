import { Container } from './styles';

export function Input({ icon: Icon, children, handleRating, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input onChange={handleRating} {...rest} />
    </Container>
  );
}