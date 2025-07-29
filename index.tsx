/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- TYPES ---
interface Kanji {
  kanji: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  example: {
    jp: string;
    en: string;
  };
}

// --- DATA ---
const KANJI_DATA: Record<string, Kanji[]> = {
  'N5': [
    {kanji: '日', meaning: 'Day, Sun', onyomi: 'ニチ, ジツ', kunyomi: 'ひ, -び, -か', example: {jp: '日本 (にほん)', en: 'Japan'}},
    {kanji: '一', meaning: 'One', onyomi: 'イチ, イツ', kunyomi: 'ひと-', example: {jp: '一つ (ひとつ)', en: 'One thing'}},
    {kanji: '国', meaning: 'Country', onyomi: 'コク', kunyomi: 'くに', example: {jp: '外国 (がいこく)', en: 'Foreign country'}},
    {kanji: '人', meaning: 'Person', onyomi: 'ジン, ニン', kunyomi: 'ひと', example: {jp: '日本人 (にほんじん)', en: 'Japanese person'}},
    {kanji: '年', meaning: 'Year', onyomi: 'ネン', kunyomi: 'とし', example: {jp: '一年 (いちねん)', en: 'One year'}},
    {kanji: '大', meaning: 'Big', onyomi: 'ダイ, タイ', kunyomi: 'おおきい', example: {jp: '大学 (だいがく)', en: 'University'}},
    {kanji: '十', meaning: 'Ten', onyomi: 'ジュウ', kunyomi: 'とお', example: {jp: '十日 (とおか)', en: 'Tenth day'}},
    {kanji: '二', meaning: 'Two', onyomi: 'ニ', kunyomi: 'ふた', example: {jp: '二人 (ふたり)', en: 'Two people'}},
    {kanji: '本', meaning: 'Book, Origin', onyomi: 'ホン', kunyomi: 'もと', example: {jp: '本 (ほん)', en: 'Book'}},
    {kanji: '中', meaning: 'Inside, Middle', onyomi: 'チュウ', kunyomi: 'なか', example: {jp: '中国 (ちゅうごく)', en: 'China'}},
    {kanji: '長', meaning: 'Long, Chief', onyomi: 'チョウ', kunyomi: 'ながい', example: {jp: '社長 (しゃちょう)', en: 'Company president'}},
    {kanji: '出', meaning: 'To exit', onyomi: 'シュツ', kunyomi: 'でる, だす', example: {jp: '出口 (でぐち)', en: 'Exit'}},
    {kanji: '三', meaning: 'Three', onyomi: 'サン', kunyomi: 'みつ', example: {jp: '三つ (みっつ)', en: 'Three things'}},
    {kanji: '時', meaning: 'Time, Hour', onyomi: 'ジ', kunyomi: 'とき', example: {jp: '時間 (じかん)', en: 'Time'}},
    {kanji: '行', meaning: 'To go', onyomi: 'コウ, ギョウ', kunyomi: 'いく', example: {jp: '銀行 (ぎんこう)', en: 'Bank'}},
    {kanji: '見', meaning: 'To see', onyomi: 'ケン', kunyomi: 'みる', example: {jp: '見せる (みせる)', en: 'To show'}},
    {kanji: '月', meaning: 'Month, Moon', onyomi: 'ゲツ, ガツ', kunyomi: 'つき', example: {jp: '一月 (いちがつ)', en: 'January'}},
    {kanji: '分', meaning: 'Minute, To divide', onyomi: 'フン, ブン', kunyomi: 'わかる', example: {jp: '五分 (ごふん)', en: 'Five minutes'}},
    {kanji: '後', meaning: 'After, Behind', onyomi: 'ゴ', kunyomi: 'あと, うしろ', example: {jp: '午後 (ごご)', en: 'P.M./afternoon'}},
    {kanji: '前', meaning: 'Before, Front', onyomi: 'ゼン', kunyomi: 'まえ', example: {jp: '名前 (なまえ)', en: 'Name'}},
    {kanji: '生', meaning: 'Life, To be born', onyomi: 'セイ, ショウ', kunyomi: 'いきる, うまれる', example: {jp: '先生 (せんせい)', en: 'Teacher'}},
    {kanji: '五', meaning: 'Five', onyomi: 'ゴ', kunyomi: 'いつつ', example: {jp: '五つ (いつつ)', en: 'Five things'}},
    {kanji: '間', meaning: 'Interval, Between', onyomi: 'カン, ケン', kunyomi: 'あいだ', example: {jp: '時間 (じかん)', en: 'Time'}},
    {kanji: '上', meaning: 'Up, Above', onyomi: 'ジョウ', kunyomi: 'うえ, あがる', example: {jp: '上手 (じょうず)', en: 'Skillful'}},
    {kanji: '東', meaning: 'East', onyomi: 'トウ', kunyomi: 'ひがし', example: {jp: '東京 (とうきょう)', en: 'Tokyo'}},
    {kanji: '四', meaning: 'Four', onyomi: 'シ', kunyomi: 'よん, よつ', example: {jp: '四つ (よっつ)', en: 'Four things'}},
    {kanji: '今', meaning: 'Now', onyomi: 'コン, キン', kunyomi: 'いま', example: {jp: '今日 (きょう)', en: 'Today'}},
    {kanji: '金', meaning: 'Gold, Money', onyomi: 'キン', kunyomi: 'かね', example: {jp: 'お金 (おかね)', en: 'Money'}},
    {kanji: '九', meaning: 'Nine', onyomi: 'キュウ, ク', kunyomi: 'ここのつ', example: {jp: '九つ (ここのつ)', en: 'Nine things'}},
    {kanji: '入', meaning: 'To enter', onyomi: 'ニュウ', kunyomi: 'はいる, いれる', example: {jp: '入口 (いりぐち)', en: 'Entrance'}},
    {kanji: '学', meaning: 'To study', onyomi: 'ガク', kunyomi: 'まなぶ', example: {jp: '学校 (がっこう)', en: 'School'}},
    {kanji: '高', meaning: 'High, Expensive', onyomi: 'コウ', kunyomi: 'たかい', example: {jp: '高校 (こうこう)', en: 'High school'}},
    {kanji: '円', meaning: 'Yen, Circle', onyomi: 'エン', kunyomi: 'まるい', example: {jp: '百円 (ひゃくえん)', en: '100 yen'}},
    {kanji: '子', meaning: 'Child', onyomi: 'シ, ス', kunyomi: 'こ', example: {jp: '子供 (こども)', en: 'Child'}},
    {kanji: '外', meaning: 'Outside', onyomi: 'ガイ, ゲ', kunyomi: 'そと', example: {jp: '外国 (がいこく)', en: 'Foreign country'}},
    {kanji: '八', meaning: 'Eight', onyomi: 'ハチ', kunyomi: 'やっつ', example: {jp: '八つ (やっつ)', en: 'Eight things'}},
    {kanji: '六', meaning: 'Six', onyomi: 'ロク', kunyomi: 'むっつ', example: {jp: '六つ (むっつ)', en: 'Six things'}},
    {kanji: '下', meaning: 'Down, Below', onyomi: 'カ, ゲ', kunyomi: 'した, さがる', example: {jp: '下手 (へた)', en: 'Unskillful'}},
    {kanji: '来', meaning: 'To come', onyomi: 'ライ', kunyomi: 'くる', example: {jp: '来年 (らいねん)', en: 'Next year'}},
    {kanji: '気', meaning: 'Spirit, Air', onyomi: 'キ, ケ', kunyomi: 'いき', example: {jp: '元気 (げんき)', en: 'Healthy, energetic'}},
    {kanji: '小', meaning: 'Small', onyomi: 'ショウ', kunyomi: 'ちいさい', example: {jp: '小さい (ちいさい)', en: 'Small'}},
    {kanji: '七', meaning: 'Seven', onyomi: 'シチ', kunyomi: 'ななつ', example: {jp: '七つ (ななつ)', en: 'Seven things'}},
    {kanji: '山', meaning: 'Mountain', onyomi: 'サン', kunyomi: 'やま', example: {jp: '富士山 (ふじさん)', en: 'Mt. Fuji'}},
    {kanji: '話', meaning: 'To talk', onyomi: 'ワ', kunyomi: 'はなす, はなし', example: {jp: '電話 (でんわ)', en: 'Telephone'}},
    {kanji: '女', meaning: 'Woman, Female', onyomi: 'ジョ, ニョ', kunyomi: 'おんな', example: {jp: '女の人 (おんなのひと)', en: 'Woman'}},
    {kanji: '北', meaning: 'North', onyomi: 'ホク', kunyomi: 'きた', example: {jp: '北海道 (ほっかいどう)', en: 'Hokkaido'}},
    {kanji: '午', meaning: 'Noon', onyomi: 'ゴ', kunyomi: 'うま', example: {jp: '午前 (ごぜん)', en: 'A.M./morning'}},
    {kanji: '百', meaning: 'Hundred', onyomi: 'ヒャク', kunyomi: 'もも', example: {jp: '三百 (さんびゃく)', en: '300'}},
    {kanji: '書', meaning: 'To write', onyomi: 'ショ', kunyomi: 'かく', example: {jp: '辞書 (じしょ)', en: 'Dictionary'}},
    {kanji: '先', meaning: 'Previous, Ahead', onyomi: 'セン', kunyomi: 'さき', example: {jp: '先生 (せんせい)', en: 'Teacher'}},
    {kanji: '名', meaning: 'Name', onyomi: 'メイ, ミョウ', kunyomi: 'な', example: {jp: '名前 (なまえ)', en: 'Name'}},
    {kanji: '川', meaning: 'River', onyomi: 'セン', kunyomi: 'かわ', example: {jp: '川 (かわ)', en: 'River'}},
    {kanji: '千', meaning: 'Thousand', onyomi: 'セン', kunyomi: 'ち', example: {jp: '三千 (さんぜん)', en: '3,000'}},
    {kanji: '水', meaning: 'Water', onyomi: 'スイ', kunyomi: 'みず', example: {jp: '水曜日 (すいようび)', en: 'Wednesday'}},
    {kanji: '半', meaning: 'Half', onyomi: 'ハン', kunyomi: 'なかば', example: {jp: '半分 (はんぶん)', en: 'Half'}},
    {kanji: '男', meaning: 'Man, Male', onyomi: 'ダン, ナン', kunyomi: 'おとこ', example: {jp: '男の人 (おとこのひと)', en: 'Man'}},
    {kanji: '西', meaning: 'West', onyomi: 'セイ, サイ', kunyomi: 'にし', example: {jp: '西口 (にしぐち)', en: 'West exit'}},
    {kanji: '電', meaning: 'Electricity', onyomi: 'デン', kunyomi: 'いなずま', example: {jp: '電気 (でんき)', en: 'Electricity, light'}},
    {kanji: '校', meaning: 'School', onyomi: 'コウ', kunyomi: 'まなびや', example: {jp: '学校 (がっこう)', en: 'School'}},
    {kanji: '語', meaning: 'Language, Word', onyomi: 'ゴ', kunyomi: 'かたる', example: {jp: '日本語 (にほんご)', en: 'Japanese language'}},
    {kanji: '土', meaning: 'Earth, Soil', onyomi: 'ド, ト', kunyomi: 'つち', example: {jp: '土曜日 (どようび)', en: 'Saturday'}},
    {kanji: '木', meaning: 'Tree, Wood', onyomi: 'モク, ボク', kunyomi: 'き', example: {jp: '木曜日 (もくようび)', en: 'Thursday'}},
    {kanji: '聞', meaning: 'To listen, To ask', onyomi: 'ブン, モン', kunyomi: 'きく', example: {jp: '新聞 (しんぶん)', en: 'Newspaper'}},
    {kanji: '食', meaning: 'To eat', onyomi: 'ショク, ジキ', kunyomi: 'たべる', example: {jp: '食べ物 (たべもの)', en: 'Food'}},
    {kanji: '車', meaning: 'Car, Vehicle', onyomi: 'シャ', kunyomi: 'くるま', example: {jp: '電車 (でんしゃ)', en: 'Train'}},
    {kanji: '何', meaning: 'What', onyomi: 'カ', kunyomi: 'なに, なん', example: {jp: '何ですか (なんですか)', en: 'What is it?'}},
    {kanji: '南', meaning: 'South', onyomi: 'ナン, ナ', kunyomi: 'みなみ', example: {jp: '南口 (みなみぐち)', en: 'South exit'}},
    {kanji: '万', meaning: 'Ten thousand', onyomi: 'マン, バン', kunyomi: 'よろず', example: {jp: '一万円 (いちまんえん)', en: '10,000 yen'}},
    {kanji: '毎', meaning: 'Every', onyomi: 'マイ', kunyomi: 'ごと', example: {jp: '毎日 (まいにち)', en: 'Every day'}},
    {kanji: '白', meaning: 'White', onyomi: 'ハク, ビャク', kunyomi: 'しろい', example: {jp: '白い (しろい)', en: 'White'}},
    {kanji: '天', meaning: 'Heaven, Sky', onyomi: 'テン', kunyomi: 'あめ, あま', example: {jp: '天気 (てんき)', en: 'Weather'}},
    {kanji: '母', meaning: 'Mother', onyomi: 'ボ', kunyomi: 'はは, かあ', example: {jp: 'お母さん (おかあさん)', en: 'Mother'}},
    {kanji: '火', meaning: 'Fire', onyomi: 'カ', kunyomi: 'ひ, ほ', example: {jp: '火曜日 (かようび)', en: 'Tuesday'}},
    {kanji: '父', meaning: 'Father', onyomi: 'フ', kunyomi: 'ちち, とう', example: {jp: 'お父さん (おとうさん)', en: 'Father'}},
    {kanji: '読', meaning: 'To read', onyomi: 'ドク, トク', kunyomi: 'よむ', example: {jp: '読書 (どくしょ)', en: 'Reading'}},
    {kanji: '友', meaning: 'Friend', onyomi: 'ユウ', kunyomi: 'とも', example: {jp: '友達 (ともだち)', en: 'Friend'}},
    {kanji: '右', meaning: 'Right', onyomi: 'ウ, ユウ', kunyomi: 'みぎ', example: {jp: '右手 (みぎて)', en: 'Right hand'}},
    {kanji: '左', meaning: 'Left', onyomi: 'サ', kunyomi: 'ひだり', example: {jp: '左手 (ひだりて)', en: 'Left hand'}},
    {kanji: '休', meaning: 'To rest', onyomi: 'キュウ', kunyomi: 'やすむ', example: {jp: '休み (やすみ)', en: 'Holiday, rest'}},
    {kanji: '雨', meaning: 'Rain', onyomi: 'ウ', kunyomi: 'あめ', example: {jp: '雨 (あめ)', en: 'Rain'}},
    {kanji: '会', meaning: 'To meet', onyomi: 'カイ, エ', kunyomi: 'あう', example: {jp: '会社 (かいしゃ)', en: 'Company'}},
    {kanji: '同', meaning: 'Same', onyomi: 'ドウ', kunyomi: 'おなじ', example: {jp: '同じ (おなじ)', en: 'Same'}},
    {kanji: '事', meaning: 'Thing, Matter', onyomi: 'ジ', kunyomi: 'こと', example: {jp: '仕事 (しごと)', en: 'Work, job'}},
    {kanji: '自', meaning: 'Oneself', onyomi: 'ジ, シ', kunyomi: 'みずから', example: {jp: '自分 (じぶん)', en: 'Oneself'}},
    {kanji: '社', meaning: 'Company, Shrine', onyomi: 'シャ', kunyomi: 'やしろ', example: {jp: '社会 (しゃかい)', en: 'Society'}},
    {kanji: '言', meaning: 'To say', onyomi: 'ゲン, ゴン', kunyomi: 'いう', example: {jp: '言う (いう)', en: 'To say'}},
    {kanji: '田', meaning: 'Rice field', onyomi: 'デン', kunyomi: 'た', example: {jp: '山田 (やまだ)', en: 'Yamada (name)'}},
    {kanji: '思', meaning: 'To think', onyomi: 'シ', kunyomi: 'おもう', example: {jp: '思う (おもう)', en: 'To think'}},
    {kanji: '切', meaning: 'To cut', onyomi: 'セツ, サイ', kunyomi: 'きる', example: {jp: '切手 (きって)', en: 'Stamp'}},
    {kanji: '朝', meaning: 'Morning', onyomi: 'チョウ', kunyomi: 'あさ', example: {jp: '朝ご飯 (あさごはん)', en: 'Breakfast'}},
    {kanji: '店', meaning: 'Shop', onyomi: 'テン', kunyomi: 'みせ', example: {jp: '店員 (てんいん)', en: 'Shop assistant'}},
    {kanji: '買', meaning: 'To buy', onyomi: 'バイ', kunyomi: 'かう', example: {jp: '買い物 (かいもの)', en: 'Shopping'}},
    {kanji: '道', meaning: 'Road, Way', onyomi: 'ドウ, トウ', kunyomi: 'みち', example: {jp: '書道 (しょどう)', en: 'Calligraphy'}},
    {kanji: '週', meaning: 'Week', onyomi: 'シュウ', kunyomi: ' ', example: {jp: '今週 (こんしゅう)', en: 'This week'}},
    {kanji: '売', meaning: 'To sell', onyomi: 'バイ', kunyomi: 'うる', example: {jp: '売る (うる)', en: 'To sell'}},
    {kanji: '帰', meaning: 'To return', onyomi: 'キ', kunyomi: 'かえる', example: {jp: '帰る (かえる)', en: 'To return home'}},
    {kanji: '持', meaning: 'To hold', onyomi: 'ジ', kunyomi: 'もつ', example: {jp: '持つ (もつ)', en: 'To hold, to have'}},
    {kanji: '待', meaning: 'To wait', onyomi: 'タイ', kunyomi: 'まつ', example: {jp: '待つ (まつ)', en: 'To wait'}},
    {kanji: '私', meaning: 'I, private', onyomi: 'シ', kunyomi: 'わたし', example: {jp: '私 (わたし)', en: 'I, me'}},
    {kanji: '立', meaning: 'To stand', onyomi: 'リツ, リュウ', kunyomi: 'たつ', example: {jp: '立つ (たつ)', en: 'To stand'}},
    {kanji: '員', meaning: 'Member', onyomi: 'イン', kunyomi: ' ', example: {jp: '店員 (てんいん)', en: 'Shop assistant'}},
    {kanji: '口', meaning: 'Mouth', onyomi: 'コウ, ク', kunyomi: 'くち', example: {jp: '入口 (いりぐち)', en: 'Entrance'}},
    {kanji: '古', meaning: 'Old', onyomi: 'コ', kunyomi: 'ふるい', example: {jp: '古い (ふるい)', en: 'Old'}},
    {kanji: '知', meaning: 'To know', onyomi: 'チ', kunyomi: 'しる', example: {jp: '知る (しる)', en: 'To know'}},
    {kanji: '家', meaning: 'House, Family', onyomi: 'カ, ケ', kunyomi: 'いえ, うち', example: {jp: '家族 (かぞく)', en: 'Family'}},
    {kanji: '仕', meaning: 'To serve', onyomi: 'シ', kunyomi: 'つかえる', example: {jp: '仕事 (しごと)', en: 'Work, job'}},
    {kanji: '死', meaning: 'To die', onyomi: 'シ', kunyomi: 'しぬ', example: {jp: '死ぬ (しぬ)', en: 'To die'}},
    {kanji: '歩', meaning: 'To walk', onyomi: 'ホ, ブ', kunyomi: 'あるく', example: {jp: '歩く (あるく)', en: 'To walk'}},
    {kanji: '駅', meaning: 'Station', onyomi: 'エキ', kunyomi: ' ', example: {jp: '駅 (えき)', en: 'Station'}},
    {kanji: '肉', meaning: 'Meat', onyomi: 'ニク', kunyomi: ' ', example: {jp: '牛肉 (ぎゅうにく)', en: 'Beef'}},
    {kanji: '旅', meaning: 'Travel', onyomi: 'リョ', kunyomi: 'たび', example: {jp: '旅行 (りょこう)', en: 'Travel, trip'}},
    {kanji: '目', meaning: 'Eye', onyomi: 'モク, ボク', kunyomi: 'め', example: {jp: '目 (め)', en: 'Eye'}},
    {kanji: '耳', meaning: 'Ear', onyomi: 'ジ', kunyomi: 'みみ', example: {jp: '耳 (みみ)', en: 'Ear'}},
    {kanji: '手', meaning: 'Hand', onyomi: 'シュ', kunyomi: 'て', example: {jp: '手紙 (てがみ)', en: 'Letter'}},
    {kanji: '足', meaning: 'Foot, Leg', onyomi: 'ソク', kunyomi: 'あし, たす', example: {jp: '足 (あし)', en: 'Leg, foot'}},
    {kanji: '花', meaning: 'Flower', onyomi: 'カ', kunyomi: 'はな', example: {jp: '花見 (はなみ)', en: 'Flower viewing'}},
    {kanji: '茶', meaning: 'Tea', onyomi: 'チャ, サ', kunyomi: ' ', example: {jp: 'お茶 (おちゃ)', en: 'Tea'}},
    {kanji: '魚', meaning: 'Fish', onyomi: 'ギョ', kunyomi: 'さかな', example: {jp: '魚 (さかな)', en: 'Fish'}},
    {kanji: '空', meaning: 'Sky, Empty', onyomi: 'クウ', kunyomi: 'そら, あく', example: {jp: '空港 (くうこう)', en: 'Airport'}},
    {kanji: '犬', meaning: 'Dog', onyomi: 'ケン', kunyomi: 'いぬ', example: {jp: '犬 (いぬ)', en: 'Dog'}},
    {kanji: '鳥', meaning: 'Bird', onyomi: 'チョウ', kunyomi: 'とり', example: {jp: '鳥 (とり)', en: 'Bird'}},
    {kanji: '新', meaning: 'New', onyomi: 'シン', kunyomi: 'あたらしい', example: {jp: '新聞 (しんぶん)', en: 'Newspaper'}},
  ],
  'N4': [
    {kanji: '力', meaning: 'Power, Strength', onyomi: 'リョク', kunyomi: 'ちから', example: {jp: '力 (ちから)', en: 'Power'}},
    {kanji: '問', meaning: 'Question', onyomi: 'モン', kunyomi: 'と.う', example: {jp: '問題 (もんだい)', en: 'Problem/Question'}},
  ],
  'N3': [
    {kanji: '全', meaning: 'All, Whole', onyomi: 'ゼン', kunyomi: 'まった.く', example: {jp: '全然 (ぜんぜん)', en: 'Not at all'}},
  ],
  'N2': [
    {kanji: '然', meaning: 'Nature, Of Course', onyomi: 'ゼン, ネン', kunyomi: 'しか', example: {jp: '自然 (しぜん)', en: 'Nature'}},
  ],
  'N1': [
    {kanji: '覧', meaning: 'To View, See', onyomi: 'ラン', kunyomi: 'み.る', example: {jp: 'ご覧になる (らんになる)', en: 'To see (honorific)'}},
  ],
};


