/* Fictional catalog for Myrte (미르테). Dummy data only. */
window.MYRTE = window.MYRTE || {};

MYRTE.categories = [
  { id: "all", label: "전체" },
  { id: "skincare", label: "스킨" },
  { id: "body", label: "바디" },
  { id: "fragrance", label: "향" },
  { id: "hair", label: "헤어" }
];

MYRTE.products = [
  {
    id: "birch-cleanser",
    name: "달빛 버치 페이셜 클렌저",
    category: "skincare",
    categoryLabel: "스킨",
    tagline: "하루의 먼지를 조용히 내려놓는 세정",
    description: "자작나무수와 순한 식물 유래 세정 성분으로 피부를 당기지 않게 씻어 냅니다. 거품은 적고, 헹군 뒤 남은 감촉은 물기를 머금은 잎처럼 차분합니다.",
    ingredients: "자작나무수, 글리세린, 카프릴릴/카프릴글루코사이드, 판테놀, 알로에베라잎즙, 카모마일꽃추출물, 토코페롤. 향은 덧씌우지 않고 원료 본연의 옅은 푸른 내음을 살렸습니다.",
    usage: "미온수로 얼굴을 적신 뒤, 펌프 한두 번을 손바닥에서 풀어 원을 그리듯 마사지합니다. 충분히 헹구고 두드리면 다음 단계가 더 잘 스며듭니다. 아침과 저녁 모두 사용할 수 있습니다.",
    image: "assets/images/product-cleanser.webp",
    featured: true,
    sizes: [
      { label: "100mL", price: 42000 },
      { label: "200mL", price: 68000 }
    ]
  },
  {
    id: "chamomile-toner",
    name: "이슬 카모마일 토너",
    category: "skincare",
    categoryLabel: "스킨",
    tagline: "세안 직후의 피부를 가라앉히는 물빛",
    description: "카모마일 수와 얇은 보습 성분이 세안 후 예민해진 결을 정돈합니다. 알코올을 넣지 않아 닦아 내는 자극보다, 손바닥으로 눌러 주는 사용을 권합니다.",
    ingredients: "카모마일꽃수, 정제수, 부틸렌글라이콜, 판테놀, 알란토인, 히알루론산나트륨, 위치하젤추출물, 에칠헥실글리세린.",
    usage: "화장솜보다 손바닥에 적당량을 받아 볼과 이마, 턱을 따라 눌러 줍니다. 냉장 보관하면 계절이 바뀌는 날 특히 편안합니다.",
    image: "assets/images/product-toner.webp",
    featured: false,
    sizes: [
      { label: "100mL", price: 48000 },
      { label: "200mL", price: 76000 }
    ]
  },
  {
    id: "mugwort-serum",
    name: "청자 쑥 세럼",
    category: "skincare",
    categoryLabel: "스킨",
    tagline: "얇게 스며드는 쓰임의 농도",
    description: "개똥쑥과 녹차잎에서 얻은 추출물을 가벼운 텍스처로 모았습니다. 진한 녹색의 향은 거의 없고, 바르고 나면 피부가 한결 정갈해진 느낌입니다.",
    ingredients: "개똥쑥추출물, 녹차잎추출물, 나이아신아마이드, 글리세린, 병풀추출물, 아데노신, 세라마이드엔피, 토코페롤.",
    usage: "토너 다음, 스포이드 두세 방울을 얼굴 전체에 펴 바른 뒤 양손으로 감싸 온도를 전합니다. 이틀에 한 번으로 시작해도 충분합니다.",
    image: "assets/images/product-serum.webp",
    featured: true,
    sizes: [
      { label: "30mL", price: 78000 }
    ]
  },
  {
    id: "moringa-cream",
    name: "모링가 씨드 보습 크림",
    category: "skincare",
    categoryLabel: "스킨",
    tagline: "천천히 덮이는 하루의 마지막 층",
    description: "모링가 씨 오일과 시어버터가 끈적임 없이 막을 만듭니다. 밤공기에도, 건조한 실내에서도 피부가 갈라지지 않도록 조용히 버팁니다.",
    ingredients: "모링가씨오일, 시어버터, 스쿠알란, 글리세린, 세테아릴알코올, 세라마이드엔피, 해바라기씨오일, 라벤더꽃오일(극소량).",
    usage: "세럼이 마른 뒤 쌀알 두 알 정도를 볼에서 목선까지 밀어 올립니다. 필요한 부위에만 한 겹 더해도 무겁지 않습니다.",
    image: "assets/images/product-cream.webp",
    featured: true,
    sizes: [
      { label: "50mL", price: 68000 },
      { label: "100mL", price: 98000 }
    ]
  },
  {
    id: "hinoki-body-oil",
    name: "따뜻한 편백 바디 오일",
    category: "body",
    categoryLabel: "바디",
    tagline: "목욕 뒤에 남는 나무의 온기",
    description: "편백과 호호바, 살구씨 오일을 섞어 피부 위에 얇은 광택만 남깁니다. 향은 씻은 나무판처럼 맑고, 시간이 지나며 가까이 있는 사람에게만 닿습니다.",
    ingredients: "호호바씨오일, 살구씨오일, 편백잎오일, 비타민이, 로즈힙열매오일, 토코페롤. 합성 착색제를 넣지 않았습니다.",
    usage: "물기를 남긴 피부에 펌프가 아닌 병구를 기울여 한 숟갈 정도를 받아 팔과 다리, 어깨에 바릅니다. 발바닥까지 이어도 좋습니다.",
    image: "assets/images/product-body-oil.webp",
    featured: true,
    sizes: [
      { label: "100mL", price: 58000 }
    ]
  },
  {
    id: "fennel-hand-balm",
    name: "붉은 회향 핸드 밤",
    category: "body",
    categoryLabel: "바디",
    tagline: "자주 씻는 손을 위한 짧은 휴식",
    description: "회향 씨와 당근 오일, 밀랍이 만든 단단한 밤입니다. 손등 주름 사이에 스며들고, 가방 안에서도 형태를 잃지 않습니다.",
    ingredients: "스위트아몬드오일, 밀랍, 시어버터, 회향씨오일, 당근뿌리추출물, 칼렌듈라오일, 토코페롤.",
    usage: "손톱 크기만큼 덜어 손등과 손톱 주위에 문지릅니다. 외출 전과 잠자리 전에 한 번씩이면 충분합니다.",
    image: "assets/images/product-hand-balm.webp",
    featured: false,
    sizes: [
      { label: "75mL", price: 32000 }
    ]
  },
  {
    id: "mist-forest-edp",
    name: "안개 숲 오 드 퍼퓸",
    category: "fragrance",
    categoryLabel: "향",
    tagline: "비 온 뒤 숲에서 맡는 첫 공기",
    description: "젖은 이끼와 베르가못, 베티버의 골격을 얇게 쌓았습니다. 처음은 맑고, 한낮이 지나면 나무껍질처럼 낮게 가라앉습니다. 공간을 채우기보다 옷깃에 머뭅니다.",
    ingredients: "변성알코올, 향료(베르가못, 갈바넘, 오크모스, 베티버, 시더우드, 머스크), 정제수. 이 향은 가상 조향이며 실제 판매용이 아닙니다.",
    usage: "맥박이 있는 목과 손목, 옷감의 안쪽에 두어 번 뿌립니다. 문지르지 않으면 앞머리가 더 오래 갑니다.",
    image: "assets/images/product-perfume.webp",
    featured: true,
    sizes: [
      { label: "50mL", price: 128000 },
      { label: "100mL", price: 178000 }
    ]
  },
  {
    id: "citrus-room-spray",
    name: "말린 귤피 룸 스프레이",
    category: "fragrance",
    categoryLabel: "향",
    tagline: "방에 스며드는 따뜻한 껍질의 향",
    description: "겨울 창가에 말린 귤 껍질과 유칼립투스, 가벼운 티무트 페퍼를 떠올리도록 조향했습니다. 무겁지 않아 잠자리 직전에도 부담이 적습니다.",
    ingredients: "변성알코올, 정제수, 향료(스위트오렌지, 만다린, 유칼립투스, 로즈마리). 가상 처방입니다.",
    usage: "공중을 향해 두세 번 분사하거나, 린넨과 커튼에서 조금 떨어뜨려 뿌립니다. 헝겊에 직접 가까이 분사하지 마세요.",
    image: "assets/images/product-room-spray.webp",
    featured: false,
    sizes: [
      { label: "100mL", price: 45000 }
    ]
  },
  {
    id: "midday-tea-oil",
    name: "정오의 티 아로마틱 오일",
    category: "fragrance",
    categoryLabel: "향",
    tagline: "찻잔을 비운 뒤에 남는 증기",
    description: "발효하지 않은 녹차와 네롤리, 담담한 건초의 인상을 오일 베이스에 담았습니다. 디퓨저나 손바닥에 한 방울이면, 책상 위의 공기가 바뀝니다.",
    ingredients: "호호바씨오일, 향료(네롤리, 티리프, 팔마로사, 건초 앱솔루트). 원액이므로 피부에 바를 때는 반드시 희석합니다.",
    usage: "디퓨저에는 서너 방울, 몸에는 바디 오일 한 숟갈에 한 방울을 섞어 사용합니다. 눈에 들어가지 않도록 주의해 주세요.",
    image: "assets/images/product-body-oil.webp",
    featured: false,
    sizes: [
      { label: "15mL", price: 52000 }
    ]
  },
  {
    id: "rice-scalp-serum",
    name: "볶은 쌀 스칼프 세럼",
    category: "hair",
    categoryLabel: "헤어",
    tagline: "두피가 숨 쉴 자리를 돌려 주는 제형",
    description: "볶은 쌀뜨물에서 얻은 보습 성분과 가벼운 오일이 두피를 무겁게 덮지 않습니다. 머리를 감지 않은 날, 가르마를 따라 한 줄만 넣어도 정돈됩니다.",
    ingredients: "쌀추출물, 글리세린, 나이아신아마이드, 판테놀, 페퍼민트오일(극소량), 녹차추출물, 에칠헥실글리세린.",
    usage: "수건으로 물기를 뺀 두피에 스포이드로 가르마를 따라 떨어뜨리고, 손끝으로 천천히 누릅니다. 매일 쓸 필요는 없습니다.",
    image: "assets/images/product-serum.webp",
    featured: false,
    sizes: [
      { label: "50mL", price: 54000 }
    ]
  },
  {
    id: "cedar-shampoo",
    name: "부드러운 삼나무 샴푸",
    category: "hair",
    categoryLabel: "헤어",
    tagline: "씻고 나서도 머무는 나뭇결의 향",
    description: "순한 아미노산 계면활성제와 삼나무, 사이프러스의 낮은 향이 머리를 깨끗이 하면서도 건조하게 만들지 않습니다. 거품은 부드럽고 헹굼이 짧습니다.",
    ingredients: "정제수, 소듐코코일이세티오네이트, 코카미도프로필베타인, 판테놀, 삼나무잎오일, 사이프러스오일, 글리세린, 구아하이드록시프로필트리모늄클로라이드.",
    usage: "젖은 모발에 펌프 두 번을 풀어 두피 위주로 씻고, 거품을 모발 끝으로 쓸어 내립니다. 한 번이면 충분합니다.",
    image: "assets/images/product-shampoo.webp",
    featured: false,
    sizes: [
      { label: "200mL", price: 38000 },
      { label: "500mL", price: 72000 }
    ]
  },
  {
    id: "chrysanthemum-conditioner",
    name: "들국화 컨디셔너",
    category: "hair",
    categoryLabel: "헤어",
    tagline: "헹군 뒤에도 무게를 남기지 않는 결",
    description: "들국화 추출물과 가벼운 에스터 오일이 모발 표면에만 머물도록 만들었습니다. 샴푸의 삼나무 향을 덮지 않고, 빗질이 한결 편해집니다.",
    ingredients: "정제수, 세테아릴알코올, 베헨트리모늄클로라이드, 들국화추출물, 아르간오일, 판테놀, 젖산.",
    usage: "샴푸 후 모발 중간부터 끝까지 바르고 잠시 두었다가 헹굽니다. 두피에 직접 문지르지 않아도 됩니다.",
    image: "assets/images/product-hand-balm.webp",
    featured: false,
    sizes: [
      { label: "200mL", price: 38000 },
      { label: "500mL", price: 72000 }
    ]
  }
];

MYRTE.formatPrice = function (n) {
  return n.toLocaleString("ko-KR") + "원";
};

MYRTE.getProduct = function (id) {
  return MYRTE.products.find(function (p) { return p.id === id; }) || null;
};

MYRTE.related = function (product, count) {
  count = count || 3;
  var same = MYRTE.products.filter(function (p) {
    return p.category === product.category && p.id !== product.id;
  });
  var rest = MYRTE.products.filter(function (p) {
    return p.category !== product.category && p.id !== product.id;
  });
  return same.concat(rest).slice(0, count);
};
