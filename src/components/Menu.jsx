import { NavLink } from 'react-router-dom';

export default function Menu() {
  const baseStyle = 'hover:text-primary transition-colors';

  return (
    <>
      <nav className="fixed top-0 left-0 p-1 flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? baseStyle + ' line-through' : baseStyle
          }
        >
          index
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? baseStyle + ' line-through' : baseStyle
          }
        >
          about
        </NavLink>
      </nav>
    </>
  );
}