// --- DOM ELEMENTS ---
const levelSelector = document.getElementById('levelSelector') as HTMLDivElement;
const studyDailyButton = document.getElementById('studyDailyButton') as HTMLButtonElement;
const study25Button = document.getElementById('study25Button') as HTMLButtonElement;
const study50Button = document.getElementById('study50Button') as HTMLButtonElement;
const studyAllButton = document.getElementById('studyAllButton') as HTMLButtonElement;
const studyEndlessButton = document.getElementById('studyEndlessButton') as HTMLButtonElement;
const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
const progressTracker = document.getElementById('progressTracker') as HTMLDivElement;
const flashcardsContainer = document.getElementById('flashcardsContainer') as HTMLDivElement;
const statusMessage = document.getElementById('statusMessage') as HTMLDivElement;

// --- STATE ---
let currentLevel: keyof typeof KANJI_DATA | null = null;
let currentSessionCards: Kanji[] = [];
let isEndlessMode = false;

// --- UTILITY FUNCTIONS ---
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getTodayDateString() {
  return new Date().toISOString().split('T')[0];
}

// --- PROGRESS MANAGEMENT ---
function loadProgress(level: string): string[] {
  const saved = localStorage.getItem('kanji-progress-' + level);
  return saved ? JSON.parse(saved) : [];
}

