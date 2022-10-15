import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ro">
      <Head>
        <meta name="description" content="Echipamente pentru caini" />
        <meta name="keywords" content="Caini, Lesa, Silviu" />
        <meta name="author" content="Devisevici Marius" />

        <title>Pawtrain</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/cropped-fav_icon-01.png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
