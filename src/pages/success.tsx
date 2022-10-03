import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesContent, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    price: {
      product: {
        name: string;
        images: string[];
      }
    }
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  
  const quantityBuy = products.length;
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        {/* Pedindo para os crawlers não indexarem essa página */}
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>

        <ImagesContent>

          {products.map(product => {
            return (
              <ImageContainer key={product.id}>
                <Image src={product.price.product.images[0]} width={130} height={130} alt="" />
              </ImageContainer>
            )
          })}
        </ImagesContent>

          <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {quantityBuy} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data;

  return {
    props: {
      customerName,
      products: products
    },
  };
};