function saveProgress(level: string, knownKanji: string[]) {
  localStorage.setItem('kanji-progress-' + level, JSON.stringify(knownKanji));
}

function getLastSessionDate(level: string): string | null {
  return localStorage.getItem('last-session-' + level);
}

function setLastSessionDate(level: string) {
  localStorage.setItem('last-session-' + level, getTodayDateString());
}

function getSessionCount(level: string): number {
  const saved = localStorage.getItem('session-count-' + level);
  return saved ? parseInt(saved, 10) : 0;
}

function saveSessionCount(level: string, count: number) {
  localStorage.setItem('session-count-' + level, count.toString());
}

// --- UI RENDERING ---
function updateProgressDisplay() {
  if (!currentLevel) return;

  const totalKanji = KANJI_DATA[currentLevel].length;
  const knownKanji = loadProgress(currentLevel);
  const knownCount = knownKanji.length;
  const percentage = totalKanji > 0 ? (knownCount / totalKanji) * 100 : 0;

  progressTracker.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.marginBottom = '4px';
  header.style.fontSize = '0.9em';
  header.innerHTML = `<span>${currentLevel} Progress</span><span>${knownCount} / ${totalKanji}</span>`;

  const container = document.createElement('div');
  container.className = 'progress-bar-container';
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.style.width = `${percentage}%`;
  container.appendChild(bar);

  progressTracker.appendChild(header);
  progressTracker.appendChild(container);
}

