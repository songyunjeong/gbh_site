import { useState } from 'react';
import styled from 'styled-components';

const PageAbout = styled.div`
  width: 970px;
  margin: 0 auto 60px;
`;

const Section = styled.section`
  margin-bottom: 20px;
  > img:hover {
    cursor: pointer;
  }
  > p {
    font-size: 12px;
    padding: 20px 0;
  }
`;

export default function About() {
  let [homeTxt, setHomeText] = useState(false);
  let [cosmeticTxt, setCosmeticText] = useState(false);
  let [apparelTxt, setApparelText] = useState(false);
  return (
    <PageAbout>
      <Section>
        <img
          src={process.env.PUBLIC_URL + '/images/about/gbhHome.jpg'}
          alt=''
          onClick={() => {
            setHomeText(!homeTxt);
          }}
        />
        {homeTxt ? (
          <p id='home_txt'>
            화려하고 불필요한 장식들로 현혹시키는 제품들이 아닌, 물건 자체의
            쓰임과 본질에 집중하여 일상 속 조용한 존재감을 나타내는 제품을
            선보이고 있습니다.
          </p>
        ) : null}
      </Section>
      <Section>
        <img
          src={process.env.PUBLIC_URL + '/images/about/gbhCosmetic.jpg'}
          alt=''
          onClick={() => {
            setCosmeticText(!cosmeticTxt);
          }}
        />
        {cosmeticTxt ? (
          <p id='cosmetic_txt'>
            안전하고 순한 성분을 이용하여 화장품 본래 기능인 보습, 피부건강,
            피부 안정 등에 충실한 화장품을 만들고 있습니다.
          </p>
        ) : null}
      </Section>
      <Section>
        <img
          src={process.env.PUBLIC_URL + '/images/about/gbhApparel.jpg'}
          alt=''
          onClick={() => {
            setApparelText(!apparelTxt);
          }}
        />
        {apparelTxt ? (
          <p id='apparel_txt'>
            기본에 충실한 타임리스 디자인의 어패럴을 선보이고 있습니다.
            <br />
            Adult: 유행을 타지 않고 10년이 지나도 손이 가는 기본에 충실한
            타임리스 디자인의 어패럴을 선보이고 있습니다.
            <br />
            Kids: Let Kids bd Dids! 아이가 아이다울 수 있는 기본에 충실한
            베이직한 디자인의 데일리웨어를 선보입니다.
          </p>
        ) : null}
      </Section>
    </PageAbout>
  );
}
