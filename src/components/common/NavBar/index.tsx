import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Container maxWidth="xl" sx={{ minHeight: '50px' }}>
      <nav>
        <ul className="flex gap-2 flex-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/exams">Exams</NavLink>
          </li>
          <li>
            <NavLink to="/vocabularies">Vocabularies</NavLink>
          </li>
          <li>
            <NavLink to="/grammar">Grammar</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default NavBar;
