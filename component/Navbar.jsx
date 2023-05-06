import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { menu } from './constant';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (link) => {
    setIsLoading(true);
    await router.push(link);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1">
          <div className="h-full bg-blue-600 animate-pulse" style={{ width: '50%' }} />
        </div>
      )}
      <nav className="relative">
        <div className="hidden flex items-center md:block">
          <ul className="flex items-center">
            {menu
              && menu.map((m) => (
                <li key={m.id}>
                  <Link
                    className="navbarMentu dark:text-Title_Dark cursor-pointer"
                    href={m.link}
                    onClick={() => handleClick(m.link)}
                  >
                    {m.titile}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

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
              {menu
                && menu.map((m) => (
                  <li className="navbarMentu cursor-pointer" key={m.id}>

                    <Link href={m.link} onClick={() => handleClick(m.link)}>
                      {m.titile}
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
