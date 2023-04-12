import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 970px;
  margin: 0 auto 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
  position: relative;
`;

const LnbImg = styled.img`
  width: 470px;
  margin-bottom: 5px;
`;

const WhiteBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: #eee;
  opacity: 0.5;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
`;

const LnbTxt = styled.p`
  width: 200px;
  height: 200px;
  font-size: 18px;
  text-align: center;
  line-height: 200px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
`;

export default function Main() {
  return (
    <PageMain>
      <Section>
        <Link to='/about'>
          <LnbImg
            src={process.env.PUBLIC_URL + '/images/main/about.jpg'}
            alt=''
          />
          <WhiteBox />
          <LnbTxt>ABOUT</LnbTxt>
        </Link>
      </Section>
      <Section>
        <Link to='/home'>
          <LnbImg
            src={process.env.PUBLIC_URL + '/images/main/home.jpg'}
            alt=''
          />
          <WhiteBox />
          <LnbTxt>HOME DESIGN</LnbTxt>
        </Link>
      </Section>
      <Section>
        <Link to='/cosmetic'>
          <LnbImg
            src={process.env.PUBLIC_URL + '/images/main/cosmetic.jpg'}
            alt=''
          />
          <WhiteBox />
          <LnbTxt>COSMETIC</LnbTxt>
        </Link>
      </Section>
      <Section>
        <Link to='/apparel'>
          <LnbImg
            src={process.env.PUBLIC_URL + '/images/main/apparel.jpg'}
            alt=''
          />
          <WhiteBox />
          <LnbTxt>APPAREL</LnbTxt>
        </Link>
      </Section>
    </PageMain>
  );
}
