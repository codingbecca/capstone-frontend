import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className="nav">
        {/* <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li className="nav-link">
          <NavLink to="/">New Pattern</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/patterns" end>Patterns</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/newproject">New Project</NavLink>
        </li>
      </ul>
    </nav>
  );
}
