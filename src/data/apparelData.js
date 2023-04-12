const apparels = [
  {
    id: 'apparel-001',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiEcoShearingBag.jpg',
    item: '22WI ECO SHEARING BAG',
    color: '',
    price: 18000,
    details: 'GBH 로고 플레이 포인트를 준 가방입니다.\n에코 시어링 봄버자켓과 동일한 소재를 사용하였으며,\n크로스 숄더, 백팩 등 다양하게 연출할 수 있는 실용적인 아이템입니다.\n미니 사이즈로 스타일링 포인트를 줄 수 있는 제품입니다.'
  },
  {
    id: 'apparel-002',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiMerinoSailorKnit.jpg',
    item: '22WI MERINO SAILOR KNIT (2COLOR)',
    color: '',
    price: 218000,
    details: '메리노 울 소재 원사를 사용하여 벌키하게 짜여진 니트입니다.\n하이넥 디자인에 배색 포인트 단추로 하이넥 또는 세일러 카라로 연출이 가능한 제품입니다.\n터치감이 부드럽고 두께감이 있는 편직으로 공기함량이 높아 보온성이 좋습니다.'
  },
  {
    id: 'apparel-003',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiStandardCorduroyPants.jpg',
    item: '22WI STANDARD CORDUROY PANTS',
    color: 'IVORY',
    price: 265000,
    details: '코듀로이 텍스쳐가 돋보이는 루즈한 핏의 스트레이트 팬츠입니다.\n스타일엠(STYLE M)사의 코듀로이 원단으로 모질이 가는 원사로 워싱한 듯 부드러운 편안한 착용감이 특징입니다.\n은은한 아이보리 색상에 코듀로이 텍스쳐가 그대로 돋보일 수 있도록 미니멀하게 디자인하였습니다.\n힙부터 밑단까지 여유롭게 떨어지는 루즈한 스트레이트 핏의 발등을 덮는 길이로 다양한 F/W 아이템과 스타일링이 가능합니다.\n포근한 두께감의 원단으로 허리 밴드 안쪽에 얇은 원단 배색을 덧대어 착용감이 좋습니다.'
  },
  {
    id: 'apparel-004',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiBrisbaneMossCorduroyOvercoatCinamon.jpg',
    item: '22WI BRISBANE MOSS CORDUROY OVERCOAT',
    color: 'CINAMON (SUIT CASE)',
    price: 750000,
    details: '유서 깊은 코듀로이 전문 원단 업체인 BRISBANE MOSS사의 원단을 사용한 더블브레스 코트입니다.\n벨벳처럼 부드러운 코듀로이 소재로 스트레이트 라인의 브리티시 스쿨룩을 연상케하는 코트디자인 입니다.\n패드 없는 어깨라인이 전체적으로 과하지 않은 루즈핏입니다.\n계절감이 느껴지는 진한 시나몬 컬러는 BRISBANE MOSS사가 개발한 자체 염색제를 사용하여 빛에 따라 다양한 깊이감을 느낄 수 있습니다.\n와이드한 플랫 카라로 캐주얼, 포멀한 무드를 같이 가지고있어 다양한 하의와 매치 가능합니다.\n더블 여밈을 포인트 디테일로 주고 불필요한 장식성은 없애 원단 자체의 디테일이 돋보이도록 하였습니다.\n안감에 진한 네이비 배색으로 숨은 디테일을 더했습니다.\n안감 등부분에 3M 신슐레이트 솜 누빔을 더해 한겨울에도 착용할 수 있을만큼 보온성을 높였습니다.'
  },
  {
    id: 'apparel-005',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiFelted-woolCoatWarmGrey.jpg',
    item: '22WI FELTED-WOOL COAT',
    color: 'WARM GREY',
    price: 480000,
    details: '필링가공처리로 입체감있는 텍스쳐의 울 소재를 사용한 하프코트입니다.\n힙을 덮는 기장감의 박시한 보이핏코트로 아웃 포켓 디테일로 캐쥬얼한 무드를 연출하였습니다.\n첫번째 버튼을 제외한 나머지는 히든버튼 디테일로 작업하여 포인트를 주었으며, 카드수납이 가능한 크기의 위트있는 스몰 포켓 디테일을 넣어 실용성을 살렸습니다. 부드러운 터치감의 비스코스 소재의 안감을 사용하여 정전기 발생이 적고 착용감이 우수합니다.\n\n- 전체 더블스티치로 견고하게 완성\n- 소맷단 트임디테일\n- 안쪽 면, 울 소재 배색 디테일\n- 소뿔 로고 단추 사용'
  },
  {
    id: 'apparel-006',
    image: process.env.PUBLIC_URL + '/images/apparel/22wiLongGloves.jpg',
    item: '22WI LONG GLOVES',
    color: '(4COLOR)',
    price: 75000,
    details: '팔꿈치까지 올라오는 길이가 긴 RIB 장갑입니다.\n울/아크릴 혼용사를 사용하여 보온성을 유지하되 필링이 적은 원사를 사용해 오래 착용해도 보풀이 적은 것이 특징입니다.\nGBH LONG GLOVES는 손부터 팔꿈치라인까지 올라오는 길이감과 시즌컬러인 CHILL ORANGE와 베이직한 무채색 4가지 색상으로 연출에 따라 다양한 스타일이 가능해 룩이나 스타일에 따라 포인트가 되는 유용한 아이템입니다. 스타일링에 따라 올려서 착용하거나 자연스러운 주름으로 연출할 수 있습니다.'
  }
]

export default apparels