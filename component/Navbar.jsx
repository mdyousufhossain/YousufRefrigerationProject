import { useState } from "react";
import { menu } from "./constant";
import ThemeIcon from "./darkmodeUi";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="z-10">
        <div className="hidden flex items-center md:block">
          <ul className="flex items-center">
            { menu && menu.map((m) => (
              <li key={m.id}>
                <a className="navbarMentu dark:text-Title_Dark" to={m.link}>
                  {m.titile}
                </a>
              </li>
            ))}
            <li> <ThemeIcon /> </li>
          </ul>
        </div>
        {/* there will be animation delay and humberguer mennu maybe a bit animation  */}
  
        <div className="text-right md:hidden">
  
          <button
            type="button"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-secondary  dark:border-primary hover:text-white hover:border-slate-500 mx-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </div>
          </button>
  
          {isOpen && (
          <ul>
            { menu && menu.map((m) => (
              <li
                className="navbarMentu"
                key={m.id}
                to={m.link}
              >
                <a>
                  {m.titile}
                </a>
              </li>
            ))}
            <li><ThemeIcon /></li>
          </ul>
          )}
        </div>
      </nav>
    );
  }

export default NavBar