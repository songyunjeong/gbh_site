import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
import styled from "styled-components";

const PageDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 990px;
  margin: 50px auto 100px;
`;

const ProductTxt = styled.div`
  width: 400px;
`;

const ProductDetails = styled.p`
  font-size: 13px;
  white-space: pre-wrap;
  margin-top: 50px;
`;

const CartBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-top: 100px;
  overflow: hidden;
  transition: all 0.5s ease;
  :hover {
    background-color: black;
    color: #fff;
  }
`;

const Popup = styled.div`
  width: 300px;
  height: 180px;
  background-color: #fff;
  border: 1px solid #ccc;
  font-size: 14px;
  text-align: center;
  padding-top: 50px;
  position: fixed;
  top: calc(50vh - 90px);
  left: calc(50vw - 150px);
`;

const PopupBtn = styled.button`
  border: 1px solid #ccc;
  margin-top: 10px;
  padding: 5px 10px;
`;

export default function Details(props) {
  const { products } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [cartPopup, setCartPopup] = useState(false);

  return (
    <PageDetail>
      <div>
        <img src={products[id].image} alt="" />
      </div>
      <ProductTxt>
        <p>{products[id].item}</p>
        <p>{products[id].color}</p>
        <p>{products[id].price.toLocaleString()}원</p>
        <ProductDetails>{products[id].details}</ProductDetails>
        <CartBtn
          onClick={() => {
            setCartPopup(true);
            dispatch(
              addItem({
                id: products[id].id,
                image: products[id].image,
                item: products[id].item,
                price: products[id].price,
                count: 1,
              })
            );
          }}
        >
          CART
        </CartBtn>

        {cartPopup ? <CartPopup setCartPopup={setCartPopup} /> : null}
      </ProductTxt>
    </PageDetail>
  );
}

function CartPopup(props) {
  const { setCartPopup } = props;
  const navigate = useNavigate();

  return (
    <Popup>
      <p>장바구니에 담았습니다.</p>
      <PopupBtn
        style={{ marginRight: "10px" }}
        onClick={() => setCartPopup(false)}
      >
        계속 쇼핑하기
      </PopupBtn>
      <PopupBtn
        className="yes"
        onClick={() => {
          navigate("/cart");
        }}
      >
        장바구니 전체보기
      </PopupBtn>
    </Popup>
  );
}
