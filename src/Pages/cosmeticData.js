const cosmetics = [
  {
    id: 'cosmetic-001',
    image: process.env.PUBLIC_URL + '/images/cosmetic/soapBar&soapDishKit.jpg',
    item: 'SOAP BAR & SOAP DISH KIT',
    price: 75000,
    details: '당김없이 촉촉한 마무리감을 선사하는 약산성 페이셜 모이스트 솝, 부드럽게 묵은 노폐물을 세정하여 매끈하게 마무리되는 바디 필링 솝과 2가지 솝 바와 함께 사용 가능한 스폰지 디쉬(2매)와 스테인리스 스틸 솝 디쉬까지 함께 구성된 리미티트 세트입니다.'
  },
  {
    id: 'cosmetic-002',
    image: process.env.PUBLIC_URL + '/images/cosmetic/mildFacialCream.jpg',
    item: 'MILD FACIAL CREAM',
    price: 33000,
    details: '10중 히알루론산과 아쿠아리시아 성분으로 수분 보유력을 키워주는 딥 모이스트 크림입니다.\n피부 지질 구조와 유사한 메커니즘으로 끈적임 없는 편안한 촉촉함을 선사합니다. [미백/주름개선 2중 기능성 화장품]'
  },
  {
    id: 'cosmetic-003',
    image: process.env.PUBLIC_URL + '/images/cosmetic/handCream.jpg',
    item: 'HAND CREAM (NEROLI MUSK / FIG WOOD)',
    price: 18000,
    details: '세라마이드 부족으로 건조하고 손상된 피부에 효과적인 보습을 하고 자외선과 잦은 세척으로 노화가 빠른 손에 주름개선 효과를 주는 기능성 핸드크림입니다.'
  },
  {
    id: 'cosmetic-004',
    image: process.env.PUBLIC_URL + '/images/cosmetic/facial&bodySoapDuo.jpg',
    item: 'FACIAL & BODY SOAP DUO',
    price: 28000,
    details: '당김 없이 촉촉한 마무리감을 선사하는 약산성 페이셜 모이스트 솝, 부드럽게 묵은 노폐물을 세정하여 매끈하게 마무리되는 바디 필링 솝과 2가지 솝 바와 함께 사용 가능한 스폰지 솝 디쉬(2매)로 구성된 듀오 세트입니다.'
  },
  {
    id: 'cosmetic-005',
    image: process.env.PUBLIC_URL + '/images/cosmetic/bodyPeelingSoap.jpg',
    item: 'BODY PEELING SOAP',
    price: 14000,
    details: '자극 없이 부드럽게 묵은 노폐물을 세정하여 개운하고 매끈하게 마무리되는 바디 필링 솝입니다.'
  },
  {
    id: 'cosmetic-006',
    image: process.env.PUBLIC_URL + '/images/cosmetic/facialMoistSoap.jpg',
    item: 'FACIAL MOIST SOAP',
    price: 14000,
    details: '조밀한 거품으로 순하게 세안하고 당김없이 촉촉한 마무리감을 선사하는 약산성 모이스트 솝 입니다.'
  },
  {
    id: 'cosmetic-007',
    image: process.env.PUBLIC_URL + '/images/cosmetic/gbhTrialKit.jpg',
    item: 'GBH TRIAL KIT',
    price: 0,
    details: '총 12종의 GBH 코스메틱 제품 체험분과 정품 구매 시 사용 가능한 8가지 혜택의 쿠폰북으로 구성된 페이퍼 팩입니다.'
  },
  {
    id: 'cosmetic-008',
    image: process.env.PUBLIC_URL + '/images/cosmetic/mildFacialToner.jpg',
    item: 'MILD FACIAL TONER',
    price: 23000,
    details: '10중 히알루론산과 아쿠아리시아 성분으로 속부터 촘촘하게 수분을 채우고 수분 보유력을 키워주는 딥 모이스트 토너입니다. [미백/주름개선 2중 기능성 화장품]'
  },
  {
    id: 'cosmetic-009',
    image: process.env.PUBLIC_URL + '/images/cosmetic/spatula.jpg',
    item: 'SPATULA',
    price: 6000,
    details: '스킨케어 또는 메이크업 제품을 위생적으로 덜어내어 사용할 수 있는 스테인레스 스틸 재질의 스파출러입니다.'
  },
  {
    id: 'cosmetic-010',
    image: process.env.PUBLIC_URL + '/images/cosmetic/softCottonPad.jpg',
    item: 'SOFT COTTON PAD',
    price: 3500,
    details: '부드러운 100% 순면으로 만들어진 화장솜으로 피부결 정돈과 클렌징 시 피부 자극을 덜어주는 화장솜입니다. 친환경적인 워터젯 공법으로 디자인되어 보풀 없이 깔끔하게 사용 가능합니다.'
  },
  {
    id: 'cosmetic-011',
    image: process.env.PUBLIC_URL + '/images/cosmetic/handCream15g3eaSet.jpg',
    item: 'HAND CREAM 15g 3EA SET (NEROLI MUSK / FIG WOOD)',
    price: 14000,
    details: '세라마이드 부족으로 건조하고 손상된 피부에 효과적인 보습을 하고 자외선과 잦은 세척으로 노화가 빠른 손에 주름개선 효과를 주는 기능성 핸드크림입니다.'
  },
  {
    id: 'cosmetic-012',
    image: process.env.PUBLIC_URL + '/images/cosmetic/bodyNeroliMuskSet.jpg',
    item: 'BODY NEROLI MUSK SET',
    price: 62000,
    details: '풍부한 네롤리 머스크 향과 부드러운 거품이 어우러져 건조함없이 부드러운 바디 케어를 선사하는 저자극 바디 워시입니다.'
  },
  {
    id: 'cosmetic-013',
    image: process.env.PUBLIC_URL + '/images/cosmetic/anti-dancruffSet.jpg',
    item: 'ANTI-DANDRUFF SET',
    price: 44000,
    details: '각질과 비듬을 말끔하게 세정하고 가려움을 완화해 건강한 두피 밸런스를 유지해주는 약산성 샴푸입니다.'
  },
  {
    id: 'cosmetic-014',
    image: process.env.PUBLIC_URL + '/images/cosmetic/hairScalpMassager.jpg',
    item: 'HAIR SCALP MASSAGER',
    price: 13000,
    details: '섬세하지만 부드러운 마사지와 세정으로 건강하게 두피를 케어하는 투웨이 실리콘 헤어 스칼프 마사저입니다.'
  },
  {
    id: 'cosmetic-015',
    image: process.env.PUBLIC_URL + '/images/cosmetic/anti-dandruffHairScalpMask.jpg',
    item: 'ANTI-DANDRUFF HAIR SCALP MASK',
    price: 18000,
    details: '각질과 비듬을 말끔하게 정돈하고 가려움을 완화해 건강한 두피 밸런스를 유지해주는 약산성 무실리콘 헤어 스칼프 마스크입니다.'
  }
]

export default cosmetics