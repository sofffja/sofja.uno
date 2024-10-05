import { NavLink } from 'react-router-dom';

export default function Menu() {
  const baseStyle =
    'transition-colors invert pt-1 text-[#000] mix-blend-difference';

  return (
    <>
      <header className="fixed top-0 left-0 pt-2 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.5)] uppercase leading-none w-full mix-blend-difference z-10">
        <nav className="flex justify-end gap-2 bg-[#ffffff99] px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? baseStyle + ' line-through'
                : baseStyle + ' hover:invert-0 hover:mix-blend-normal'
            }
          >
            index
          </NavLink>
          <NavLink
            to="/info"
            className={({ isActive }) =>
              isActive
                ? baseStyle + ' line-through'
                : baseStyle + ' hover:invert-0 hover:mix-blend-normal'
            }
          >
            info
          </NavLink>
        </nav>
      </header>
    </>
  );
}
