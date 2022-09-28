import { useContext, useState } from "react";
// Como um wrapper da nossa aplicação, carrega junto com todas as páginas
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { ItemsProvider } from "../contexts/ItemsContext";
import { HeaderComponent } from "../components/Header";
import { SideMenuComponent } from "../components/SideMenu";
// é fora só para executar 1 vez e não ficar rederizando essa função novamente
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <ItemsProvider>
      <Container>
        <HeaderComponent setShowSideMenu={setShowSideMenu} />
        <Component {...pageProps} />
        {showSideMenu && (
          <SideMenuComponent setShowSideMenu={setShowSideMenu} />
        )}
      </Container>
    </ItemsProvider>
  );
}
