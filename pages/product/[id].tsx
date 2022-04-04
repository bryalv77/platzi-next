import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>({ id: '', name: '', image: '', sku: '', price: 0, attributes: { description: '', shape: '', hardiness: '', taste: ''} });  
  const { query } = useRouter();
  const {id} = query; 
  useEffect(() => {
    fetch(`/api/avo/${id}`)
    .then(res => res.json())
    .then(({data}) => {
      console.log('data: ', data);
      if (data) {
        setProduct(data);
      }
    });  
  }, [])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      <div>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} />
        <p>{product.sku}</p>
        <p>{product.price}</p>
        <p>{JSON.stringify(product.attributes)}</p>
      </div>
    </section>
  )
}

export default ProductPage
