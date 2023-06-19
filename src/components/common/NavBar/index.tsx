import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
<<<<<<< HEAD
    <Container maxWidth="xl" sx={{ minHeight: '50px' }}>
=======
    <div className="container">
>>>>>>> a263ed41eeae4cfb0dd1fb5b1e064e76215f7578
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
    </div>
  );
}

export default NavBar;
