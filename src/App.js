import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cosmetic from "./Pages/Cosmetic";
import Apparel from "./Pages/Apparel";
import Cart from "./Pages/Cart";
import Mypage from "./Pages/Mypage";
import { useCookies } from "react-cookie";

function App() {
  const [ham, setHam] = useState(false);
  const [popup, setPopup] = useState(true);
  const [hasCookie, setHasCookie] = useState(true);
  const [appCookies, setAppCookies] = useCookies();

  const getExpiredDate = ({ days }) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const closePopupUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(1);
    setAppCookies("POPUP_EXPIRES", true, { path: "/", expires });

    setPopup(false);
  };

  useEffect(() => {
    if (appCookies["POPUP_EXPIRES"]) return;
    setHasCookie(false);
  }, []);

  return (
    <div className="App">
      {popup && !hasCookie && (
        <Popup
          setPopup={setPopup}
          closePopupUntilExpires={closePopupUntilExpires}
        />
      )}

      <header>
        <div className="header_box">
          <div
            className="ham"
            onClick={() => {
              setHam(true);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/header/ham.jpg"}
              alt=""
            />
          </div>
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/header/logo.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="cart">
            <Link to="cart">
              <img
                src={process.env.PUBLIC_URL + "/images/header/cart.jpg"}
                alt=""
              />
            </Link>
          </div>
        </div>
      </header>
      {ham === true ? <Ham setHam={setHam} /> : null}

      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="home/*" element={<Home />} />
        <Route path="cosmetic/*" element={<Cosmetic />} />
        <Route path="apparel/*" element={<Apparel />} />
        <Route path="cart" element={<Cart />} />
        <Route path="mypage" element={<Mypage />} />
      </Routes>

      <footer>
        <div className="footer1">
          <ul>
            <li>Instagram</li>
            <li>Blog</li>
            <li>Shipping / Returns</li>
            <li>Guide</li>
            <li>Privacy policy</li>
            <li>Agreement</li>
          </ul>
        </div>
        <div className="footer2">
          <ul>
            <li className="bold">CUSTOMER SERVICE</li>
            <li style={{ fontSize: 32, fontWeight: 300 }}>070-4687-7378</li>
            <li>월-금 10:00 - 17:00</li>
            <li>토, 일, 공휴일 휴무</li>
          </ul>
        </div>
        <div className="footer3">
          <ul>
            <li className="bold">BANK INFO</li>
            <li>1005-102-981165 우리은행/(주)제범</li>
          </ul>
          <ul>
            <li className="bold">RETURN ADDRESS</li>
            <li>인천 서구 서곶로318 서인천우체국 소포실</li>
            <li>주식회사 제범</li>
          </ul>
        </div>
        <div className="footer4">
          <ul>
            <li className="bold">INFORMATION</li>
            <li>(주)제범 &nbsp; CEO 이종윤</li>
            <li>서울특별시 서초구 명달로 65 (서초동)</li>
            <li>
              Business License : 101-86-26350 &nbsp; Mall Order License :
              2014-서울중구-0611
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Ham({ setHam }) {
  return (
    <div className="ham_btn">
      <div className="ham_cancle" onClick={() => setHam(false)}>
        <img
          src={process.env.PUBLIC_URL + "/images/header/cancle.jpg"}
          alt=""
        />
      </div>
      <ul className="ham_lnb">
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="home">Home design</Link>
        </li>
        <li>
          <Link to="cosmetic">Cosmetic</Link>
        </li>
        <li>
          <Link to="apparel">Apparel</Link>
        </li>
        <li className="login">
          <Link to="">Login</Link>
        </li>
        <li>
          <Link to="mypage">My page</Link>
        </li>
      </ul>
    </div>
  );
}

function Popup({ setPopup, closePopupUntilExpires }) {
  return (
    <div className="popup">
      <div className="img">
        <img
          src={process.env.PUBLIC_URL + "/images/popup/nrCeramics.jpg"}
          alt=""
        />
      </div>
      <div className="cancle_btn">
        <div
          className="cancle1"
          onClick={() => {
            closePopupUntilExpires();
          }}
        >
          오늘 하루 열지 않기
        </div>
        <div
          className="cancle2"
          onClick={() => {
            setPopup(false);
          }}
        >
          닫기
        </div>
      </div>
    </div>
  );
}
