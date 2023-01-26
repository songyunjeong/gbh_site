import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './shop.css';
import homes from './homeData';
import Details from './Details';

export default function Home() {
  const [products] = useState(homes)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <section className="page_shop">
            {
              homes.map((product, i) => {
                return (
                  <Link to={`detail/${i}`}>
                    <img src={product.image} alt="" />
                    <div className='product_txt'>
                      <p className='product_name'>{product.item}</p>
                      <p className='product_price'>{product.price}원</p>
                    </div>
                  </Link>
                )
              })
            }
          </section>
        } />
        <Route path='detail/:id' element={<Details products={products} />} />
      </Routes>
    </>
  )
}