function updateSessionButtonsAvailability() {
  if (!currentLevel) return;

  const sessionCount = getSessionCount(currentLevel);
  const totalKanji = KANJI_DATA[currentLevel].length;
  const knownKanji = loadProgress(currentLevel);
  const unlearnedCount = totalKanji - knownKanji.length;

  studyDailyButton.disabled = unlearnedCount === 0;
  study25Button.disabled = sessionCount < 5 || totalKanji < 25;
  study50Button.disabled = sessionCount < 10 || totalKanji < 50;
  studyAllButton.disabled = sessionCount < 15;
  studyEndlessButton.disabled = false; // Always available
}

function renderCurrentCard() {
  flashcardsContainer.innerHTML = '';
  if (currentSessionCards.length === 0) {
    statusMessage.textContent = 'Session complete! Great work.';
    if (isEndlessMode) endSession(false); // End endless mode silently
    return;
  }

  const cardData = currentSessionCards[0];
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'flashcard-wrapper';

  // Card element
  const cardDiv = document.createElement('div');
  cardDiv.className = 'flashcard';
  cardDiv.tabIndex = 0;
  
  const cardInner = document.createElement('div');
  cardInner.className = 'flashcard-inner';
  
  // Front
  const cardFront = document.createElement('div');
  cardFront.className = 'flashcard-front';
  cardFront.innerHTML = `<div class="kanji">${cardData.kanji}</div>`;
  
  // Back (Detailed)
  const cardBack = document.createElement('div');
  cardBack.className = 'flashcard-back';
  cardBack.innerHTML = `
    <div class="card-back-section">
      <h3>Meaning</h3>
      <p>${cardData.meaning}</p>
    </div>
    <div class="card-back-section">
      <h3>On'yomi</h3>
      <p class="reading">${cardData.onyomi}</p>
    </div>
    <div class="card-back-section">
      <h3>Kun'yomi</h3>
      <p class="reading">${cardData.kunyomi}</p>
    </div>
    <div class="card-back-section">
      <h3>Example</h3>
      <p>${cardData.example.jp}<br><span style="font-size:0.9em; color: #555;">${cardData.example.en}</span></p>
    </div>
  `;

  cardInner.append(cardFront, cardBack);
  cardDiv.appendChild(cardInner);
  cardDiv.addEventListener('click', () => cardDiv.classList.toggle('flipped'));
  cardDiv.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      cardDiv.classList.toggle('flipped');
    }
  });

  // Action Buttons
  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'card-actions';

  if (isEndlessMode) {
    const nextButton = document.createElement('button');
    nextButton.className = 'card-action-button endless-next-button';
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', handleEndlessNext);

    const quitButton = document.createElement('button');
    quitButton.className = 'card-action-button endless-quit-button';
    quitButton.textContent = 'Quit Session';
    quitButton.addEventListener('click', () => endSession(true));
    actionsDiv.append(nextButton, quitButton);
  } else {
    const reviewButton = document.createElement('button');
    reviewButton.className = 'card-action-button review-button';
    reviewButton.textContent = 'Review Later';
    reviewButton.addEventListener('click', () => handleCardAction(false));

    const knowButton = document.createElement('button');
    knowButton.className = 'card-action-button know-button';
    knowButton.textContent = 'I Know This';
    knowButton.addEventListener('click', () => handleCardAction(true));
    actionsDiv.append(reviewButton, knowButton);
  }

  cardWrapper.append(cardDiv, actionsDiv);
  flashcardsContainer.appendChild(cardWrapper);
}

