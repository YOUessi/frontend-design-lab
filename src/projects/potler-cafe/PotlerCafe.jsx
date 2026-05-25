import React, { useMemo, useState } from "react";

const copy = {
  zh: {
    langLabel: "中文",
    nav: ["概览", "招牌菜单", "空间", "预约"],
    back: "返回作品集",
    reserve: "立即预约",
    heroKicker: "Seoul · Gangnam · Apgujeong-ro 75-gil",
    heroTitle: "POTLER",
    heroSub: "手作 S’more、咖啡、茶与夜间微醺菜单，在首尔狎鸥亭小巷里营造一处温暖的露营感甜点空间。",
    open: "今日 09:00 开始营业",
    rating: "Google 5.0 · 42 条评价",
    price: "₩10,000–20,000 / 人",
    tags: ["手作棉花糖", "宠物友好", "家庭友好", "LGBTQ+ 友好", "露台座位"],
    sectionMenu: "菜单精选",
    sectionMenuSub: "以 S’more 为核心，搭配咖啡、茶、柠檬苏打、威士忌与宠物菜单。",
    categories: ["S’more", "Coffee & Tea", "Set Menu", "Kids & Pets"],
    locationTitle: "狎鸥亭小巷里的露营甜点店",
    locationText: "地址位于首尔江南区 Apgujeong-ro 75-gil 28-1。网站视觉采用菜单中的米白纸张、深可可色与烤棉花糖色，结合首尔街区咖啡馆常见的精致小巷、露台与夜间灯光氛围。",
    sceneCards: ["暖色木质吧台", "露营感后院座位", "宠物同行友好", "适合下午茶与夜间小酌"],
    reviewsTitle: "真实评价氛围",
    reviewsSub: "用户评价集中提到 cozy、dreamy、handmade、camping area 与 friendly staff。",
    bookingTitle: "预约系统",
    bookingSub: "选择日期、时间、人数与语言偏好，提交后生成预约确认卡。",
    name: "姓名",
    guests: "人数",
    date: "日期",
    time: "时间",
    note: "备注 / 过敏信息",
    submit: "确认预约",
    confirmation: "预约已生成",
    confirmationHint: "这是前端预约演示，可接入 CatchTable、Google Calendar 或后端 API。"
  },
  en: {
    langLabel: "EN",
    nav: ["Overview", "Signature", "Space", "Reservation"],
    back: "Back to portfolio",
    reserve: "Reserve now",
    heroKicker: "Seoul · Gangnam · Apgujeong-ro 75-gil",
    heroTitle: "POTLER",
    heroSub: "A warm s’mores café for handmade marshmallows, coffee, tea and after-dark drinks, tucked into a refined Seoul alley.",
    open: "Opens at 09:00 today",
    rating: "Google 5.0 · 42 reviews",
    price: "₩10,000–20,000 / person",
    tags: ["Handmade marshmallow", "Dog friendly", "Family friendly", "LGBTQ+ friendly", "Patio seating"],
    sectionMenu: "Menu Highlights",
    sectionMenuSub: "Centered on s’mores, paired with coffee, tea, lemon soda, whisky and pet-friendly treats.",
    categories: ["S’more", "Coffee & Tea", "Set Menu", "Kids & Pets"],
    locationTitle: "A campfire-dessert mood in an Apgujeong alley",
    locationText: "Located at 28-1 Apgujeong-ro 75-gil, Gangnam District, Seoul. The visual system follows the café’s menu palette: parchment beige, cocoa brown and toasted marshmallow cream, with alley lights and patio warmth.",
    sceneCards: ["Warm wooden counter", "Camp-style back seating", "Pet-friendly visits", "Afternoon tea to late drinks"],
    reviewsTitle: "Guest Mood",
    reviewsSub: "Reviews repeatedly mention cozy, dreamy, handmade s’mores, a camping area and friendly staff.",
    bookingTitle: "Reservation System",
    bookingSub: "Choose a date, time, party size and language preference. The form generates a confirmation card.",
    name: "Name",
    guests: "Guests",
    date: "Date",
    time: "Time",
    note: "Notes / allergies",
    submit: "Confirm reservation",
    confirmation: "Reservation created",
    confirmationHint: "Front-end demo. It can be connected to CatchTable, Google Calendar or a backend API."
  },
  ko: {
    langLabel: "한국어",
    nav: ["소개", "대표 메뉴", "공간", "예약"],
    back: "포트폴리오로 돌아가기",
    reserve: "예약하기",
    heroKicker: "서울 · 강남 · 압구정로75길",
    heroTitle: "포틀러 POTLER",
    heroSub: "수제 마시멜로 스모어, 커피와 티, 그리고 저녁의 하이볼까지 즐길 수 있는 따뜻한 무드의 디저트 카페.",
    open: "오늘 09:00 오픈",
    rating: "Google 5.0 · 리뷰 42개",
    price: "1인 ₩10,000–20,000",
    tags: ["수제 마시멜로", "반려견 동반", "가족 친화", "LGBTQ+ 프렌들리", "야외 좌석"],
    sectionMenu: "대표 메뉴",
    sectionMenuSub: "스모어를 중심으로 커피, 티, 레몬 소다, 위스키, 펫 메뉴를 함께 구성했습니다.",
    categories: ["스모어", "커피 & 티", "세트 메뉴", "키즈 & 펫"],
    locationTitle: "압구정 골목 속 캠프파이어 디저트 무드",
    locationText: "주소는 서울 강남구 압구정로75길 28-1입니다. 메뉴판의 베이지 종이 질감, 코코아 브라운, 구운 마시멜로 컬러를 바탕으로 골목 조명과 포근한 테라스 감성을 반영했습니다.",
    sceneCards: ["따뜻한 우드 바", "캠핑 무드 좌석", "반려견 동반 가능", "티타임부터 가벼운 술까지"],
    reviewsTitle: "방문자 분위기",
    reviewsSub: "리뷰에서는 cozy, dreamy, handmade, camping area, friendly staff가 자주 언급됩니다.",
    bookingTitle: "예약 시스템",
    bookingSub: "날짜, 시간, 인원과 언어를 선택하면 예약 확인 카드가 생성됩니다.",
    name: "이름",
    guests: "인원",
    date: "날짜",
    time: "시간",
    note: "요청사항 / 알레르기",
    submit: "예약 확인",
    confirmation: "예약이 생성되었습니다",
    confirmationHint: "프론트엔드 데모이며 CatchTable, Google Calendar 또는 백엔드 API와 연결할 수 있습니다."
  },
  ja: {
    langLabel: "日本語",
    nav: ["概要", "看板メニュー", "空間", "予約"],
    back: "作品集に戻る",
    reserve: "予約する",
    heroKicker: "ソウル · 江南 · 狎鴎亭路75ギル",
    heroTitle: "POTLER",
    heroSub: "手作りスモア、コーヒー、紅茶、夜のドリンクまで楽しめる、ソウルの路地裏にある温かなデザートカフェ。",
    open: "本日 09:00 オープン",
    rating: "Google 5.0 · 42件のレビュー",
    price: "₩10,000–20,000 / 人",
    tags: ["手作りマシュマロ", "犬同伴可", "家族向け", "LGBTQ+ フレンドリー", "テラス席"],
    sectionMenu: "メニューのおすすめ",
    sectionMenuSub: "スモアを中心に、コーヒー、紅茶、レモンソーダ、ウイスキー、ペットメニューまで展開。",
    categories: ["S’more", "Coffee & Tea", "Set Menu", "Kids & Pets"],
    locationTitle: "狎鴎亭の路地にあるキャンプファイア風デザートカフェ",
    locationText: "住所はソウル江南区 Apgujeong-ro 75-gil 28-1。メニューのベージュ紙、ココアブラウン、焼きマシュマロの色を基調に、路地の灯りとテラスの温もりを表現しました。",
    sceneCards: ["温かい木質カウンター", "キャンプ風の奥席", "ペット同伴にやさしい", "午後のお茶から夜の一杯まで"],
    reviewsTitle: "レビューの雰囲気",
    reviewsSub: "レビューでは cozy、dreamy、handmade、camping area、friendly staff が多く語られています。",
    bookingTitle: "予約システム",
    bookingSub: "日付、時間、人数、言語を選ぶと予約確認カードが生成されます。",
    name: "名前",
    guests: "人数",
    date: "日付",
    time: "時間",
    note: "備考 / アレルギー",
    submit: "予約を確定",
    confirmation: "予約が作成されました",
    confirmationHint: "フロントエンドのデモです。CatchTable、Google Calendar、バックエンド API に接続できます。"
  }
};

