import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from "../components/banner";
import Cart from "../components/cart"

import coffeeStoresData from "../data/005 coffee-stores.json";


export async function getStaticProps (context){
  return{
    props:{
      coffeeStores : coffeeStoresData,
    },
  };
}
 
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main>
        <Banner/>
        {props.coffeeStores.length>0 &&(
        <>
        <h1 className="text-5xl font-bold px-44">COFFEE SHOP</h1>
        <div className="flex py-8">
      {props.coffeeStores.map(coffeeStore =>{
        return (
        <Cart
        key = {coffeeStore.id}
          name = {coffeeStore.name}
          imgUrl = {coffeeStore.imgUrl}
          href = {`/coffe-store/${coffeeStore.id}`}
              
        />
        )
      })}
      </div>
      </>)}
      </main>

     
    </div>
  )
}
