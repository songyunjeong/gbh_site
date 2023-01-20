import cosmetics from './cosmeticData';
import './shop.css'

export default function Cosmetic() {
  return (
    <section className="page_shop">
      {
        cosmetics.map((product) => {
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