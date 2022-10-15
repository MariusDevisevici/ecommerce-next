import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
function Layout({ children }: { children: any }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (status: boolean) => {
    return setNavOpen(status);
  };
  return (
    <>
      <Head>
        <title>Pawtrain</title>
      </Head>
      <Header setNavOpen={toggleNav} navOpen={navOpen} />
      <main
        className={navOpen ? "ml-60 lg:ml-0 duration-500" : "duration-500 ml-0"}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
