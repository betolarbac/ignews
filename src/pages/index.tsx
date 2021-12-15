import { GetStaticProps } from 'next'
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
    product: {
      priceId: string;
      amount: number;
    }
}


export default function Home({ product }: HomeProps) {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 <span>Hey, welcome</span></span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

//chamada Api SSR
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K6lUXFUSePHxEiTqUM4SD3j')

  //formatação de preço
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    }, //quanto tempo em segundos preciso que essa pagina permaneça sem ser revalidada
    revalidate: 60 * 60 * 24, //24h
  }
}
