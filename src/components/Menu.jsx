import { NavLink } from 'react-router-dom';

export default function Menu() {
  const baseStyle = 'hover:text-primary transition-colors';

  return (
    <>
      <nav className="fixed top-0 left-0 flex gap-2 md:gap-4 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] uppercase text-xl md:text-2xl pr-[2px] leading-none w-full mix-blend-difference ">
        <h1 className="mr-auto">Sofja</h1>
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
