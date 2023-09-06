import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
};

export default Header;
