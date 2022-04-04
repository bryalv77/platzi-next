import React, { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch';

export const getServerSideProps = async () => {
  const url = 'https://platzi-next-lyart.vercel.app/'
  const response = await fetch(`${url}/api/avo`);
  const {data: productList} : TAPIAvoResponse = await response.json();
  return {
    props: {
      productList
    }
  }
};

const HomePage = ({productList}: {productList: TProduct[]}) => {

  useEffect(() => {
    
  }, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
