import { NavLink } from 'react-router-dom';

export default function Menu() {
  const baseStyle = 'hover:text-primary transition-colors';

  return (
    <>
      <header className="fixed top-0 left-0 flex justify-between drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] uppercase px-1 leading-none w-full mix-blend-difference ">
        <h1 className="">Sofja</h1>
        <nav className="flex gap-2 md:gap-4 pt-1">
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
      </header>
    </>
  );
}
