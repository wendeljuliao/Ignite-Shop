import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      // utiliza a mesma base de endereço do front-end
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      // Redirecionar para rota externa
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

// Quais são as paginas/parametros que queremos gerar uma versão estática
export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos/acessados

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora
  };
};
