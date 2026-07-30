import { Country } from '../types';

export const ALL_COUNTRIES: Country[] = [
  // --- [ 하 (Easy): 가장 대중적인 40개국 ] ---
  {
    code: 'kr',
    name: '대한민국',
    capital: '서울',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇰🇷',
    colors: ['#c60c30', '#003478'],
    funFact: '한강을 중심으로 한강의 기적을 이룬 대한민국의 심장부입니다.'
  },
  {
    code: 'us',
    name: '미국',
    capital: '워싱턴 D.C.',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇺🇸',
    colors: ['#b22234', '#3c3b6e'],
    funFact: '초기 대통령 조지 워싱턴의 이름을 딴 특별 행정구역입니다.'
  },
  {
    code: 'jp',
    name: '일본',
    capital: '도쿄',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇯🇵',
    colors: ['#bc002d', '#ffffff'],
    funFact: '세계에서 가장 인구가 많은 광역 도시권을 형성하고 있습니다.'
  },
  {
    code: 'cn',
    name: '중국',
    capital: '베이징',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇨🇳',
    colors: ['#ee1c25', '#ffff00'],
    funFact: '자금성과 만리장성의 관문이 있는 3천 년 역사의 고도입니다.'
  },
  {
    code: 'gb',
    name: '영국',
    capital: '런던',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇬🇧',
    colors: ['#012169', '#c8102e'],
    funFact: '템스강을 중심으로 빅벤과 타워브리지 등 상징적인 명소가 가득합니다.'
  },
  {
    code: 'fr',
    name: '프랑스',
    capital: '파리',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇫🇷',
    colors: ['#002395', '#ed2939'],
    funFact: '에펠탑과 루브르 박물관이 있는 세계 최고의 문화 예술 도시입니다.'
  },
  {
    code: 'de',
    name: '독일',
    capital: '베를린',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇩🇪',
    colors: ['#000000', '#dd0000'],
    funFact: '브란덴부르크 문과 통일의 역사를 품은 창의적인 예술 도시입니다.'
  },
  {
    code: 'it',
    name: '이탈리아',
    capital: '로마',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇮🇹',
    colors: ['#009246', '#ce2b37'],
    funFact: '도시 전체가 거대한 야외 박물관이라 불리는 영원의 도시입니다.'
  },
  {
    code: 'ca',
    name: '캐나다',
    capital: '오타와',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇨🇦',
    colors: ['#ff0000', '#ffffff'],
    funFact: '영어와 프랑스어가 공존하는 리도 운하 도시입니다.'
  },
  {
    code: 'au',
    name: '호주',
    capital: '캔버라',
    continent: '오세아니아',
    difficulty: 'easy',
    flagEmoji: '🇦🇺',
    colors: ['#00008b', '#ff8c00'],
    funFact: '시드니와 멜버른의 수도 유치 경쟁 끝에 탄생한 계획도시입니다.'
  },
  {
    code: 'ru',
    name: '러시아',
    capital: '모스크바',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇷🇺',
    colors: ['#0039a6', '#d52b1e'],
    funFact: '붉은 광장과 화려한 양파 모양 성 바실리 대성당이 상징입니다.'
  },
  {
    code: 'es',
    name: '스페인',
    capital: '마드리드',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇪🇸',
    colors: ['#aa151b', '#f1bf00'],
    funFact: '프라도 박물관과 열정적인 플라멩코, 태양의 광장 푸에르타 델 솔이 있습니다.'
  },
  {
    code: 'br',
    name: '브라질',
    capital: '브라질리아',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇧🇷',
    colors: ['#009739', '#fedf00'],
    funFact: '상공에서 보면 거대한 비행기 모양으로 만들어진 현대 계획도시입니다.'
  },
  {
    code: 'in',
    name: '인도',
    capital: '뉴델리',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇮🇳',
    colors: ['#ff9933', '#138808'],
    funFact: '다양한 종교와 수천 년 역사가 현대적 건물과 공존하는 중심지입니다.'
  },
  {
    code: 'mx',
    name: '멕시코',
    capital: '멕시코시티',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇲🇽',
    colors: ['#006847', '#ce1126'],
    funFact: '고대 아즈텍 문명 테노치티틀란 호수 위에 세워진 거대 고원 도시입니다.'
  },
  {
    code: 'eg',
    name: '이집트',
    capital: '카이로',
    continent: '아프리카',
    difficulty: 'easy',
    flagEmoji: '🇪🇬',
    colors: ['#ce1126', '#000000'],
    funFact: '나일강 유역에 위치한 천 개의 첨탑의 도시이자 피라미드의 관문입니다.'
  },
  {
    code: 'th',
    name: '태국',
    capital: '방콕',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇹🇭',
    colors: ['#a51931', '#2d2a4a'],
    funFact: '현지 공식 명칭은 세계에서 가장 긴 이름인 천사의 도시 크룽테프입니다.'
  },
  {
    code: 'vn',
    name: '베트남',
    capital: '하노이',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇻🇳',
    colors: ['#da251d', '#ffff00'],
    funFact: '천 년의 역사를 지닌 홍강 삼각주의 명소이자 호치민 묘소가 있는 곳입니다.'
  },
  {
    code: 'ch',
    name: '스위스',
    capital: '베른',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇨🇭',
    colors: ['#ff0000', '#ffffff'],
    funFact: '아레강이 환상적으로 감싸고 흐르는 중세 유네스코 세계유산 도시입니다.'
  },
  {
    code: 'nl',
    name: '네덜란드',
    capital: '암스테르담',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇳🇱',
    colors: ['#ae1c28', '#21468b'],
    funFact: '거미줄 같은 운하와 자전거, 튤립이 어우러진 자유로운 분위기의 수도입니다.'
  },
  {
    code: 'gr',
    name: '그리스',
    capital: '아테네',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇬🇷',
    colors: ['#0d5eaf', '#ffffff'],
    funFact: '파르테논 신전이 우뚝 솟은 서구 민주주의와 서양 철학의 요람입니다.'
  },
  {
    code: 'tr',
    name: '튀르키예',
    capital: '앙카라',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇹🇷',
    colors: ['#e30a17', '#ffffff'],
    funFact: '이스탄불로 착각하기 쉽지만, 아나톨리아 고원 중심에 위치한 실제 수도입니다.'
  },
  {
    code: 'ph',
    name: '필리핀',
    capital: '마닐라',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇵🇭',
    colors: ['#0038a8', '#ce1126'],
    funFact: '스페인 통치 시절의 성곽 도시 인트라무로스가 남아있는 역사적 수도입니다.'
  },
  {
    code: 'id',
    name: '인도네시아',
    capital: '자카르타',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇮🇩',
    colors: ['#ff0000', '#ffffff'],
    funFact: '자바섬 북부 해안에 위치한 동남아시아 최대 규모의 메트로폴리스입니다.'
  },
  {
    code: 'sg',
    name: '싱가포르',
    capital: '싱가포르',
    continent: '아시아',
    difficulty: 'easy',
    flagEmoji: '🇸🇬',
    colors: ['#ef3340', '#ffffff'],
    funFact: '도시 국가이므로 국가명과 수도명이 같습니다. 머라이언 파크가 유명합니다.'
  },
  {
    code: 'ar',
    name: '아르헨티나',
    capital: '부에노스아이레스',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇦🇷',
    colors: ['#74acdf', '#f6b40e'],
    funFact: '남미의 파리라 불리는 탱고와 열정, 카르로스 가르델의 홈타운입니다.'
  },
  {
    code: 'cl',
    name: '칠레',
    capital: '산티아고',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇨🇱',
    colors: ['#0039a6', '#d52b1e'],
    funFact: '만년설이 덮인 웅장한 안데스산맥에 둘러싸인 분지 도시입니다.'
  },
  {
    code: 'pe',
    name: '페루',
    capital: '리마',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇵🇪',
    colors: ['#d91023', '#ffffff'],
    funFact: '태평양 연안 사막 절벽에 건설된 남미 미식 메카이자 왕들의 도시입니다.'
  },
  {
    code: 'co',
    name: '콜롬비아',
    capital: '보고타',
    continent: '아메리카',
    difficulty: 'easy',
    flagEmoji: '🇨🇴',
    colors: ['#fcd116', '#003893'],
    funFact: '해발 2,640m 안데스 고원에 위치한 남미의 아테네로 불리는 도시입니다.'
  },
  {
    code: 'se',
    name: '스웨덴',
    capital: '스톡홀름',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇸🇪',
    colors: ['#006aa7', '#fecc00'],
    funFact: '14개의 섬으로 연결되어 북유럽의 베네치아로 불리는 노벨상의 도시입니다.'
  },
  {
    code: 'no',
    name: '노르웨이',
    capital: '오슬로',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇳🇴',
    colors: ['#ba0c2f', '#00205b'],
    funFact: '피오르 안쪽에 안락하게 자리 잡은 노벨 평화상 시상식의 무대입니다.'
  },
  {
    code: 'fi',
    name: '핀란드',
    capital: '헬싱키',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇫🇮',
    colors: ['#002f6c', '#ffffff'],
    funFact: '발트해의 처녀라 불리는 백야와 사우나, 디자인 카탈로그 같은 도시입니다.'
  },
  {
    code: 'dk',
    name: '덴마크',
    capital: '코펜하겐',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇩🇰',
    colors: ['#c60c30', '#ffffff'],
    funFact: '인어공주 동상과 동화 같은 뉘하운 항구가 있는 행복 지수 최고의 수도입니다.'
  },
  {
    code: 'at',
    name: '오스트리아',
    capital: '비엔나',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇦🇹',
    colors: ['#ed2939', '#ffffff'],
    funFact: '모차르트, 베토벤, 슈베르트가 활동한 세계적인 음악과 카페의 도시입니다.'
  },
  {
    code: 'be',
    name: '벨기에',
    capital: '브뤼셀',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇧🇪',
    colors: ['#000000', '#ffd100'],
    funFact: '유럽연합(EU) 본부와 그랑플라스 광장, 와플과 초콜릿의 본고장입니다.'
  },
  {
    code: 'pt',
    name: '포르투갈',
    capital: '리스본',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇵🇹',
    colors: ['#046a38', '#da291c'],
    funFact: '노란 트램과 언덕 위의 파스텔톤 집들이 테주강을 내려다보는 항구입니다.'
  },
  {
    code: 'pl',
    name: '폴란드',
    capital: '바르샤바',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇵🇱',
    colors: ['#dc143c', '#ffffff'],
    funFact: '2차 대전 중 완파된 후 시민들의 기억과 도면으로 벽돌 하나까지 완벽 복원된 도시입니다.'
  },
  {
    code: 'ie',
    name: '아일랜드',
    capital: '더블린',
    continent: '유럽',
    difficulty: 'easy',
    flagEmoji: '🇮🇪',
    colors: ['#169b62', '#ff883e'],
    funFact: '기네스 맥주와 템플 바, 제임스 조이스의 문학적 감성이 살아있는 곳입니다.'
  },
  {
    code: 'nz',
    name: '뉴질랜드',
    capital: '웰링턴',
    continent: '오세아니아',
    difficulty: 'easy',
    flagEmoji: '🇳🇿',
    colors: ['#00247d', '#cc142b'],
    funFact: '오클랜드가 아니며, 세계에서 가장 남쪽에 위치한 수도이자 바람의 도시입니다.'
  },
  {
    code: 'za',
    name: '남아프리카 공화국',
    capital: '프리토리아',
    continent: '아프리카',
    difficulty: 'easy',
    flagEmoji: '🇿🇦',
    colors: ['#007749', '#e03c31'],
    funFact: '행정 수도는 프리토리아, 입법 수도는 케이프타운, 사법 수도는 블룸폰테인입니다.'
  },

  // --- [ 중 (Medium): 보통 대중적인 70개국 ] ---
  {
    code: 'my',
    name: '말레이시아',
    capital: '쿠알라룸푸르',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇲🇾',
    colors: ['#010066', '#cc0000'],
    funFact: '페트로나스 트윈 타워가 상징인 진흙 강구라는 뜻의 열대 메트로폴리스입니다.'
  },
  {
    code: 'sa',
    name: '사우디아라비아',
    capital: '리야드',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇸🇦',
    colors: ['#006c35', '#ffffff'],
    funFact: '아라비아반도 중앙 사막에 위치하며 정원이라는 뜻을 가진 거대 수도입니다.'
  },
  {
    code: 'ae',
    name: '아랍에미리트',
    capital: '아부다비',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇦🇪',
    colors: ['#00732f', '#ff0000'],
    funFact: '두바이가 최대 도시지만, 실제 정치 및 오일 머니의 중심 수도는 아부다비입니다.'
  },
  {
    code: 'il',
    name: '이스라엘',
    capital: '예루살렘',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇮🇱',
    colors: ['#0038b8', '#ffffff'],
    funFact: '유대교, 기독교, 이슬람교 3대 유일신 종교의 성지가 모여 있는 고대 도시입니다.'
  },
  {
    code: 'kz',
    name: '카자흐스탄',
    capital: '아스타나',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇰🇿',
    colors: ['#00afca', '#fec50c'],
    funFact: '한때 누르술탄으로 불렸으나 다시 원래 이름인 아스타나(수도라는 뜻)로 돌아왔습니다.'
  },
  {
    code: 'uz',
    name: '우즈베키스탄',
    capital: '타슈켄트',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇺🇿',
    colors: ['#0099b5', '#ce1126'],
    funFact: '실크로드의 교차로이자 돌의 도시라는 뜻을 가진 중앙아시아 최대 도시입니다.'
  },
  {
    code: 'mn',
    name: '몽골',
    capital: '울란바토르',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇲🇳',
    colors: ['#da2032', '#0066b3'],
    funFact: '붉은 영웅이라는 뜻을 가졌으며, 세계에서 평균 기온이 가장 낮은 수도입니다.'
  },
  {
    code: 'pk',
    name: '파키스탄',
    capital: '이슬라마바드',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇵🇰',
    colors: ['#01411c', '#ffffff'],
    funFact: '이슬람의 도시라는 뜻을 가진 1960년대에 건설된 아름다운 계획수도입니다.'
  },
  {
    code: 'bd',
    name: '방글라데시',
    capital: '다카',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇧🇩',
    colors: ['#006a4e', '#f42a41'],
    funFact: '세계에서 인구 밀도가 가장 높은 도시이자 수십만 대의 인력거 리클샤의 도시입니다.'
  },
  {
    code: 'np',
    name: '네팔',
    capital: '카트만두',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇳🇵',
    colors: ['#dc143c', '#003893'],
    funFact: '히말라야 산맥 아래 위치하며 사람보다 신이 많고 집보다 사원이 많다는 성도입니다.'
  },
  {
    code: 'lk',
    name: '스리랑카',
    capital: '스리자야와르데네푸라코테',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇱🇰',
    colors: ['#8d153a', '#ffbe29'],
    funFact: '콜롬보 인근에 위치한 세계에서 이름이 가장 긴 수도 중 하나입니다.'
  },
  {
    code: 'mm',
    name: '미얀마',
    capital: '네피도',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇲🇲',
    colors: ['#fecb00', '#34b233'],
    funFact: '2005년 양곤에서 내륙 정글 한가운데로 이전한 왕들의 거처라는 뜻의 계획수도입니다.'
  },
  {
    code: 'kh',
    name: '캄보디아',
    capital: '프놈펜',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇰🇭',
    colors: ['#032ea1', '#e00025'],
    funFact: '메콩강과 톤레삽강이 합류하는 지점에 위치한 한때 동양의 진주라 불린 항구입니다.'
  },
  {
    code: 'la',
    name: '라오스',
    capital: '비엔티안',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇱🇦',
    colors: ['#ce1126', '#002868'],
    funFact: '메콩강을 바로 사이에 두고 태국 국경과 마주보고 있는 여유로운 샌달우드의 도시입니다.'
  },
  {
    code: 'iq',
    name: '이라크',
    capital: '바그다드',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇮🇶',
    colors: ['#ce1126', '#007a3d'],
    funFact: '티그리스강 연안에 위치한 아라비안나이트 천일야화의 무대였던 역사적 고도입니다.'
  },
  {
    code: 'ir',
    name: '이란',
    capital: '테헤란',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇮🇷',
    colors: ['#239f40', '#da0000'],
    funFact: '엘부르즈 산맥 남쪽 기슭에 위치한 페르시아 문명과 현대가 만나는 중심지입니다.'
  },
  {
    code: 'qa',
    name: '카타르',
    capital: '도하',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇶🇦',
    colors: ['#8d1b3d', '#ffffff'],
    funFact: '페르시아만 연안에 초고층 스카이라인과 인공섬이 펼쳐진 2022 월드컵 개최 도시입니다.'
  },
  {
    code: 'kw',
    name: '쿠웨이트',
    capital: '쿠웨이트시티',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇰🇼',
    colors: ['#007a3d', '#ce1126'],
    funFact: '페르시아만 연안의 쿠웨이트 타워가 상징인 부유한 해양 도시 국가입니다.'
  },
  {
    code: 'jo',
    name: '요르단',
    capital: '암만',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇯🇴',
    colors: ['#007a3d', '#ce1126'],
    funFact: '로마 시대의 고대 유적과 하얀 석회암 건물들이 언덕을 따라 끝없이 펼쳐진 도시입니다.'
  },
  {
    code: 'lb',
    name: '레바논',
    capital: '베이루트',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇱🇧',
    colors: ['#ed1c24', '#00a651'],
    funFact: '지중해 연안에 위치해 한때 중동의 파리라 불렸던 아름다운 항구 도시입니다.'
  },
  {
    code: 'om',
    name: '오만',
    capital: '무스카트',
    continent: '아시아',
    difficulty: 'medium',
    flagEmoji: '🇴🇲',
    colors: ['#db161b', '#008000'],
    funFact: '아라비아해와 험준한 바위산 사이에 위치한 전통 아랍의 매력을 보존한 항구입니다.'
  },
  {
    code: 'cz',
    name: '체코',
    capital: '프라하',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇨🇿',
    colors: ['#11457e', '#d7141a'],
    funFact: '블타바강과 카렐교, 붉은 지붕들이 어우러진 백 개의 첨탑의 낭만 도시입니다.'
  },
  {
    code: 'hu',
    name: '헝가리',
    capital: '부다페스트',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇭🇺',
    colors: ['#ce2939', '#477050'],
    funFact: '도나우강의 진주로 불리며 서쪽의 부다와 동쪽의 페스트가 합쳐진 야경의 왕국입니다.'
  },
  {
    code: 'ro',
    name: '루마니아',
    capital: '부쿠레슈티',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇷🇴',
    colors: ['#002b7f', '#fcd116'],
    funFact: '기쁨의 도시라는 뜻을 가졌으며 세계에서 두 번째로 큰 단일 건물 인민 궁전이 있습니다.'
  },
  {
    code: 'bg',
    name: '불가리아',
    capital: '소피아',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇧🇬',
    colors: ['#00966e', '#d62612'],
    funFact: '비토샤 산 기슭에 위치하며 지혜를 뜻하는 7천 년 역사를 가진 고도입니다.'
  },
  {
    code: 'hr',
    name: '크로아티아',
    capital: '자그레브',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇭🇷',
    colors: ['#ff0000', '#171796'],
    funFact: '두브로브니크가 유명하지만 수도는 빨간 하트와 성 마르코 성당 지붕이 유명한 내륙 도시입니다.'
  },
  {
    code: 'rs',
    name: '세르비아',
    capital: '베오그라드',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇷🇸',
    colors: ['#c6363c', '#0c4076'],
    funFact: '다뉴브강과 사바강이 만나는 요충지에 세워진 하얀 도시라는 뜻의 발칸 중심지입니다.'
  },
  {
    code: 'sk',
    name: '슬로바키아',
    capital: '브라티슬라바',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇸🇰',
    colors: ['#0b4ea2', '#ee1c25'],
    funFact: '오스트리아 비엔나와 배로 1시간 거리에 있으며 두 국가 국경과 접한 유일한 수도입니다.'
  },
  {
    code: 'si',
    name: '슬로베니아',
    capital: '류블랴나',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇸🇮',
    colors: ['#005da4', '#ed1c24'],
    funFact: '이름 자체가 사랑스럽다라는 뜻과 유사하며 용의 다리가 유명한 녹색 도시입니다.'
  },
  {
    code: 'ua',
    name: '우크라이나',
    capital: '키이우',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇺🇦',
    colors: ['#0057b7', '#ffd700'],
    funFact: '드니프로강 연안에 위치한 슬라브 정교회 문명의 발상지이자 황금 도금 성당의 도시입니다.'
  },
  {
    code: 'is',
    name: '아이슬란드',
    capital: '레이캬비크',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇮🇸',
    colors: ['#02529c', '#dc1e35'],
    funFact: '세계에서 가장 북쪽에 위치한 수도로, 연기 나는 항구라는 뜻을 가졌습니다.'
  },
  {
    code: 'ee',
    name: '에스토니아',
    capital: '탈린',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇪🇪',
    colors: ['#0072ce', '#000000'],
    funFact: '중세 북유럽 한자 동맹의 구시가지가 완벽히 보존된 IT 강국의 수도입니다.'
  },
  {
    code: 'lv',
    name: '라트비아',
    capital: '리가',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇱🇻',
    colors: ['#9e3039', '#ffffff'],
    funFact: '발트해의 파리라 불리며 아르누보 양식 건축물이 세계에서 가장 밀집해 있습니다.'
  },
  {
    code: 'lt',
    name: '리투아니아',
    capital: '빌뉴스',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇱🇹',
    colors: ['#fdb913', '#006a44'],
    funFact: '네리스강 연안에 바로크 양식 성당들이 우아하게 서 있는 발트 3국 최대 도시입니다.'
  },
  {
    code: 'lu',
    name: '룩셈부르크',
    capital: '룩셈부르크',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇱🇺',
    colors: ['#00a3e0', '#ef3340'],
    funFact: '절벽 위에 요새처럼 지어진 북부의 지브롤터라 불리는 부유한 대공국입니다.'
  },
  {
    code: 'mc',
    name: '모나코',
    capital: '모나코',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇲🇨',
    colors: ['#ce1126', '#ffffff'],
    funFact: '바티칸 다음으로 세계에서 두 번째로 작은 나라이자 F1 그랑프리의 요람입니다.'
  },
  {
    code: 'va',
    name: '바티칸 시국',
    capital: '바티칸 시국',
    continent: '유럽',
    difficulty: 'medium',
    flagEmoji: '🇻🇦',
    colors: ['#ffe000', '#ffffff'],
    funFact: '이탈리아 로마 안에 있는 세계에서 가장 작은 영토와 팝의 카톨릭 성지입니다.'
  },
  {
    code: 'ma',
    name: '모로코',
    capital: '라바트',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇲🇦',
    colors: ['#c1272d', '#006233'],
    funFact: '카사블랑카나 마라케시가 유명하지만, 실제 수도는 대서양 연안의 정돈된 백색 도시 라바트입니다.'
  },
  {
    code: 'eg',
    name: '이집트',
    capital: '카이로',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇪🇬',
    colors: ['#ce1126', '#000000'],
    funFact: '나일강을 품고 있으며 아랍 세계에서 가장 거대한 천 개의 첨탑의 도시입니다.'
  },
  {
    code: 'ke',
    name: '케냐',
    capital: '나이로비',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇰🇪',
    colors: ['#000000', '#bb0000'],
    funFact: '마사이어로 시원한 물이라는 뜻이며 도심 바로 옆에 야생 국립공원이 있는 유일한 수도입니다.'
  },
  {
    code: 'ng',
    name: '나이지리아',
    capital: '아부자',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇳🇬',
    colors: ['#008751', '#ffffff'],
    funFact: '라고스의 극심한 인구 밀집을 해소하기 위해 국토 중앙에 1991년 건설된 계획수도입니다.'
  },
  {
    code: 'et',
    name: '에티오피아',
    capital: '아디스아바바',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇪🇹',
    colors: ['#078930', '#fcdd09'],
    funFact: '새로운 꽃이라는 뜻을 가졌으며 아프리카 연합(AU) 본부가 있는 아프리카의 외교 수도입니다.'
  },
  {
    code: 'tz',
    name: '탄자니아',
    capital: '도도마',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇹🇿',
    colors: ['#1eb53a', '#00a3dd'],
    funFact: '최대 도시 다르에스살람에서 내륙 중심부로 이전한 정적이고 평화로운 공식 수도입니다.'
  },
  {
    code: 'gh',
    name: '가나',
    capital: '아크라',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇬🇭',
    colors: ['#ce1126', '#fcd116'],
    funFact: '기니만 대서양 연안에 위치한 서부 아프리카의 활기찬 경제 및 문화 중심지입니다.'
  },
  {
    code: 'sn',
    name: '세네갈',
    capital: '다카르',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇸🇳',
    colors: ['#00853f', '#fdef42'],
    funFact: '아프리카 대륙 최서단 베르데 곶에 위치하며 전설적인 파리-다카르 랠리의 종착지였습니다.'
  },
  {
    code: 'tn',
    name: '튀니지',
    capital: '튀니스',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇹🇳',
    colors: ['#e70013', '#ffffff'],
    funFact: '고대 페니키아의 카르타고 유적이 바로 인접해 있는 지중해의 오리엔탈 항구입니다.'
  },
  {
    code: 'dz',
    name: '알제리',
    capital: '알제',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇩🇿',
    colors: ['#006233', '#ffffff'],
    funFact: '지중해를 향해 계단식으로 지어진 하얀 건물들 덕분에 알제라 블랑슈(하얀 알제)로 불립니다.'
  },
  {
    code: 'ug',
    name: '우간다',
    capital: '캄팔라',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇺🇬',
    colors: ['#fcdc04', '#d90000'],
    funFact: '임팔라 산양의 언덕이라는 뜻을 가진 빅토리아 호수 인근의 7개 언덕 위 도시입니다.'
  },
  {
    code: 'zw',
    name: '짐바브웨',
    capital: '하라레',
    continent: '아프리카',
    difficulty: 'medium',
    flagEmoji: '🇿🇼',
    colors: ['#007a3d', '#ffd200'],
    funFact: '봄이면 보라색 자카란다 꽃나무가 온 도시를 보랏빛으로 물들이는 고원 도시입니다.'
  },
  {
    code: 'cu',
    name: '쿠바',
    capital: '아바나',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇨🇺',
    colors: ['#002a8f', '#cf142b'],
    funFact: '1950년대 클래식 올드 카와 식민지 시절의 다채로운 파스텔 건물들이 정지된 듯한 매력의 항구입니다.'
  },
  {
    code: 'jm',
    name: '자메이카',
    capital: '킹스턴',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇯🇲',
    colors: ['#007749', '#fed100'],
    funFact: '레게 음악의 황제 밥 마리의 고향이자 블루마운틴 커피의 본고장인 카리브해 항구입니다.'
  },
  {
    code: 'do',
    name: '도미니카 공화국',
    capital: '산토도밍고',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇩🇴',
    colors: ['#ce1126', '#002d62'],
    funFact: '아메리카 대륙 최초의 성당, 최초의 대학, 최초의 병원이 지어진 신대륙 가장 오래된 유럽풍 도시입니다.'
  },
  {
    code: 'cr',
    name: '코스타리카',
    capital: '산호세',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇨🇷',
    colors: ['#ce1126', '#002b7f'],
    funFact: '군대가 없는 친환경 에코 국가의 고원 분지에 위치한 쾌적한 수도입니다.'
  },
  {
    code: 'pa',
    name: '파나마',
    capital: '파나마시티',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇵🇦',
    colors: ['#da121a', '#005293'],
    funFact: '태평양과 대서양을 잇는 파나마 운하와 마이애미를 연상시키는 고층 빌딩 숲이 어우러진 도시입니다.'
  },
  {
    code: 'ec',
    name: '에콰도르',
    capital: '키토',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇪🇨',
    colors: ['#ffd100', '#0072ce'],
    funFact: '해발 2,850m 피친차 화산 기슭에 위치하며 세계에서 가장 보존이 잘 된 식민지 구시가지를 자랑합니다.'
  },
  {
    code: 've',
    name: '베네수엘라',
    capital: '카라카스',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇻🇪',
    colors: ['#fce300', '#0038a8'],
    funFact: '아빌라 산맥이 병풍처럼 감싸고 있는 1년 내내 봄 날씨를 자랑하는 카리브 연안 고원 도시입니다.'
  },
  {
    code: 'uy',
    name: '우루과이',
    capital: '몬테비데오',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇺🇾',
    colors: ['#0038a8', '#f1b300'],
    funFact: '나는 산을 보았다라는 뜻을 가졌으며 세계 최초의 축구 월드컵이 열렸던 평화로운 해변 도시입니다.'
  },
  {
    code: 'py',
    name: '파라과이',
    capital: '아순시온',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇵🇾',
    colors: ['#d52b1e', '#0038a8'],
    funFact: '성모 승천일을 기념해 명명되었으며 남미에서 가장 오래된 스페인 정착지 중 하나입니다.'
  },
  {
    code: 'bo',
    name: '볼리비아',
    capital: '수크레',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇧🇴',
    colors: ['#d52b1e', '#fbd800'],
    funFact: '행정 및 실질 수도는 해발 3,600m의 라파스이지만, 헌법상 공식 수도는 아름다운 백색 도시 수크레입니다.'
  },
  {
    code: 'gt',
    name: '과테말라',
    capital: '과테말라시티',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇬🇹',
    colors: ['#4997d0', '#ffffff'],
    funFact: '중앙아메리카에서 가장 큰 메트로폴리스이자 고대 마야 문명의 유산을 품고 있는 도시입니다.'
  },
  {
    code: 'hn',
    name: '온두라스',
    capital: '테구시갈파',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇭🇳',
    colors: ['#0073cf', '#ffffff'],
    funFact: '은의 언덕이라는 뜻을 가졌으며 산들에 둘러싸인 분지에 계단식으로 지어진 도시입니다.'
  },
  {
    code: 'sv',
    name: '엘살바도르',
    capital: '산살바도르',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇸🇻',
    colors: ['#0047ab', '#ffffff'],
    funFact: '구세주라는 뜻을 가졌으며 화산의 계계로 불리는 산살바도르 화산 아래 위치해 있습니다.'
  },
  {
    code: 'ni',
    name: '니카라과',
    capital: '마나과',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇳🇮',
    colors: ['#0067c6', '#ffffff'],
    funFact: '거대한 마나과 호수 남부 연안에 위치하며 물이 있는 곳이라는 뜻을 가졌습니다.'
  },
  {
    code: 'pg',
    name: '파푸아뉴기니',
    capital: '포트모르즈비',
    continent: '오세아니아',
    difficulty: 'medium',
    flagEmoji: '🇵🇬',
    colors: ['#ce1126', '#000000'],
    funFact: '800개가 넘는 부족과 언어가 공존하는 세계에서 가장 문화적 다양성이 높은 도시 중 하나입니다.'
  },
  {
    code: 'fj',
    name: '피지',
    capital: '수바',
    continent: '오세아니아',
    difficulty: 'medium',
    flagEmoji: '🇫🇯',
    colors: ['#68bde9', '#ce1126'],
    funFact: '남태평양 남태평양 제도에서 오클랜드 다음으로 큰 메트로폴리스이자 항구 중심지입니다.'
  },
  {
    code: 'bs',
    name: '바하마',
    capital: '나소',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇧🇸',
    colors: ['#00778b', '#ffc72c'],
    funFact: '18세기 해적들의 천국에서 오늘날 에메랄드빛 바다와 초호화 크루즈가 몰리는 천국으로 변신했습니다.'
  },
  {
    code: 'tt',
    name: '트리니다드 토바고',
    capital: '포트오브스페인',
    continent: '아메리카',
    difficulty: 'medium',
    flagEmoji: '🇹🇹',
    colors: ['#e00000', '#000000'],
    funFact: '세계 3대 카니발이자 스틸팬 악기와 칼립소 음악이 탄생한 열정의 카리브 수도입니다.'
  },

  // --- [ 상 (Hard): 가장 대중적이지 않은 80여 개국 ] ---
  {
    code: 'tv',
    name: '투발루',
    capital: '푸나푸티',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇹🇻',
    colors: ['#00247d', '#5b97d5'],
    funFact: '해수면 상승으로 국토가 물에 잠길 위기에 처해 있으며 폭이 가장 좁은 곳은 20미터에 불과한 환초 섬입니다.'
  },
  {
    code: 'vu',
    name: '바누아투',
    capital: '포트빌라',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇻🇺',
    colors: ['#d21034', '#009543'],
    funFact: '남태평양 83개 섬으로 이루어진 나라로 세계 행복 지수 1위에 자주 오르는 천혜의 자연 도시입니다.'
  },
  {
    code: 'nr',
    name: '나우루',
    capital: '야렌 (공식 수도 없음)',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇳🇷',
    colors: ['#002b7f', '#ffc61e'],
    funFact: '세계에서 유일하게 공식 수도가 없는 나라이며 정부 청사와 공항이 있는 야렌이 실질적 수도입니다.'
  },
  {
    code: 'ki',
    name: '키리바시',
    capital: '타라와',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇰🇮',
    colors: ['#e7323b', '#fcd116'],
    funFact: '날짜변경선이 지나며 세계에서 가장 먼저 새해의 아침 해를 맞이하는 고리 모양의 산호섬 수도입니다.'
  },
  {
    code: 'mh',
    name: '마셜 제도',
    capital: '마주로',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇲🇭',
    colors: ['#003893', '#dd7500'],
    funFact: '64개의 섬으로 구성된 고리 모양 환초로, 하늘에서 보면 얇은 진주 목걸이처럼 보입니다.'
  },
  {
    code: 'pw',
    name: '팔라우',
    capital: '응겔룰루마드',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇵🇼',
    colors: ['#0099db', '#ffde00'],
    funFact: '2006년 코로르에서 정글 속 바벨다옵 섬의 응겔룰루마드로 이전한 세계에서 인구가 가장 적은 수도입니다.'
  },
  {
    code: 'fm',
    name: '미크로네시아 연방',
    capital: '팔리키르',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇫🇲',
    colors: ['#75b2dd', '#ffffff'],
    funFact: '포나페 섬에 위치한 인구 5천 명 남짓의 평화로운 열대 우림 속 수도입니다.'
  },
  {
    code: 'to',
    name: '통가',
    capital: '누쿠알로파',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇹🇴',
    colors: ['#c10000', '#ffffff'],
    funFact: '사랑의 고장이라는 뜻을 가졌으며 남태평양에서 유일하게 식민 지배를 받지 않고 왕조를 유지한 왕국입니다.'
  },
  {
    code: 'ws',
    name: '사모아',
    capital: '아피아',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇼🇸',
    colors: ['#ce1126', '#002b7f'],
    funFact: '보물섬의 작가 로버트 루이스 스티븐슨이 노년을 보내고 영면한 아름다운 우폴루섬 항구입니다.'
  },
  {
    code: 'sb',
    name: '솔로몬 제도',
    capital: '호니아라',
    continent: '오세아니아',
    difficulty: 'hard',
    flagEmoji: '🇸🇧',
    colors: ['#0051ba', '#215b33'],
    funFact: '과달카날섬에 위치하며 제2차 세계 대전 태평양 전쟁의 격전지였던 역사적 항구입니다.'
  },
  {
    code: 'sz',
    name: '에스와티니',
    capital: '음바바네',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇿',
    colors: ['#3e5eb9', '#b10c24'],
    funFact: '구 스와질란드이며 행정 수도는 음바바네, 국왕이 거주하는 입법 수도는 로밤바입니다.'
  },
  {
    code: 'ls',
    name: '레소토',
    capital: '마세루',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇱🇸',
    colors: ['#002054', '#009543'],
    funFact: '국토 전체가 해발 1,000m 이상인 천공의 왕국 남아공 안쪽의 산악 국경에 위치해 있습니다.'
  },
  {
    code: 'km',
    name: '코모로',
    capital: '모로니',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇰🇲',
    colors: ['#3d8e33', '#ffc61e'],
    funFact: '불의 중심이라는 뜻을 가졌으며 인도양의 향료 섬이라 불리는 활화산 기슭의 백색 아랍풍 도시입니다.'
  },
  {
    code: 'st',
    name: '상투메 프린시페',
    capital: '상투메',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇹',
    colors: ['#12ad2b', '#d21034'],
    funFact: '적도와 본초 자오선(0도 0분)이 만나는 지점 가장 가까이에 있는 기니만의 초콜릿 섬 수도입니다.'
  },
  {
    code: 'cv',
    name: '카보베르데',
    capital: '프라이아',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇻',
    colors: ['#003893', '#cf2027'],
    funFact: '해변이라는 뜻의 포르투갈어에서 유래했으며 대서양 화산섬 산티아고에 위치한 모르나 음악의 고장입니다.'
  },
  {
    code: 'gw',
    name: '기니비사우',
    capital: '비사우',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇼',
    colors: ['#ce1126', '#009e49'],
    funFact: '제바 강 강구에 위치한 포르투갈 식민 양식과 분홍빛 야자수가 어우러진 조용한 아프리카 서안 수도입니다.'
  },
  {
    code: 'gq',
    name: '적도 기니',
    capital: '말라보',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇶',
    colors: ['#3e9a00', '#e32118'],
    funFact: '아프리카 본토가 아닌 카메룬 앞바다의 비오코 섬 화산 칼데라 연안에 위치한 스페인어권 수도입니다.'
  },
  {
    code: 'dj',
    name: '지부티',
    capital: '지부티시티',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇩🇯',
    colors: ['#6ab2e7', '#12ad2b'],
    funFact: '홍해와 아덴만이 만나는 전략적 요충지로 세계 각국의 해군 기지가 모여 있는 뜨거운 항구입니다.'
  },
  {
    code: 'er',
    name: '에리트레아',
    capital: '아스마라',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇪🇷',
    colors: ['#eb0433', '#00a651'],
    funFact: '해발 2,325m 고원에 위치하며 이탈리아 통치 시절의 모더니즘 및 아르데코 건축물이 도시 전체에 보존돼 있습니다.'
  },
  {
    code: 'bi',
    name: '부룬디',
    capital: '기테가',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇮',
    colors: ['#ce1126', '#1eb53a'],
    funFact: '2019년 최대 항구도시 부줌부라에서 국토 중앙에 위치한 역사적 고도 기테가로 수도를 이전했습니다.'
  },
  {
    code: 'rw',
    name: '르완다',
    capital: '키갈리',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇷🇼',
    colors: ['#00a1de', '#fad201'],
    funFact: '천 개의 언덕의 나라의 중심이자 아프리카에서 가장 싱가포르처럼 거리가 깨끗하고 비닐봉지 사용이 금지된 친환경 수도입니다.'
  },
  {
    code: 'mw',
    name: '말라위',
    capital: '릴롱궤',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇲🇼',
    colors: ['#000000', '#ce1126'],
    funFact: '아프리카의 따뜻한 심장이라 불리는 나라의 내륙 정원 도시로 구시가지와 현대적 신시가지로 나뉩니다.'
  },
  {
    code: 'zm',
    name: '잠비아',
    capital: '루사카',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇿🇲',
    colors: ['#198a00', '#ef7d00'],
    funFact: '해발 1,280m 고원에 위치해 사계절 온화하며 남부 아프리카 교통 및 상업의 요충지입니다.'
  },
  {
    code: 'bw',
    name: '보츠와나',
    capital: '가보로네',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇼',
    colors: ['#75aadb', '#000000'],
    funFact: '다이아몬드 산업을 바탕으로 아프리카에서 가장 부패가 적고 빠르게 성장한 현대적 평화 수도입니다.'
  },
  {
    code: 'na',
    name: '나미비아',
    capital: '빈트후크',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇳🇦',
    colors: ['#003580', '#ce1126'],
    funFact: '바람의 모퉁이라는 뜻을 가졌으며 독일식 고딕 교회와 아프리카 사막 정취가 기묘하게 어우러진 분지 도시입니다.'
  },
  {
    code: 'mr',
    name: '모리타니',
    capital: '누아크쇼트',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇲🇷',
    colors: ['#006233', '#ffc400'],
    funFact: '바람이 강하게 부는 곳이라는 뜻을 가졌으며 사하라 사막과 대서양 파도가 직접 만나는 사막 항구입니다.'
  },
  {
    code: 'ne',
    name: '니제르',
    capital: '니아메',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇳🇪',
    colors: ['#e05206', '#ffffff'],
    funFact: '니제르강을 따라 형성된 사하라 사막 남부 사헬 지대의 중심지이자 진흙 건축 양식이 돋보이는 도시입니다.'
  },
  {
    code: 'td',
    name: '차드',
    capital: '은자메나',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇹🇩',
    colors: ['#002664', '#c60c30'],
    funFact: '아랍어로 휴식의 장소라는 뜻을 가졌으며 샤리강과 로곤강이 만나는 국경 무역 중심지입니다.'
  },
  {
    code: 'ml',
    name: '말리',
    capital: '바마코',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇲🇱',
    colors: ['#14b53a', '#fcd116'],
    funFact: '악어의 강이라는 뜻을 가졌으며 서아프리카의 젖줄 니제르강을 가로지르는 음악과 예술의 도시입니다.'
  },
  {
    code: 'bf',
    name: '부르키나파소',
    capital: '와가두구',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇫',
    colors: ['#ef2b2d', '#009e49'],
    funFact: '아프리카에서 가장 발음하기 재미있고 리듬감 넘치는 이름 중 하나로, 아프리카 최대 영화제 FESPACO의 홈타운입니다.'
  },
  {
    code: 'bj',
    name: '베냉',
    capital: '포르토노보',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇯',
    colors: ['#008751', '#fcd116'],
    funFact: '최대 경제 도시는 코토누지만, 공식 헌법상 수도는 아프로-브라질리언 건축이 남아있는 포르토노보입니다.'
  },
  {
    code: 'tg',
    name: '토고',
    capital: '로메',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇹🇬',
    colors: ['#006a4e', '#ffce00'],
    funFact: '국경선 바로 앞에 해변이 펼쳐진 서아프리카 유일의 대서양 해변 휴양풍 수도입니다.'
  },
  {
    code: 'sl',
    name: '시에라리온',
    capital: '프리타운',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇱',
    colors: ['#1eb53a', '#ffffff'],
    funFact: '18세기 말 자유를 얻은 해방 노예들이 정착하여 세운 자유의 도시라는 뜻의 천연 항구입니다.'
  },
  {
    code: 'lr',
    name: '라이베리아',
    capital: '몬로비아',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇱🇷',
    colors: ['#bf0a30', '#002868'],
    funFact: '미국 제5대 대통령 제임스 먼로의 이름을 따서 명명된 아프리카 최초의 독립 공화국 수도입니다.'
  },
  {
    code: 'gm',
    name: '감비아',
    capital: '반줄',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇲',
    colors: ['#ce1126', '#0c1c8c'],
    funFact: '감비아강이 대서양으로 흘러드는 하구 성 마리 섬에 위치한 아프리카에서 가장 작은 수도 중 하나입니다.'
  },
  {
    code: 'gn',
    name: '기니',
    capital: '코나크리',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇳',
    colors: ['#ce1126', '#fcd116'],
    funFact: '칼룸 반도 끝자락에서 대서양으로 길게 뻗어 있으며 아프리카의 타악기 젬베 리듬이 살아있는 항구입니다.'
  },
  {
    code: 'ci',
    name: '코트디부아르',
    capital: '야무수크로',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇮',
    colors: ['#f77f00', '#009e60'],
    funFact: '실질적 중심 도시는 아비장이지만, 1983년 초대 대통령의 고향이자 세계 최대 바실리카 성당이 있는 야무수크로로 이전했습니다.'
  },
  {
    code: 'cm',
    name: '카메룬',
    capital: '야운데',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇲',
    colors: ['#007a5e', '#ce1126'],
    funFact: '해발 750m 칠성 언덕(7개의 언덕)으로 불리는 숲 속에 위치하여 최대 항구 두알라보다 날씨가 선선합니다.'
  },
  {
    code: 'ga',
    name: '가봉',
    capital: '리브르빌',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇦',
    colors: ['#009e60', '#fcd116'],
    funFact: '자유의 도시라는 뜻으로 1849년 해방 노예들이 정착하며 세웠으며 기름진 우림과 바다에 접해 있습니다.'
  },
  {
    code: 'cg',
    name: '콩고 공화국',
    capital: '브라자빌',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇬',
    colors: ['#009543', '#fbde4a'],
    funFact: '거대한 콩고강을 사이에 두고 콩고민주공화국의 수도 킨샤사 바로 맞은편에 위치한 세계에서 가장 가까운 이웃 수도입니다.'
  },
  {
    code: 'cd',
    name: '콩고민주공화국',
    capital: '킨샤사',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇩',
    colors: ['#007fff', '#ce1126'],
    funFact: '인구 1,500만 명이 넘는 파리를 제친 세계에서 가장 인구가 많은 프랑스어권 메트로폴리스입니다.'
  },
  {
    code: 'cf',
    name: '중앙아프리카 공화국',
    capital: '방기',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇨🇫',
    colors: ['#003082', '#ffce00'],
    funFact: '우방기강 연안에 위치하며 급류라는 뜻을 가진 대륙 정중앙의 강변 항구입니다.'
  },
  {
    code: 'ss',
    name: '남수단',
    capital: '주바',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇸',
    colors: ['#078930', '#da121a'],
    funFact: '백나일강 연안에 위치하며 2011년 수단으로부터 독립한 세계에서 가장 신생 독립국의 수도입니다.'
  },
  {
    code: 'sd',
    name: '수단',
    capital: '하르툼',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇩',
    colors: ['#d21034', '#007229'],
    funFact: '코끼리 코라는 뜻을 가졌으며 에티오피아에서 오는 청나일강과 우간다에서 오는 백나일강이 합류하는 거대한 교차점입니다.'
  },
  {
    code: 'so',
    name: '소말리아',
    capital: '모가디슈',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇴',
    colors: ['#418fde', '#ffffff'],
    funFact: '인도양 연안의 백색 진주라 불리며 수백 년 동안 동아프리카 해상 무역의 최고 전성기를 누렸던 고대 항구입니다.'
  },
  {
    code: 'mg',
    name: '마다가스카르',
    capital: '안타나나리보',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇲🇬',
    colors: ['#fc3d32', '#007e3a'],
    funFact: '천 명의 무사들의 도시라는 뜻을 가졌으며 바오밥나무와 여우원숭이 섬 중앙 고원에 계단식으로 세워져 있습니다.'
  },
  {
    code: 'mu',
    name: '모리셔스',
    capital: '포트루이스',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇲🇺',
    colors: ['#ea2839', '#1a206d'],
    funFact: '신이 모리셔스를 만들고 천국을 베꼈다는 톰 소여의 모험 작가 마크 트웨인의 극찬을 받은 인도양 휴양 섬 수도입니다.'
  },
  {
    code: 'sc',
    name: '세이셸',
    capital: '빅토리아',
    continent: '아프리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇨',
    colors: ['#003f87', '#d92223'],
    funFact: '인도양 마에 섬에 위치하며 영국의 빅토리아 여왕 이름을 딴 세계에서 가장 작은 영토의 수도 중 하나입니다.'
  },
  {
    code: 'li',
    name: '리히텐슈타인',
    capital: '파두츠',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇱🇮',
    colors: ['#002b7f', '#ce1126'],
    funFact: '스위스와 오스트리아 사이 알프스 산맥에 위치하며 낭떠러지 산 위에 국왕이 사는 파두츠 성이 마을을 굽어봅니다.'
  },
  {
    code: 'sm',
    name: '산마리노',
    capital: '산마리노',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇸🇲',
    colors: ['#5eb6e4', '#ffffff'],
    funFact: '서기 301년에 세워진 세계에서 가장 오래된 입헌 공화국으로 티타노 산 정상 요새에 얹혀 있는 중세 성채 도시입니다.'
  },
  {
    code: 'ad',
    name: '안도라',
    capital: '안도라라벨랴',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇦🇩',
    colors: ['#10069f', '#fed100'],
    funFact: '피레네 산맥 협곡 해발 1,023m에 위치한 유럽에서 가장 높은 곳에 있는 면세와 스키의 천국 수도입니다.'
  },
  {
    code: 'mt',
    name: '몰타',
    capital: '발레타',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇲🇹',
    colors: ['#cf142b', '#ffffff'],
    funFact: '성 요한 기사단이 16세기에 지은 거대한 요새 도시로 도시 전체가 꿀색 석회암 유네스코 세계유산입니다.'
  },
  {
    code: 'cy',
    name: '키프로스',
    capital: '니코시아',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇨🇾',
    colors: ['#d57800', '#4e5b31'],
    funFact: '세계에서 유일하게 남부(그리스계)와 북부(튀르키예계)로 분단된 국경선이 도시 한가운데를 가로지르는 수도입니다.'
  },
  {
    code: 'md',
    name: '몰도바',
    capital: '키시너우',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇲🇩',
    colors: ['#003da5', '#ffd100'],
    funFact: '우크라이나와 루마니아 사이에 위치하며 세계 최대 규모의 지하 와인 동굴 와이너리들이 있는 백색 호두나무 도시입니다.'
  },
  {
    code: 'mk',
    name: '북마케도니아',
    capital: '스코페',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇲🇰',
    colors: ['#ce2028', '#f8e92e'],
    funFact: '테레사 수녀가 태어난 곳으로, 바르다르 강을 중심으로 거대한 동상들과 고대 돌다리가 이색적인 조화를 이룹니다.'
  },
  {
    code: 'me',
    name: '몬테네그로',
    capital: '포드고리차',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇲🇪',
    colors: ['#c4001d', '#d4af3a'],
    funFact: '작은 언덕 아래라는 뜻을 가졌으며 5개의 강이 교차하는 푸른 계곡의 발칸 고도입니다.'
  },
  {
    code: 'ba',
    name: '보스니아 헤르체고비나',
    capital: '사라예보',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇧🇦',
    colors: ['#002395', '#fecb00'],
    funFact: '제1차 세계 대전의 도화선이 된 역사적 사건과 1984년 동계 올림픽이 열렸던 동서양 문화가 만나는 발칸의 예루살렘입니다.'
  },
  {
    code: 'al',
    name: '알바니아',
    capital: '티라나',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇦🇱',
    colors: ['#e41e20', '#000000'],
    funFact: '과거 공산주의 그늘을 벗고 시장 중심 스칸데르베그 광장 주변을 알록달록 무지개빛 원색 건물로 새로 칠한 재생 도시입니다.'
  },
  {
    code: 'by',
    name: '벨라루스',
    capital: '민스크',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇧🇾',
    colors: ['#c8313e', '#4f7e4f'],
    funFact: '스비슬라치강 연안에 위치하며 소비에트 모더니즘 광장과 웅장한 독립대로가 완벽하게 보존된 정밀한 계획도시입니다.'
  },
  {
    code: 'ge',
    name: '조지아',
    capital: '트빌리시',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇬🇪',
    colors: ['#ff0000', '#ffffff'],
    funFact: '따뜻한 온천이 있는 곳이라는 뜻을 가졌으며 코카서스 산맥 쿠라강 계곡에 8천 년 와인 역사가 숨쉬는 도시입니다.'
  },
  {
    code: 'am',
    name: '아르메니아',
    capital: '예레반',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇦🇲',
    colors: ['#d90012', '#f2a800'],
    funFact: '로마보다 29년 일찍 서기전 782년에 건설되었으며 붉은 응회암으로 지어져 분홍빛 도시라는 별명을 가졌습니다.'
  },
  {
    code: 'az',
    name: '아제르바이잔',
    capital: '바쿠',
    continent: '유럽',
    difficulty: 'hard',
    flagEmoji: '🇦🇿',
    colors: ['#0097c3', '#e00034'],
    funFact: '카스피해 연안에 위치하며 불의 도시답게 밤마다 불타오르는 듯한 LED 화염 타워가 고대 성벽과 공존합니다.'
  },
  {
    code: 'tm',
    name: '투르크메니스탄',
    capital: '아시가바트',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇹🇲',
    colors: ['#009965', '#d22630'],
    funFact: '사랑의 도시라는 뜻이며 세계에서 가장 흰색 대리석 건물이 많아 기네스북에 오른 사막의 오아시스 메트로폴리스입니다.'
  },
  {
    code: 'kg',
    name: '키르기스스탄',
    capital: '비슈케크',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇰🇬',
    colors: ['#e8112d', '#ffef00'],
    funFact: '천산 산맥 만년설 봉우리가 남쪽 하늘을 가득 채우는 아시아의 스위스라 불리는 유목 전통의 녹색 고도입니다.'
  },
  {
    code: 'tj',
    name: '타지키스탄',
    capital: '두шан베',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇹🇯',
    colors: ['#cc0000', '#006600'],
    funFact: '페르시아어로 월요일이라는 뜻으로, 과거 매주 월요일마다 거대한 실크로드 시장이 열렸던 곳에서 유래했습니다.'
  },
  {
    code: 'bt',
    name: '부탄',
    capital: '팀푸',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇧🇹',
    colors: ['#ff4e12', '#ffcc00'],
    funFact: '세계에서 유일하게 교통신호등이 단 하나도 없고 경찰이 수신호로 차량을 안내하는 행복 지수 중심의 산악 수도입니다.'
  },
  {
    code: 'mv',
    name: '몰디브',
    capital: '말레',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇲🇻',
    colors: ['#d21034', '#007e3a'],
    funFact: '인도양의 수상 부갈로 리조트들과 달리, 길이 1.7km 섬 하나에 20만 명이 모여 사는 세계 최고 밀집 수상 도시입니다.'
  },
  {
    code: 'tl',
    name: '동티모르',
    capital: '딜리',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇹🇱',
    colors: ['#dc241f', '#ffc726'],
    funFact: '21세기 첫 번째로 독립한 국가의 해안 수도로 언덕 위에서 바다를 품고 있는 거대한 크리스토 레이 예수상이 있습니다.'
  },
  {
    code: 'bn',
    name: '브루나이',
    capital: '반다르스리브가완',
    continent: '아시아',
    difficulty: 'hard',
    flagEmoji: '🇧🇳',
    colors: ['#f7e017', '#000000'],
    funFact: '풍부한 석유 자원을 바탕으로 세워진 황금색 돔 모스크와 수천 년 된 세계 최대 수상 마을 캄퐁 아예르가 공존합니다.'
  },
  {
    code: 'sr',
    name: '수리남',
    capital: '파라마리보',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇸🇷',
    colors: ['#377e3f', '#b40a2d'],
    funFact: '남미에서 유일하게 네덜란드어를 쓰며 네덜란드 식민풍 목조 건물들이 유네스코 유산으로 보존된 정글 연안 도시입니다.'
  },
  {
    code: 'gy',
    name: '가이아나',
    capital: '조지타운',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇾',
    colors: ['#009e49', '#ef3340'],
    funFact: '남미에서 유일하게 영어를 공용어로 사용하는 나라로 세계에서 가장 높은 목조 성당 세인트 조지 대성당이 있습니다.'
  },
  {
    code: 'bz',
    name: '벨리제',
    capital: '벨모판',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇿',
    colors: ['#171696', '#d90f19'],
    funFact: '1961년 허리케인 해티가 해안 수도 벨리즈시티를 파괴한 후 내륙 정글 안전지대에 새로 건설된 소규모 수도입니다.'
  },
  {
    code: 'bb',
    name: '바바도스',
    capital: '브리지타운',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇧🇧',
    colors: ['#00267f', '#ffc726'],
    funFact: '팝스타 리한나의 고향이자 카리브해에서 가장 영국적인 식민지 전통과 럼주 산업이 탄생한 해양 도시입니다.'
  },
  {
    code: 'lc',
    name: '세인트루시아',
    capital: '캐스트리스',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇱🇨',
    colors: ['#65cfff', '#fcd116'],
    funFact: '에메랄드 바다와 뾰족하게 솟아오른 쌍둥이 화산 피톤스 봉우리가 유명한 카리브해의 환상적인 허니문 수도입니다.'
  },
  {
    code: 'gd',
    name: '그레나다',
    capital: '세인트조지스',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇬🇩',
    colors: ['#ce1126', '#fcd116'],
    funFact: '육두구(넛맥)와 계피 향기가 바닷바람에 실려와 향료 섬이라 불리며 카리브해에서 가장 그림 같은 말굽 모양 항구입니다.'
  },
  {
    code: 'ag',
    name: '앤티가 바부다',
    capital: '세인트존스',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇦🇬',
    colors: ['#ce1126', '#0072ce'],
    funFact: '365개의 아름다운 해변이 있어 1년 매일 다른 해변을 즐길 수 있다는 카리브해 요트 매니들의 성지입니다.'
  },
  {
    code: 'vc',
    name: '세인트빈센트 그레나딘',
    capital: '킹스타운',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇻🇨',
    colors: ['#0072ce', '#fcd116'],
    funFact: '캐리비안의 해적 영화가 촬영된 돌길과 1765년 서반구에서 가장 먼저 세워진 역사적 식물원이 있는 항구입니다.'
  },
  {
    code: 'kn',
    name: '세인트키츠 네비스',
    capital: '바스테르',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇰🇳',
    colors: ['#009e49', '#ce1126'],
    funFact: '아메리카 대륙에서 면적과 인구가 가장 작은 연방 국가의 수도로 사탕수수 열차와 피카딜리 서커스 탑이 유명합니다.'
  },
  {
    code: 'dm',
    name: '도미니카 연방',
    capital: '로조',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇩🇲',
    colors: ['#006a4e', '#fcd116'],
    funFact: '도미니카 공화국과 완전히 다른 나라이며 자연의 섬이라 불리는 끓어오르는 호수 보일링 레이크와 원시 우림 항구입니다.'
  },
  {
    code: 'ht',
    name: '아이티',
    capital: '포르토프랭스',
    continent: '아메리카',
    difficulty: 'hard',
    flagEmoji: '🇭🇹',
    colors: ['#00209f', '#d21034'],
    funFact: '왕자들의 항구라는 뜻을 가졌으며 1804년 세계 최초로 흑인 노예 혁명에 성공해 수립된 역사적 공화국의 수도입니다.'
  }
];

// Helper functions for quiz logic
export function getCountriesByDifficulty(difficulty: 'easy' | 'medium' | 'hard' | 'all'): Country[] {
  if (difficulty === 'all') return ALL_COUNTRIES;
  return ALL_COUNTRIES.filter(c => c.difficulty === difficulty);
}

export function generateQuizPool(difficulty: 'easy' | 'medium' | 'hard' | 'all', count: number = 20) {
  const pool = getCountriesByDifficulty(difficulty);
  // Shuffle pool
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function generateOptions(target: Country, allCountries: Country[] = ALL_COUNTRIES): string[] {
  const otherCapitals = Array.from(new Set(
    allCountries
      .filter(c => c.capital !== target.capital && c.name !== target.name)
      .map(c => c.capital)
  ));
  
  const shuffledOthers = [...otherCapitals].sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [target.capital, ...shuffledOthers].sort(() => Math.random() - 0.5);
  return options;
}
