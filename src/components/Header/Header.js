import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}
