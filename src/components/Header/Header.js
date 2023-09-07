import { StyledLink, Container } from './Header.styled';

const Header = () => {
  return (
    <nav>
      <Container>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Container>
    </nav>
  );
};

export default Header;
