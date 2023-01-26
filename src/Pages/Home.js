import './shop.css';
import homes from './homeData';

export default function Home() {
  return (
    <section className="page_shop">
      {
        homes.map((product) => {
          return (
            <div>
              <img src={product.image} alt="" />
              <div className='product_txt'>
                <p className='product_name'>{product.item}</p>
                <p className='product_price'>{product.price}원</p>
              </div>
            </div> 
          )
        })
      }
    </section>
  )
}