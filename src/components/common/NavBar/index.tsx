import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <div className="container h-[50px] flex flex-col justify-center">
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
