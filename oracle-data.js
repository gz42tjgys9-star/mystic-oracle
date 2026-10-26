
const oracleCardImages = Array.from(
  { length: 36 },
  (_, i) => `oracle-images/oracle-${String(i + 1).padStart(2, "0")}.png`
);

const oracleCards = [
  {
    id: 1,
    name: "愛の目覚め",
    theme: "愛と絆",
    meaning: "新しい愛・心を開く",
    image: oracleCardImages[0]
  },
  {
    id: 2,
    name: "運命の出会い",
    theme: "愛と絆",
    meaning: "縁・出会い・巡り合わせ",
    image: oracleCardImages[1]
  },
  {
    id: 3,
    name: "真実の絆",
    theme: "愛と絆",
    meaning: "信頼・誠実・深い結びつき",
    image: oracleCardImages[2]
  },
  {
    id: 4,
    name: "心の架け橋",
    theme: "愛と絆",
    meaning: "理解・対話・和解",
    image: oracleCardImages[3]
  },
  {
    id: 5,
    name: "無条件の愛",
    theme: "愛と絆",
    meaning: "受容・思いやり・慈愛",
    image: oracleCardImages[4]
  },
  {
    id: 6,
    name: "永遠の約束",
    theme: "愛と絆",
    meaning: "絆の継続・大切な誓い",
    image: oracleCardImages[5]
  },
  {
    id: 7,
    name: "夜明けの光",
    theme: "希望と光",
    meaning: "新しい始まり・可能性",
    image: oracleCardImages[6]
  },
  {
    id: 8,
    name: "希望の星",
    theme: "希望と光",
    meaning: "希望・未来への信頼",
    image: oracleCardImages[7]
  },
  {
    id: 9,
    name: "祝福の翼",
    theme: "希望と光",
    meaning: "幸運・祝福・支援",
    image: oracleCardImages[8]
  },
  {
    id: 10,
    name: "輝く未来",
    theme: "希望と光",
    meaning: "成功・発展・前進",
    image: oracleCardImages[9]
  },
  {
    id: 11,
    name: "勇気の炎",
    theme: "希望と光",
    meaning: "挑戦・勇気・行動",
    image: oracleCardImages[10]
  },
  {
    id: 12,
    name: "奇跡の扉",
    theme: "希望と光",
    meaning: "好機・思いがけない可能性",
    image: oracleCardImages[11]
  },
  {
    id: 13,
    name: "癒やしの泉",
    theme: "癒やしと再生",
    meaning: "休息・心の回復",
    image: oracleCardImages[12]
  },
  {
    id: 14,
    name: "浄化の雨",
    theme: "癒やしと再生",
    meaning: "手放し・心の整理",
    image: oracleCardImages[13]
  },
  {
    id: 15,
    name: "再生の花",
    theme: "癒やしと再生",
    meaning: "再出発・立ち直る力",
    image: oracleCardImages[14]
  },
  {
    id: 16,
    name: "静寂の森",
    theme: "癒やしと再生",
    meaning: "安らぎ・内面の調和",
    image: oracleCardImages[15]
  },
  {
    id: 17,
    name: "許しの光",
    theme: "癒やしと再生",
    meaning: "許し・過去からの解放",
    image: oracleCardImages[16]
  },
  {
    id: 18,
    name: "生命の息吹",
    theme: "癒やしと再生",
    meaning: "活力・回復・成長",
    image: oracleCardImages[17]
  },
  {
    id: 19,
    name: "運命の輪",
    theme: "運命と転機",
    meaning: "変化・人生の巡り",
    image: oracleCardImages[18]
  },
  {
    id: 20,
    name: "選択の門",
    theme: "運命と転機",
    meaning: "決断・自分の意思",
    image: oracleCardImages[19]
  },
  {
    id: 21,
    name: "旅立ちの風",
    theme: "運命と転機",
    meaning: "出発・新しい道",
    image: oracleCardImages[20]
  },
  {
    id: 22,
    name: "変容の蝶",
    theme: "運命と転機",
    meaning: "変化・自己変革",
    image: oracleCardImages[21]
  },
  {
    id: 23,
    name: "時の導き",
    theme: "運命と転機",
    meaning: "適切な時期・忍耐",
    image: oracleCardImages[22]
  },
  {
    id: 24,
    name: "未知への鍵",
    theme: "運命と転機",
    meaning: "未知の可能性・発見",
    image: oracleCardImages[23]
  },
  {
    id: 25,
    name: "内なる声",
    theme: "知恵と導き",
    meaning: "直感・自己理解",
    image: oracleCardImages[24]
  },
  {
    id: 26,
    name: "真実の鏡",
    theme: "知恵と導き",
    meaning: "気づき・本質を見つめる",
    image: oracleCardImages[25]
  },
  {
    id: 27,
    name: "叡智の書",
    theme: "知恵と導き",
    meaning: "学び・知識・洞察",
    image: oracleCardImages[26]
  },
  {
    id: 28,
    name: "導きの灯火",
    theme: "知恵と導き",
    meaning: "助言・進む方向",
    image: oracleCardImages[27]
  },
  {
    id: 29,
    name: "沈黙の賢者",
    theme: "知恵と導き",
    meaning: "熟考・内省・観察",
    image: oracleCardImages[28]
  },
  {
    id: 30,
    name: "魂の羅針盤",
    theme: "知恵と導き",
    meaning: "自分の価値観・人生の指針",
    image: oracleCardImages[29]
  },
  {
    id: 31,
    name: "月の女神",
    theme: "魂と宇宙",
    meaning: "感受性・心のリズム",
    image: oracleCardImages[30]
  },
  {
    id: 32,
    name: "星々の祝福",
    theme: "魂と宇宙",
    meaning: "つながり・宇宙の調和",
    image: oracleCardImages[31]
  },
  {
    id: 33,
    name: "魂の記憶",
    theme: "魂と宇宙",
    meaning: "経験・深い気づき",
    image: oracleCardImages[32]
  },
  {
    id: 34,
    name: "銀河の扉",
    theme: "魂と宇宙",
    meaning: "視野の拡大・未知への探求",
    image: oracleCardImages[33]
  },
  {
    id: 35,
    name: "永遠の光",
    theme: "魂と宇宙",
    meaning: "普遍的な希望・心の支え",
    image: oracleCardImages[34]
  },
  {
    id: 36,
    name: "宇宙の調和",
    theme: "魂と宇宙",
    meaning: "統合・均衡・全体とのつながり",
    image: oracleCardImages[35]
  }
];




  