// --- EVENT HANDLERS & LOGIC ---
function handleCardAction(known: boolean) {
  if (currentSessionCards.length === 0) return;

  const card = currentSessionCards.shift()!; // Remove card from front
  if (known && currentLevel) {
    const currentProgress = loadProgress(currentLevel);
    if (!currentProgress.includes(card.kanji)) {
      currentProgress.push(card.kanji);
      saveProgress(currentLevel, currentProgress);
      updateProgressDisplay();
    }
  } else if (!known) {
    currentSessionCards.push(card); // Add to back of deck
  }
  
  if (currentSessionCards.length > 0) {
    renderCurrentCard();
  } else {
    flashcardsContainer.innerHTML = '';
    statusMessage.textContent = 'Session complete! Great work.';
  }
}

function handleEndlessNext() {
    if (!currentLevel) return;
    currentSessionCards.shift();
    if (currentSessionCards.length === 0) {
        // Reshuffle and start again
        currentSessionCards = shuffleArray(KANJI_DATA[currentLevel]);
    }
    renderCurrentCard();
}

function selectLevel(level: keyof typeof KANJI_DATA) {
  currentLevel = level;
  document.querySelectorAll('.level-button').forEach(btn => btn.classList.remove('selected'));
  document.querySelector(`.level-button[data-level="${level}"]`)?.classList.add('selected');

  updateProgressDisplay();
  updateSessionButtonsAvailability();
  flashcardsContainer.innerHTML = '';
  statusMessage.textContent = `Selected ${level}. Ready to start your session?`;
  resetButton.style.display = 'inline-block';
}

