import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faUser,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({
  setNavOpen,
  navOpen,
}: {
  setNavOpen: any;
  navOpen: boolean;
}) {
  const openSideNav = () => {
    setNavOpen(true);
  };
  const closeSideNav = () => {
    setNavOpen(false);
  };
  return (
    <>
      {/* //MOBILE NAV */}
      <nav
        className={
          navOpen
            ? "fixed top-0 left-0 z-10 w-60 lg:w-0 h-full pt-10 overflow-x-hidden duration-500 bg-white lg:hidden text-gri"
            : "fixed top-0 left-0 z-10 w-0 h-full pt-10 overflow-x-hidden duration-500 bg-white lg:hidden text-gri"
        }
      >
        <ul className="relative flex flex-col text-xs font-medium duration-300">
          <li className="absolute text-lg duration-300 cursor-pointer right-2 -top-8 hover:text-primary">
            <button onClick={closeSideNav}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
          <li className="duration-300 ">
            <form action="" className="flex items-center justify-center p-5 ">
              <div className="flex items-center border w-fit">
                <input
                  type="text"
                  className="w-full h-full text-lg border-none shadow-none placeholder:text-xs focus:shadow-none focus:ring-offset-0 focus:ring-0"
                  aria-label="search"
                  placeholder="Search in..."
                />
                <button
                  type="submit"
                  className="px-4 py-4 text-white bg-primary"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
          </li>
          <li className="flex items-center justify-between p-3 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary whitespace-nowrap">
            <a href="">PENTRU EI</a>
            <span className="text-xs">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </li>
          <li className="flex items-center justify-between p-3 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary whitespace-nowrap">
            <a href="">PENTRU VOI</a>
            <span className="text-xs">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </li>
          <li className="flex items-center justify-between p-3 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary whitespace-nowrap">
            <a href="">ACTIVITATI</a>
            <span className="text-xs">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </li>
          <li className="flex items-center justify-between p-3 duration-300 border-b border-gray-200 cursor-pointer hover:text-primary whitespace-nowrap">
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
      {/* ///HEADER */}
      <header
        className={
          navOpen
            ? "ml-60 lg:ml-0 duration-500 bg-brown w-full"
            : "duration-500 ml-0 bg-brown w-full"
        }
      >
        <div className="flex items-center justify-between p-4 m-auto lg:container">
          <div className="flex items-center">
            <div
              className="flex flex-col gap-1 mr-5 cursor-pointer lg:hidden"
              onClick={openSideNav}
            >
              <span className="bg-white w-hamburgerMenuBar h-hamburgerMenuBar d-block"></span>
              <span className="bg-white w-hamburgerMenuBar h-hamburgerMenuBar d-block"></span>
              <span className="bg-white w-hamburgerMenuBar h-hamburgerMenuBar d-block"></span>
            </div>
            <img src="/logo.svg" alt="Logo PawTrain" width={"175px"} />
            <ul className="hidden ml-10 text-sm font-medium text-white lg:flex">
              <li className="flex items-center gap-2 p-3 cursor-pointer hover:text-primary whitespace-nowrap">
                <a href="">PENTRU EI</a>
                <span className="text-xs">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li className="flex items-center gap-2 p-3 cursor-pointer hover:text-primary whitespace-nowrap">
                <a href="">PENTRU VOI</a>
                <span className="text-xs">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li className="flex items-center gap-2 p-3 cursor-pointer hover:text-primary whitespace-nowrap">
                <a href="">ACTIVITATI</a>
                <span className="text-xs">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </li>
              <li className="flex items-center gap-2 p-3 cursor-pointer hover:text-primary whitespace-nowrap">
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <nav>
            <ul className="flex gap-4 text-lg text-white duration-300 ">
              <li className="hidden cursor-pointer lg:block hover:text-primary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </li>
              <li className="duration-300 cursor-pointer hover:text-primary">
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li className="duration-300 cursor-pointer hover:text-primary">
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li className="duration-300 cursor-pointer hover:text-primary">
                <FontAwesomeIcon icon={faUser} />
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex p-2 text-white bg-darkBrown">
          <div className="flex items-center justify-between p-2 m-auto text-xs font-thin lg:container">
            <div className="">
              LIVRARE GRATIS LA COMENZI DE MINIMUM 299 LEI*
            </div>
            <div className="items-center hidden gap-5 lg:flex">
              <a className="duration-300 hover:text-primary" href="">
                DESPRE NOI
              </a>
              <a className="duration-300 hover:text-primary" href="">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                AUTENTIFICARE/INREGISTRARE
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
