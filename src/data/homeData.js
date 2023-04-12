const homes = [
  {
    id: 'home-001',
    image: process.env.PUBLIC_URL + '/images/home/xNrCeramicsDessertPlateBlack.jpg',
    item: 'X NR CERAMICS DESSERT PLATE BLACK',
    price: 25000,
    details: '보여지는 아름다움 보다 쓰임이 아름다운 물건을 소개하는 라이프 스타일 브랜드 GBH와 일상에 자연과 예술의 가치를 전하는 도자기 전문 브랜드 NR CERAMICS의 협업으로 선보이는 디저트 플레이트입니다.' 
  },
  {
    id: 'home-002',
    image: process.env.PUBLIC_URL + '/images/home/xNrCeramicsDessertPlateWhite.jpg',
    item: 'X NR CERAMICS DESSERT PLATE WHITE',
    price: 25000,
    details: '보여지는 아름다움 보다 쓰임이 아름다운 물건을 소개하는 라이프 스타일 브랜드 GBH와 일상에 자연과 예술의 가치를 전하는 도자기 전문 브랜드 NR CERAMICS의 협업으로 선보이는 디저트 플레이트입니다.'
  },
  {
    id: 'home-003',
    image: process.env.PUBLIC_URL + '/images/home/mdfTableMatKineticYellow.jpg',
    item: 'MDF TABLE MAT KINETIC YELLOW',
    price: 58000,
    details: '심플한 디자인과 최소한의 디테일로 만들어진 테이블매트 입니다. 음식이 돋보이는 플레이팅이 가능하며 음식물로 인한 테이블 변색현상을 방지할 수 있습니다. E0 등급의 고밀도 MDF(High Density Fivrevoard)와 HPL(High Pressure Laminate)를 프레스 가공하여 제작한 제품으로 HPL은 내구성이 강하고 패턴이 다양해 식탁, 스툴과 같은 가구와 인테리어 내장재 등에 다양하게 사용되고 있는 소재입니다.'
  },
  {
    id: 'home-004',
    image: process.env.PUBLIC_URL + '/images/home/squareMiniBagKineticYellow.jpg',
    item: 'SQUARE MINI BAG KINETIC YELLOW',
    price: 83000,
    details: '단거리 여행이나 장거리 외출시 실용적인 여행용 파우치\n- 2023시즌컬러\n- 3가지 사이즈로 구성되어 있어서 용도에 맞게 선택하여 사용가능\n- 생활방수 가능한 코팅원단, 방수지퍼 사용\n- 핸드캐리 가능한 토트타입 디자인\n- 지퍼를 사용하여 양면으로 오픈가능'
  },
  {
    id: 'home-005',
    image: process.env.PUBLIC_URL + '/images/home/xTwbPremiumTowel6eaSetGrey.jpg',
    item: 'X TWB PREMIUM TOWEL 6EA SET GREY',
    price: 54000,
    details: '좋은 품질의 타올로 유명한 TWB와의 콜라보레이션 타올 세트입니다.\n- 적당한 중량감으로 기본에 충실한 디자인\n- 끝단 마무리 부분의 디테일(보더부분)이 넓고 새로운 디자인의 라벨\n- 1 8ET(6ea)'
  },
  {
    id: 'home-006',
    image: process.env.PUBLIC_URL + '/images/home/yutNoriKit.jpg',
    item: 'YUT NORI KIT',
    price: 99000,
    details: '전통놀이 중 하나인 윷놀이를 GBH의 무드로 풀어낸 윷놀이 키트입니다.\n\n구성: 윷말 8개, 윷스틱 4개, 윷판 1개, 사용설명서\n- 심플한 패키지로 구성품의 보관 및 이동 편리\n- 견고성과 내구성을 위해 단단한 호두나무와 참나무로 제작\n- 매끈한 나무 마감으로 부드러운 그립감\n- 패브릭으로 제작된 윷판'
  },
  {
    id: 'home-007',
    image: process.env.PUBLIC_URL + '/images/home/stainlessSteelTissueCase.jpg',
    item: 'STAINLESS STELL TISSUE CASE',
    price: 115000,
    details: '- 스테인리스 SUS304를 절곡하여 만든 티슈케이스\n- 최소한의 디테일\n- 핸드메이드식 수작업 마감으로 결이 약간씩 다를 수 있음'
  },
  {
    id: 'home-008',
    image: process.env.PUBLIC_URL + '/images/home/3-foldingUmbrella.jpg',
    item: '3-FOLDING UMBRELLA',
    price: 38000,
    details: '- 심플한 디자인의 블랙 전자동 3단 우산\n- 발수 및 방수 효과가 뛰어나며, UV암막 코팅되어 양산으로도 사용 가능\n- 고밀도 폰지원단을 사용하여 자외선 차단 및 방수 효과 우수 (폰지320T)\n- FRP 소재의 살대로 바람에 강하고 탄성이 좋음\n- 파우치 안쪽면을 타올지로 제작하여 물기 흡수에 효과적\n- 우산은 방수원단으로 아주 조밀하게 엮인 천을 엮어 제작되는 제품으로, 장마철의 폭우처럼 물의 압력(수압)이 셀 경우 압력으로 인한 빗물이 맺히거나 원단 표면에 스며드는 현상이 생길 수 있습니다'
  },
  {
    id: 'home-009',
    image: process.env.PUBLIC_URL + '/images/home/xGrannyjejeLeatherSlipperVegetable.jpg',
    item: 'X GRANNYJEJE LEATHER SLIPPER VEGETABLE',
    price: 129000,
    details: '일상을 채우는 물건을 만드는 GBH와 최상의 가죽을 선별해 재단부터 마감까지 국내 수작업으로 프리미엄 가죽 슈즈를 만드는 grannyjeje(그래니제제)가 함께 선보이는 콜라보레이션 제품입니다.\n발등을 충분히 감싸주는 오픈토 룸슈즈 디자인으로 베지터블, 브라운, 블랙 총 3가지 색상으로 선보입니다. 가볍고 푹신한 라텍스폼이 2중 구조로 제작되어 착화감이 좋고 발의 피로도를 줄여줍니다. 사용자의 발에 맞춰 자연스럽게 길들여지는 천연 가죽 특성상 신을수록 편안하고 멋스러워지는 레더에이징을 즐길 수 있습니다.'
  },
  {
    id: 'home-010',
    image: process.env.PUBLIC_URL + '/images/home/longApron.jpg',
    item: 'LONG APRON (3 COLOR)',
    price: 38000,
    details: '린넨과 면이 혼방된 소재로 제작된 원피스형식의 베이직 에이프런입니다.\n불필요한 장식이 없어 간결하고, 실용적이며, 인테리어를 헤치지 않습니다. 남녀공용으로 사용할 수 있는 사이즈이며 끈으로 길이조절이 가능합니다. 간단한 소지품을 넣을 수 있는 포켓이 있습니다.'
  },
  {
    id: 'home-011',
    image: process.env.PUBLIC_URL + '/images/home/bodyScrubTowel.jpg',
    item: 'BODY SCRUB TOWEL',
    price: 12000,
    details: '블랙 색상의 하드타입 스크럽 타월\n- 까슬까슬한 텍스처로 각질 제거에 적합하며 마사지 효과가 있는 소재\n- 촘촘한 메쉬 소재로 적은 양의 바디 클렌저로 풍성한 거품\n- 걸이에 걸어서 건조 시킬 수 있도록 라벨 추가 제작\n- KATRI(산업환경 연구센터)를 통해 포름알데히드 검출 시험 결과 불검출된 친환경 샤워타월'
  },
  {
    id: 'home-012',
    image: process.env.PUBLIC_URL + '/images/home/blackToothbrush5eaSet.jpg',
    item: 'BLACK TOOTHBRUSH 5EA SET',
    price: 18000,
    details: '특허 받은 100% 엠보싱 고급 이중 미세모가 치아와 잇몸 틈새의 플라그와 치석을 효과적으로 제거해주며, 함께 사용 가능한 혀 클리너를 통해 셀프 토탈 케어가 가능한 기능성 칫솔입니다. 또한 사용 기간 동안 세균 번식에 취약한 칫솔홀 부분에는 은나노 항균기술이, 칫솔모에는 국내산 대나무 숯가루가 처리되어 강력한 천연 살균 효과를 지니는 안전하고 건강한 GBH BALCK TOOTHBRUSH입니다.'
  },
  {
    id: 'home-013',
    image: process.env.PUBLIC_URL + '/images/home/mintGelToothpaste.jpg',
    item: 'MINT GEL TOOTHPASTE',
    price: 9200,
    details: '불소와 합성 계면활성제가 무첨가된 EWG green 등급 안심 처방의 치약입니다. 코코넛 유래의 천연 계면활성제, 유효 성문들에 의해 충치예방, 잇몸개선, 치태와 구취를 제거하여 구강 내를 상쾌하고 청결하게 관리할 수 있습니다. 또한 천연 유칼립투스 오일, 박하 오일을 함유하여 기분 좋은 청량감을 느낄 수 있는 온 가족 사용 가능한 데일리 구강 케어 치약입니다.'
  },
  {
    id: 'home-014',
    image: process.env.PUBLIC_URL + '/images/home/fleeceBlanketBeige.jpg',
    item: 'FLEECE BLANKET BEIGE',
    price: 68000,
    details: '추운 날씨에 포근하게 덮을 수 있는 플리스 블랭킷입니다.\n각기 다른 플리스 원단을 사용하여 양면으로 사용이 가능합니다.\n보관 시에는 스트링을 이용하여 깔끔하게 보관 및 휴대할 수 있어 차량 및 캠핑 같은 아웃도어에서 활용하기 좋습니다.\n스트링을 이용해 접어서 사용할 경우, 목배게로도 사용할 수 있습니다.\n클래식한 디자인으로 어느 공간에도 잘 어울리는 블랭킷입니다.'
  },
  {
    id: 'home-015',
    image: process.env.PUBLIC_URL + '/images/home/dailyDishwashingLiquid&RefillSet.jpg',
    item: 'DAILY DISHWASHING LIQUID&REFILL SET',
    price: 20000,
    details: '코코넛에서 추출한 식물유래 세정성분이 함유되어 아이 젖병부터 식기, 과일 및 야채까지 안심하고 사용할 수 있는 프리미엄 1종 주방세제입니다.\n1회 토출량: 약 2.5ml(약 200회)'
  }
]

export default homes