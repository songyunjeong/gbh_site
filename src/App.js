import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Home from './Pages/Home';
import Cosmetic from './Pages/Cosmetic';
import Apparel from './Pages/Apparel';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header_box">
          <div className="ham">
            <img src={process.env.PUBLIC_URL + '/images/header/ham.jpg'} alt="" />
          </div>
          <div className="logo">
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/images/header/logo.jpg'} alt="" />
            </Link>
          </div>
          <div className="cart">
            <img src={process.env.PUBLIC_URL + '/images/header/cart.jpg'} alt="" />
          </div>
        </div>
      </header>

      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='home' element={<Home />} />
        <Route path='cosmetic' element={<Cosmetic />} />
        <Route path='apparel' element={<Apparel />} />
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
            <li className='bold'>CUSTOMER SERVICE</li>
            <li style={{fontSize: 32, fontWeight: 300}}>070-4687-7378</li>
            <li>월-금 10:00 - 17:00</li>
            <li>토, 일, 공휴일 휴무</li>
          </ul>
        </div>
        <div className="footer3">
          <ul>
            <li className='bold'>BANK INFO</li>
            <li>1005-102-981165 우리은행/(주)제범</li>
          </ul>
          <ul>
            <li className='bold'>RETURN ADDRESS</li>
            <li>인천 서구 서곶로318 서인천우체국 소포실</li>
            <li>주식회사 제범</li>
          </ul>
        </div>
        <div className="footer4">
          <ul>
            <li className='bold'>INFORMATION</li>
            <li>(주)제범 &nbsp; CEO 이종윤</li>
            <li>서울특별시 서초구 명달로 65 (서초동)</li>
            <li>Business License : 101-86-26350 &nbsp; Mall Order License : 2014-서울중구-0611</li>
          </ul>
        </div>
      </footer>      
    </div>
  );
}

export default App;
