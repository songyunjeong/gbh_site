import { useParams } from "react-router-dom";
import './detail.css';

export default function Details(props) {
  const {products} = props
  const {id} = useParams()

  return (
    <section className="page_detail">
      <div className="product_img">
        <img src={products[id].image} alt="" />
      </div>      
      <div className='product_txt'>
        <p className='product_name'>{products[id].item}</p>
        <p className='product_name'>{products[id].color}</p>
        <p className='product_price'>{products[id].price}원</p>
        <p className='product_details'>{products[id].details}</p>
      </div>
    </section>
  )
}