const menu = {
  "S’more": [
    { name: "Original S’more", ko: "오리지널 스모어", price: "₩4,700", desc: "Vanilla marshmallow, chocolate ganache, almond cracker" },
    { name: "Pistachio S’more", ko: "피스타치오 스모어", price: "₩5,900", desc: "Pistachio ganache, handmade marshmallow, crisp cracker" },
    { name: "Oreo S’more", ko: "오레오 스모어", price: "₩5,200", desc: "White vanilla ganache, chocolate cracker, roasted top" },
    { name: "Chocolate Bar Set", ko: "스모어 초콜릿 바 세트", price: "₩12,000", desc: "Two chocolate bar textures designed for sharing" }
  ],
  "Coffee & Tea": [
    { name: "Americano", ko: "아메리카노", price: "₩4,800", desc: "Specialty blend with Colombia, Guatemala and Ethiopia beans" },
    { name: "Cafe Latte", ko: "카페라떼", price: "₩6,000", desc: "Specialty beans with blended milk" },
    { name: "Matcha Latte", ko: "말차 라떼", price: "₩6,500", desc: "Jeju matcha, milk, soft cream finish" },
    { name: "Lemon Soda", ko: "레몬 소다", price: "₩7,500", desc: "House lemon syrup, soda, lemon and mint" }
  ],
  "Set Menu": [
    { name: "A Set", ko: "오리지널 스모어 + 아메리카노", price: "₩8,900", desc: "Original s’more with Americano" },
    { name: "B Set", ko: "초콜릿 바 블랙 + 아메리카노", price: "₩9,900", desc: "Chocolate bar black with Americano" },
    { name: "C Set", ko: "초콜릿 바 화이트 + 말차 라떼", price: "₩12,000", desc: "Chocolate bar white with Matcha Latte" },
    { name: "Potler Highball", ko: "포틀러 하이볼", price: "₩9,500 / ₩14,000", desc: "Lemon, ginger ale, vanilla rosemary and whisky option" }
  ],
  "Kids & Pets": [
    { name: "Organic Pack Juice", ko: "유기농 주스", price: "₩3,000", desc: "Orange or strawberry, for kids" },
    { name: "Milk", ko: "우유", price: "₩2,000", desc: "Milk steam or iced, for kids" },
    { name: "Puppuccino", ko: "퍼푸치노", price: "₩3,500", desc: "Lactose-free milk and pet powder, only for pets" }
  ]
};

