import { useState } from "react";
import Header from "./Header";
function Layout({ children }: { children: any }) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = (status: boolean) => {
    return setNavOpen(status);
  };
  return (
    <>
      <Header setNavOpen={toggleNav} navOpen={navOpen} />
      <main
        className={navOpen ? "ml-60 lg:ml-0 duration-500" : "duration-500 ml-0"}
      >
        {children}
        <footer className="container flex flex-col justify-center py-5 m-auto overflow-hidden text-xs text-center border-t border-gray-400 whitespace-nowrap ">
          <div className="flex gap-2 m-auto">
            <a href="">Termeni si conditii</a>
            <a href="">Politica de confidentialitate</a>
          </div>
          <div>
            <p>Copyright &copy; 2022 PawTrain. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Layout;