function startSession(type: 'daily' | 'subset' | 'full' | 'endless', size?: number) {
  if (!currentLevel) return;
  isEndlessMode = false;
  let cardsForSession: Kanji[] = [];
  let sessionDescription = '';

  const allKanji = KANJI_DATA[currentLevel];
  
  switch (type) {
    case 'daily':
      if (getLastSessionDate(currentLevel) === getTodayDateString()) {
        statusMessage.textContent = `You've already studied ${currentLevel} today. Come back tomorrow!`;
        return;
      }
      const knownKanji = loadProgress(currentLevel);
      const unlearnedKanji = allKanji.filter(k => !knownKanji.includes(k.kanji));
      if (unlearnedKanji.length === 0) {
        statusMessage.textContent = `Congratulations! You have mastered all Kanji for ${currentLevel}.`;
        return;
      }
      cardsForSession = shuffleArray(unlearnedKanji).slice(0, 5);
      sessionDescription = `Here is your ${currentLevel} session for today.`;
      setLastSessionDate(currentLevel);
      saveSessionCount(currentLevel, getSessionCount(currentLevel) + 1);
      updateSessionButtonsAvailability();
      break;

    case 'subset':
      if (!size) return;
      cardsForSession = shuffleArray(allKanji.slice(0, size));
      sessionDescription = `Reviewing the first ${size} Kanji for ${currentLevel}.`;
      break;

    case 'full':
      cardsForSession = shuffleArray(allKanji);
      sessionDescription = `Reviewing all Kanji for ${currentLevel}.`;
      break;
      
    case 'endless':
      isEndlessMode = true;
      cardsForSession = shuffleArray(allKanji);
      sessionDescription = `Endless practice for ${currentLevel}. No progress will be saved.`;
      break;
  }

  if (cardsForSession.length === 0) {
    statusMessage.textContent = `No cards to study for this session type.`;
    return;
  }

  currentSessionCards = cardsForSession;
  statusMessage.textContent = sessionDescription;
  renderCurrentCard();
}