const languageOptions = ["zh", "en", "ko", "ja"];

function Icon({ type }) {
  const paths = {
    star: "M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5-4.7-4.6 6.5-.9L12 2.5z",
    cup: "M5 7h10v6a5 5 0 0 1-10 0V7zm10 1h2a3 3 0 0 1 0 6h-2M4 20h13",
    pin: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5z",
    calendar: "M6 3v3m12-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
  };

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[type]} />
    </svg>
  );
}

export default function PotlerCafe({ onBack }) {
  const [lang, setLang] = useState("zh");
  const [active, setActive] = useState("S’more");
  const [booking, setBooking] = useState({ name: "", guests: "2", date: "", time: "11:30", note: "" });
  const [confirmed, setConfirmed] = useState(false);
  const t = copy[lang];

  const activeMenu = useMemo(() => menu[active] || menu["S’more"], [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#efe4d0] text-[#2c211b]">
      <header className="sticky top-0 z-50 border-b border-[#3b2b23]/10 bg-[#efe4d0]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="rounded-full border border-[#3b2b23]/15 bg-[#fff8ea] px-4 py-2 text-sm font-black transition hover:bg-white">
              ← {t.back}
            </button>
            <div className="hidden sm:block">
              <div className="text-lg font-black tracking-[0.18em]">POTLER</div>
              <div className="text-xs font-semibold tracking-[0.16em] text-[#816d5f]">포틀러 · S’MORE CAFE</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="rounded-full border border-[#3b2b23]/15 bg-[#fff8ea] px-3 py-2 text-sm font-bold outline-none">
              {languageOptions.map((l) => <option key={l} value={l}>{copy[l].langLabel}</option>)}
            </select>
            <a href="#reservation" className="hidden rounded-full bg-[#3f2d25] px-5 py-2.5 text-sm font-black text-[#fff6e6] shadow-xl shadow-[#3f2d25]/20 transition hover:-translate-y-0.5 hover:bg-[#2f211b] sm:block">{t.reserve}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#4b372d]/15 bg-[#fff8ea] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#6d5547]">{t.heroKicker}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#4b372d] px-4 py-2 text-xs font-black text-[#fff8ea]"><Icon type="star" /> {t.rating}</span>
            </div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#2d211b] md:text-8xl lg:text-9xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#5e4d42] md:text-xl">{t.heroSub}</p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <InfoCard icon="calendar" text={t.open} />
              <InfoCard icon="cup" text={t.price} />
              <InfoCard icon="pin" text="Gangnam, Seoul" />
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {t.tags.map((tag) => <span key={tag} className="rounded-full bg-[#3e2c24]/10 px-3 py-1.5 text-sm font-bold text-[#4a372d]">{tag}</span>)}
            </div>
          </div>

          <div className="relative min-h-[600px] overflow-hidden rounded-[2.5rem] border border-[#fff8ea]/70 bg-[#4a362c] p-5 shadow-2xl shadow-[#3c2b23]/25">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,248,234,.18),transparent_35%),radial-gradient(circle_at_72%_70%,rgba(238,211,170,.18),transparent_30%)]" />
            <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-5">
              <div className="flex items-start justify-between rounded-[2rem] bg-[#efe4d0] p-5 text-[#34251f] shadow-inner">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.28em] text-[#7f6556]">Enjoy Portland S’more</div>
                  <div className="mt-2 text-3xl font-black tracking-tight">Coffee · Tea · Alcohol</div>
                </div>
                <div className="rounded-full bg-[#3f2d25] px-4 py-2 text-sm font-black text-[#fff6e6]">5.0</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <MenuBoard title="COFFEE" dark={false} items={menu["Coffee & Tea"].slice(0, 4)} />
                <MenuBoard title="SET MENU" dark items={menu["Set Menu"].slice(0, 3)} />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["S’MORE", "MATCHA", "LEMON"].map((label, i) => (
                  <div key={label} className="overflow-hidden rounded-[1.5rem] bg-[#fff8ea] p-4 text-center shadow-xl">
                    <div className={`mx-auto mb-3 h-24 w-24 rounded-full ${i === 0 ? "bg-[radial-gradient(circle_at_45%_25%,#fff7d9,#d79042_55%,#6d3f2b)]" : i === 1 ? "bg-[radial-gradient(circle_at_40%_35%,#ecffd6,#90b85d_60%,#4a6d34)]" : "bg-[radial-gradient(circle_at_40%_35%,#fffde8,#e7d75d_45%,#9db36b)]"}`} />
                    <div className="text-xs font-black tracking-[0.14em] text-[#3b2b23]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#3f2d25]/10 bg-[#fff7e7]/55 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8a6c5c]">POTLER MENU</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">{t.sectionMenu}</h2>
                <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-[#6c584d]">{t.sectionMenuSub}</p>
              </div>
              <div className="flex flex-wrap gap-2 rounded-[2rem] bg-[#e8dac4] p-2">
                {Object.keys(menu).map((key, idx) => (
                  <button key={key} onClick={() => setActive(key)} className={`rounded-full px-4 py-2 text-sm font-black transition ${active === key ? "bg-[#3f2d25] text-[#fff6e6] shadow-lg" : "text-[#604c41] hover:bg-[#fff6e6]"}`}>{t.categories[idx]}</button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {activeMenu.map((item) => (
                <article key={item.name} className="group rounded-[2rem] border border-[#3d2c24]/10 bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3d2c24]/10">
                  <div className="mb-5 h-36 rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_20%,#fff7de,#e7b36d_40%,#5d3a2d_72%)] p-4">
                    <div className="h-full rounded-[1.1rem] border border-white/35 bg-white/10 backdrop-blur-sm" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black leading-tight">{item.name}</h3>
                      <p className="mt-1 text-sm font-bold text-[#8a6c5c]">{item.ko}</p>
                    </div>
                    <span className="rounded-full bg-[#3f2d25] px-3 py-1 text-sm font-black text-[#fff6e6]">{item.price}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-6 text-[#6c584d]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="rounded-[2.5rem] bg-[#3f2d25] p-7 text-[#fff6e6] shadow-2xl shadow-[#3d2c24]/20">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d7bf9f]">Location & Atmosphere</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em]">{t.locationTitle}</h2>
            <p className="mt-5 text-base font-medium leading-8 text-[#ead9c4]">{t.locationText}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {t.sceneCards.map((card) => <div key={card} className="rounded-2xl border border-[#fff6e6]/10 bg-[#fff6e6]/8 p-4 text-sm font-black">{card}</div>)}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="min-h-[420px] rounded-[2.5rem] bg-[linear-gradient(145deg,#fff7e8,#ddc7a8)] p-6 shadow-xl">
              <div className="h-full rounded-[2rem] border border-[#3f2d25]/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.8),transparent_35%),linear-gradient(180deg,rgba(77,54,43,.06),rgba(77,54,43,.18))] p-5">
                <div className="mb-4 inline-flex rounded-full bg-[#3f2d25] px-4 py-2 text-xs font-black text-[#fff6e6]">APGUJEONG ALLEY</div>
                <div className="mt-28 rounded-[2rem] bg-[#fff8ea]/80 p-5 shadow-lg backdrop-blur">
                  <div className="text-2xl font-black">28-1</div>
                  <div className="mt-1 text-sm font-bold text-[#6c584d]">Apgujeong-ro 75-gil</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="rounded-[2.5rem] bg-[#fffaf0] p-7 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8a6c5c]">Reviews</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight">{t.reviewsTitle}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#6c584d]">{t.reviewsSub}</p>
              </div>
              <div className="rounded-[2.5rem] bg-[#4a362c] p-7 text-[#fff6e6] shadow-xl">
                <div className="text-5xl font-black">5.0</div>
                <div className="mt-2 text-sm font-bold text-[#e8d6be]">42 Google reviews</div>
                <div className="mt-5 flex gap-1 text-2xl text-[#f4d38b]">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

        <section id="reservation" className="bg-[#3f2d25] py-16 text-[#fff6e6] lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d7bf9f]">Reservation</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">{t.bookingTitle}</h2>
              <p className="mt-5 max-w-xl text-lg font-medium leading-8 text-[#ead9c4]">{t.bookingSub}</p>
              <div className="mt-8 rounded-[2rem] border border-[#fff6e6]/10 bg-[#fff6e6]/8 p-5 text-sm font-bold leading-7 text-[#ead9c4]">
                Address: 28-1 Apgujeong-ro 75-gil, Gangnam District, Seoul<br />
                Phone: +82 50-71345-4600<br />
                Service: dine-in · takeaway · patio · dogs allowed
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#fff8ea] p-6 text-[#2c211b] shadow-2xl shadow-black/20 md:p-8">
              <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
                <Field label={t.name}>
                  <input required value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} className="field" placeholder="Tang" />
                </Field>
                <Field label={t.guests}>
                  <select value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: e.target.value })} className="field">
                    {[1,2,3,4,5,6,7,8].map((n) => <option key={n}>{n}</option>)}
                  </select>
                </Field>
                <Field label={t.date}>
                  <input required type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} className="field" />
                </Field>
                <Field label={t.time}>
                  <select value={booking.time} onChange={(e) => setBooking({ ...booking, time: e.target.value })} className="field">
                    {["09:30","10:30","11:30","13:00","14:30","16:00","18:30","20:00"].map((time) => <option key={time}>{time}</option>)}
                  </select>
                </Field>
                <label className="block md:col-span-2">
                  <span className="mb-2 block text-sm font-black text-[#6c584d]">{t.note}</span>
                  <textarea value={booking.note} onChange={(e) => setBooking({ ...booking, note: e.target.value })} className="min-h-28 w-full rounded-2xl border border-[#3f2d25]/12 bg-white px-4 py-3 font-bold outline-none focus:border-[#3f2d25]" placeholder="Window seat / dog-friendly patio / allergy..." />
                </label>
                <button className="rounded-2xl bg-[#3f2d25] px-6 py-4 text-base font-black text-[#fff6e6] shadow-xl shadow-[#3f2d25]/20 transition hover:-translate-y-0.5 hover:bg-[#2d211b] md:col-span-2">{t.submit}</button>
              </form>

              {confirmed && (
                <div className="mt-5 rounded-[2rem] border border-[#3f2d25]/12 bg-[#efe4d0] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xl font-black">{t.confirmation}</div>
                      <p className="mt-1 text-sm font-bold text-[#6c584d]">{booking.date || "YYYY-MM-DD"} · {booking.time} · {booking.guests} guests · {booking.name || "Guest"}</p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#3f2d25] text-[#fff6e6]">✓</div>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#6c584d]">{t.confirmationHint}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2d211b] px-5 py-8 text-center text-sm font-bold text-[#d7bf9f]">
        POTLER · 포틀러 · 28-1 Apgujeong-ro 75-gil, Gangnam District, Seoul · +82 50-71345-4600
      </footer>
    </div>
  );
}

function InfoCard({ icon, text }) {
  return (
    <div className="rounded-3xl border border-[#3c2b23]/10 bg-[#fff8ea]/75 p-4 shadow-sm">
      <div className="mb-2 text-[#4d3a30]"><Icon type={icon} /></div>
      <div className="text-sm font-black">{text}</div>
    </div>
  );
}

function MenuBoard({ title, dark, items }) {
  return (
    <div className={`rounded-[2rem] p-6 shadow-xl ${dark ? "bg-[#3a2b25] text-[#fff6e6]" : "bg-[#f8efdc] text-[#34251f]"}`}>
      <div className={`mb-5 inline-flex rounded-full px-5 py-1.5 text-sm font-black tracking-[0.18em] ${dark ? "bg-[#fff6e6] text-[#35251f]" : "bg-white"}`}>
        {title}
      </div>
      {items.map((item, idx) => (
        <div key={item.name} className={`mb-5 border-b border-dotted pb-4 last:mb-0 ${dark ? "border-[#fff6e6]/25" : "border-[#6a5648]/35"}`}>
          <div className="flex justify-between gap-5 text-lg font-black">
            <span>{dark ? `${String.fromCharCode(65 + idx)} Set` : item.ko}</span>
            <span>{item.price.replace("₩", "")}</span>
          </div>
          <p className={`mt-1 text-xs font-semibold uppercase ${dark ? "text-[#e7d5bf]" : "text-[#756052]"}`}>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-[#6c584d]">{label}</span>
      {children}
    </label>
  );
}
