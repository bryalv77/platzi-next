import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('api/avo')
      .then(res => res.json())
      .then(({data}) => {
        console.log('data: ', data);
        setProductList(data)
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>

      <div>
        {
          productList.map((product, index) => {
            return (
              <div key={index}>
                <h3>{product.name}</h3>
                <code>{product.id}</code>
                <br />
                <img src={product.image} alt={product.name} />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default HomePage
