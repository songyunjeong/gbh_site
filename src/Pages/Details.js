import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./store";
import './detail.css';

export default function Details(props) {
  const {products} = props
  const {id} = useParams()
  const dispatch = useDispatch()

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
        <button onClick={() => {
          dispatch(addItem({
            id: products[id].id,
            image: products[id].image,
            item: products[id].item,
            price: products[id].price,
            count: 1
          }))
        }} className="cart_btn">CART</button>
      </div>
    </section>
  )
}

function cartPopup() {
  return (
    <div className="cart_popup">
      <p>장바구니에 담았습니다. 장바구니로 이동할까요?</p>
      <button>좀 더 볼게요.</button>
      <button>OK.</button>
    </div>
  )
}