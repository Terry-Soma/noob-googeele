import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

function search() {
  return (
      <div>
          <Head>
              <title>Search Result</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />

          
      </div>
  )
}

export default search;

// export async function getServerSideProps(context) {
//     const useDummyData =false;
//     const data = await fetch(`https://www.googleapis.com/customersearch/v1?key=ksdj23ljkkfsjhdkjdvhjk3jh3jk4hjkh&cd=&9867c733a42c0c643&q=${context.query.term}`).then(response => response.json());

//     return {

//          props:{
//              results:data
//          }
//     }

// }