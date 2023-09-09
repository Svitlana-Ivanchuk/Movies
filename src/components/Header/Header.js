import { StyledLink, Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Container>
  );
};

export default Header;
