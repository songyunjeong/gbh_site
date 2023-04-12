import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Noto+Sans&family=Noto+Sans+KR&display=swap');

body {
  margin: 0;
  font-family: 'Lato', 'Noto Sans KR', Arial, Helvetica, sans-serif;
}
li {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
  :hover {
    color: black;
  }
}

/* popup */
.popup {
  width: 390px; height: 470px;
  background-color: #fff;
  border: 1px solid #ccc; box-sizing: border-box;
  position: fixed;
  top: 0; left: 10px;
  z-index: 110;
}
.popup .img img {
  display: block;
  width: 100%;
}
.popup .cancle_btn {
  display: flex;
  border-top: 1px solid #ccc; box-sizing: border-box;
  margin: 0; padding: 0;
}
.popup .cancle_btn > div {
  width: 50%; height: 50px;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}
.popup .cancle_btn > div:hover {
  cursor: pointer;
}
.popup .cancle_btn .cancle1 {
  border-right: 1px solid #ccc; box-sizing: border-box;
}

/* header */
header {
  height: 70px;
  background-color: #fff;
  text-align: center;
  opacity: 0.7;
  position: sticky;
  top: 0;
  z-index: 90;
}
header .header_box {
  display: flex;
  justify-content: space-between;
}
header .header_box img {
  height: 70px;
}

/* ham */
header .header_box .ham img:hover {
  cursor: pointer;
}
.ham_btn {
  width: 250px; height: 100%;
  background-color: #fff;
  border-right: 1px solid #eee;
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
}
.ham_btn .ham_cancle img {
  height: 70px;
}
.ham_btn .ham_cancle img:hover {
  cursor: pointer;
}
.ham_btn .ham_lnb {
  margin-top: 50px;
  padding-left: 30px; box-sizing: border-box;
}
.ham_btn .ham_lnb li {
  margin-bottom: 10px;
}
.ham_btn .ham_lnb li.login {
  margin-top: 50px;
}

/* page_shop */
.page_shop {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1515px;
  margin: 0 auto;
}

.page_shop .product_txt {
  width: 485px;
  text-align: center;
  margin: 10px auto 50px;
}
.page_shop .product_txt .product_name {
  font-size: 14px;
  font-weight: 600;
}
.page_shop .product_txt .product_price {
  font-size: 12px;
  margin-top: 5px;
}

/* footer */
footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  font-size: 12px;
  padding: 25px 50px;
}
footer .bold {
  font-size: 14px;
  font-weight: 600;
}
footer li {
  margin-bottom: 10px;
}
footer .footer1 {
  padding-left: 30px;
}
footer .footer4 {
  padding: 0 110px;
}
`;
