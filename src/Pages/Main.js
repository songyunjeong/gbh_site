import { Link } from 'react-router-dom';
import './main.css';

export default function Main() {
  return (
    <section className="page_main">
      <div>
        <Link to='/about'>
          <img src={process.env.PUBLIC_URL + '/images/main/about.jpg'} alt="" />
          <div className='lnb_box'></div>
          <p>ABOUT</p>
        </Link>
      </div>
      <div>
        <Link to='/home'>
          <img src={process.env.PUBLIC_URL + '/images/main/home.jpg'} alt="" />
          <div className='lnb_box'></div>
          <p>HOME DESIGN</p>
        </Link>          
      </div>
      <div>
        <Link to='/cosmetic'>
          <img src={process.env.PUBLIC_URL + '/images/main/cosmetic.jpg'} alt="" />
          <div className='lnb_box'></div>
          <p>COSMETIC</p>
        </Link>          
      </div>
      <div>
        <Link to='/apparel'>
          <img src={process.env.PUBLIC_URL + '/images/main/apparel.jpg'} alt="" />
          <div className='lnb_box'></div>
          <p>APPAREL</p>
        </Link>
      </div>
    </section>
  )
}