function endSession(showMessage: boolean) {
    isEndlessMode = false;
    currentSessionCards = [];
    flashcardsContainer.innerHTML = '';
    if (showMessage) {
        statusMessage.textContent = `Ended session. Select a new mode for ${currentLevel}.`;
    }
}

function handleResetProgress() {
  if (!currentLevel) return;
  if (confirm(`Are you sure you want to reset all progress for ${currentLevel}? This cannot be undone.`)) {
    saveProgress(currentLevel, []);
    localStorage.removeItem('last-session-' + currentLevel);
    saveSessionCount(currentLevel, 0);
    updateProgressDisplay();
    updateSessionButtonsAvailability();
    flashcardsContainer.innerHTML = '';
    statusMessage.textContent = `Progress for ${currentLevel} has been reset.`;
  }
}

// --- INITIALIZATION ---
function init() {
  levelSelector.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (target.matches('.level-button')) {
      const level = target.dataset.level as keyof typeof KANJI_DATA;
      if (level) selectLevel(level);
    }
  });

  studyDailyButton.addEventListener('click', () => startSession('daily'));
  study25Button.addEventListener('click', () => startSession('subset', 25));
  study50Button.addEventListener('click', () => startSession('subset', 50));
  studyAllButton.addEventListener('click', () => startSession('full'));
  studyEndlessButton.addEventListener('click', () => startSession('endless'));
  resetButton.addEventListener('click', handleResetProgress);

  progressTracker.innerHTML = '';
  statusMessage.textContent = 'Please select a JLPT level to begin.';
}

init();