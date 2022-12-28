import { Tab } from '@headlessui/react'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Landing from '../components/Landing'
import { fetchCategories } from '../utils/fetchCategories'

  interface Props {
    categories: Category []
  }

const Home = ({ categories}: Props) => {
  console.log(categories);
  
  return (
    <div className='relative'>
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className='relative h-[200vh] bg-[#e7ecee]'> 
        <Landing />
      </main>
      
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#181818]'>
        <div className='py-16 space-y-10'>
          <h1 className='text-4xl font-medium tracking-wide text-center text-white md:text-5xl'>
          New Promos
          </h1>   

  )
}

export default Home


//Backend Code

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const categories = await fetchCategories()

//   return {
//     props: {
//       categories,
//     },
//   };
// }

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const categories = await fetchCategories();
//   // const products = await fetchProducts();
//   // const session = await getSession(context);

//   return {
//     props: {
//       categories,
//       // products,
//       // session,
//     },
//   };
// };