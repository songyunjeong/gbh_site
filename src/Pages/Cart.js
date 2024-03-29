import "../styles/cart.css";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount, deleteItem, addItem } from "../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

const PageCart = styled.div`
  width: 1200px;
  text-align: center;
  margin: 100px auto 150px;
`;

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const price = [];
  const [deliveryCost, setDeliveryCost] = useState(0);
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i < state.cart.length; i++) {
      const itemPrice = state.cart[i].price * state.cart[i].count;
      price.push(itemPrice);
      setTotalPrice(price.reduce((x, y) => x + y));
    }
  }, onclick);

  useEffect(() => {
    setDeliveryCost(totalPrice && totalPrice < 30000 ? 3000 : 0);
  }, onclick);

  return (
    <PageCart>
      <h2>{state.user.name}님의 CART</h2>

      <Table bordered hover>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>이미지</th>
            <th>상품정보</th>
            <th style={{ width: "100px" }}>수량</th>
            <th style={{ width: "200px" }}>상품구매금액</th>
            <th style={{ width: "150px" }}>선택</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((_, i) => {
            return (
              <tr key={i}>
                <td className="item_img">
                  <img src={state.cart[i].image} alt="" />
                </td>
                <td
                  className="item_item"
                  onClick={() => {
                    navigate("/detail");
                  }}
                >
                  {state.cart[i].item}
                </td>
                <td className="item_count">
                  <p>{state.cart[i].count}</p>
                  <button
                    className="minus"
                    onClick={() => {
                      dispatch(subCount(state.cart[i].id));
                    }}
                  >
                    -
                  </button>
                  <button
                    className="plus"
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="item_price">
                  {(state.cart[i].price * state.cart[i].count).toLocaleString()}{" "}
                  원
                </td>
                <td className="item_cancle">
                  <button
                    className="cancle"
                    onClick={() => {
                      dispatch(deleteItem(state.cart[i].id));
                      if (state.cart[0]) {
                        setTotalPrice(0);
                      }
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>총 상품금액</th>
            <th style={{ width: "25%" }}>배송비</th>
            <th style={{ width: "50%" }}>결제예정금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalPrice.toLocaleString()} 원</td>
            <td>{deliveryCost.toLocaleString()} 원</td>
            <td>{(totalPrice + deliveryCost).toLocaleString()} 원</td>
          </tr>
        </tbody>
      </Table>
      <p style={{ textAlign: "right", fontSize: "12px" }}>
        * 30,000 원 이상 구매시 무료배송 됩니다.
      </p>
    </PageCart>
  );
}
