import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Trazer o css pronto no lado do servidor */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        {/* Indicar pro next em qual lugar da nossa aplicação vão os conteúdos das páginas que são carregadas sob demanda  */}
        <Main />
        {/* Carregar os scripts javascript da página */}
        <NextScript />
      </body>
    </Html>
  );
}
