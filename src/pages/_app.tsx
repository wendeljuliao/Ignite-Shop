// Como um wrapper da nossa aplicação, carrega junto com todas as páginas

import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

import Image from "next/future/image";

// é fora só para executar 1 vez e não ficar rederizando essa função novamente
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
