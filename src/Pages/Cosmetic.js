import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import cosmetics from '../data/cosmeticData';
import Details from './Details';

export default function Cosmetic() {
  const [products] = useState(cosmetics);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <section className='page_shop'>
              {cosmetics.map((product, i) => {
                return (
                  <Link to={`detail/${i}`}>
                    <img src={product.image} alt='' />
                    <div className='product_txt'>
                      <p className='product_name'>{product.item}</p>
                      <p className='product_price'>
                        {product.price.toLocaleString()}원
                      </p>
                    </div>
                  </Link>
                );
              })}
            </section>
          }
        />
        <Route path='detail/:id' element={<Details products={products} />} />
      </Routes>
    </>
  );
}
