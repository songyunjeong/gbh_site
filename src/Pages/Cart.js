import './cart.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount, deleteItem } from './store';

export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()

  return (
    <section className="page_cart">
      <h2>{state.user.name}님의 CART</h2>

      <Table bordered hover>
        <thead>
          <tr>
            <th style={{width: '100px'}}>이미지</th>
            <th>상품정보</th>
            <th style={{width: '100px'}}>수량</th>
            <th style={{width: '200px'}}>상품구매금액</th>
            <th style={{width: '150px'}}>선택</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((item, i) => {
              return (
                <tr key={i}>
                  <td className='item_img'><img src={state.cart[i].image} alt="" /></td>
                  <td className='item_item'>{state.cart[i].item}</td>
                  <td className='item_count'>
                    <p>{state.cart[i].count}</p>
                    <button className='plus' onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button>
                    <button className='minus' onClick={() => {dispatch(subCount(state.cart[i].id))}}>-</button>
                  </td>
                  <td className='item_price'>{state.cart[i].price * state.cart[i].count}</td>
                  <td className='item_cancle'>
                    <button className='cancle' onClick={() => {dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{width: '25%'}}>총 상품금액</th>
            <th style={{width: '25%'}}>배송비</th>
            <th style={{width: '50%'}}>결제예정금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>3000</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}