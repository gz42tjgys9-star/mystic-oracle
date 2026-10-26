
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
  }
];
  
