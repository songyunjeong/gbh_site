import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './shop.css';
import apparels from './apparelData';
import Details from './Details';

export default function Apparel() {
  const [products] = useState(apparels)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <section className="page_shop">
            {
              apparels.map((product, i) => {
                return (
                  <Link to={`detail/${i}`}>
                    <img src={product.image} alt="" />
                    <div className='product_txt'>
                      <p className='product_name'>{product.item}</p>
                      <p className='product_name'>{product.color}</p>
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