export type TypingChallenge = {
  label: string;
  text: string;
  level: number;
};

export const challengesLevel1: TypingChallenge[] = [
  { label: "猫", text: "ねこ", level: 1 },
  { label: "犬", text: "いぬ", level: 1 },
  { label: "猿", text: "さる", level: 1 },
  { label: "海", text: "うみ", level: 1 },
  { label: "山", text: "やま", level: 1 },
  { label: "空", text: "そら", level: 1 },
  { label: "水", text: "みず", level: 1 },
  { label: "人", text: "ひと", level: 1 },
  { label: "車", text: "くるま", level: 1 },
  { label: "花", text: "はな", level: 1 },
  { label: "木", text: "き", level: 1 },
  { label: "雨", text: "あめ", level: 1 },
  { label: "雪", text: "ゆき", level: 1 },
  { label: "風", text: "かぜ", level: 1 },
  { label: "日", text: "ひ", level: 1 },
  { label: "月", text: "つき", level: 1 },
  { label: "星", text: "ほし", level: 1 },
  { label: "川", text: "かわ", level: 1 },
  { label: "家", text: "いえ", level: 1 },
  { label: "電車", text: "でんしゃ", level: 1 },
  { label: "橋", text: "はし", level: 1 },
  { label: "日本", text: "にほん", level: 1 },
  { label: "魚", text: "さかな", level: 1 },
  { label: "鳥", text: "とり", level: 1 },
  { label: "ご飯", text: "ごはん", level: 1 },
  { label: "春", text: "はる", level: 1 },
  { label: "夏", text: "なつ", level: 1 },
  { label: "秋", text: "あき", level: 1 },
  { label: "冬", text: "ふゆ", level: 1 },
  { label: "紙", text: "かみ", level: 1 },
];

export const challengesLevel2: TypingChallenge[] = [
  { label: "誕生日", text: "たんじょうび", level: 2 }, // 6文字
  { label: "今日の夕日", text: "きょうのゆうひ", level: 2 }, // 7文字
  { label: "綺麗な花", text: "きれいなはな", level: 2 }, // 6文字
  { label: "狐の子供", text: "きつねのこども", level: 2 }, // 7文字
  { label: "可愛い犬", text: "かわいいいぬ", level: 2 }, // 6文字
  { label: "涼しい風", text: "すずしいかぜ", level: 2 }, // 6文字
  { label: "暖かい日", text: "あたたかいひ", level: 2 }, // 6文字
  { label: "風の匂い", text: "かぜのにおい", level: 2 }, // 6文字
  { label: "新鮮な野菜", text: "しんせんなやさい", level: 2 }, // 8文字
  { label: "色とりどり", text: "いろとりどり", level: 2 }, // 6文字
  { label: "新鮮な果物", text: "しんせんなくだもの", level: 2 }, // 9文字
  { label: "綺麗な海", text: "きれいなうみ", level: 2 }, // 6文字
  { label: "まん丸お月様", text: "まんまるおつきさま", level: 2 }, // 9文字
  { label: "楽しいひととき", text: "たのしいひととき", level: 2 }, // 8文字
  { label: "真っ白な雪", text: "まっしろなゆき", level: 2 }, // 7文字
  { label: "優しい心", text: "やさしいこころ", level: 2 }, // 7文字
  { label: "紅葉の季節", text: "こうようのきせつ", level: 2 }, // 7文字
  { label: "家族の時間", text: "かぞくのじかん", level: 2 }, // 7文字
  { label: "友達との会話", text: "ともだちとのかいわ", level: 2 }, // 9文字
  { label: "素敵な景色", text: "すてきなけしき", level: 2 }, // 7文字
  { label: "春の花", text: "はるのはな", level: 2 }, // 6文字
  { label: "星空を見上げる", text: "ほしぞらをみあげる", level: 2 }, // 10文字
  { label: "青空の下", text: "あおぞらのした", level: 2 }, // 7文字
  { label: "緑の木々", text: "みどりのきぎ", level: 2 }, // 7文字
  { label: "楽しい時間", text: "たのしいじかん", level: 2 }, // 7文字
  { label: "美味しい料理", text: "おいしいりょうり", level: 2 }, // 8文字
  { label: "新しい場所", text: "あたらしいばしょ", level: 2 }, // 8文字
  { label: "友達の家", text: "ともだちのいえ", level: 2 }, // 7文字
  { label: "静かな夜", text: "しずかなよる", level: 2 }, // 6文字
  { label: "晴れた空", text: "はれたそら", level: 2 }, // 6文字
  { label: "朝の散歩", text: "あさのさんぽ", level: 2 }, // 6文字
];

export const challengesLevel3: TypingChallenge[] = [
  {
    label: "春の日差しが気持ちいい",
    text: "はるのひざしがきもちいい",
    level: 3,
  }, // 13文字, 漢字2つ
  {
    label: "毎日の練習が大切です",
    text: "まいにちのれんしゅうがたいせつです",
    level: 3,
  }, // 14文字, 漢字2つ
  {
    label: "図書館で本を読むのが好き",
    text: "としょかんでほんをよむのがすき",
    level: 3,
  }, // 15文字, 漢字2つ
  {
    label: "美しい景色を見るのが好き",
    text: "うつくしいけしきをみるのがすき",
    level: 3,
  }, // 15文字, 漢字3つ
  {
    label: "今日はたくさん勉強した",
    text: "きょうはたくさんべんきょうした",
    level: 3,
  }, // 13文字, 漢字2つ
  { label: "長い休暇を楽しむ", text: "ながいきゅうかをたのしむ", level: 3 }, // 11文字, 漢字1つ
  { label: "新しい友達ができた", text: "あたらしいともだちができた", level: 3 }, // 11文字, 漢字2つ
  { label: "早起きは三文の徳", text: "はやおきはさんもんのとく", level: 3 }, // 11文字, 漢字2つ
  {
    label: "この映画は面白かった",
    text: "このえいがはおもしろかった",
    level: 3,
  }, // 12文字, 漢字2つ
  {
    label: "美味しい食べ物が大好き",
    text: "おいしいたべものがだいすき",
    level: 3,
  }, // 13文字, 漢字2つ
  { label: "旅行の計画を立てる", text: "りょこうのけいかくをたてる", level: 3 }, // 12文字, 漢字3つ
  {
    label: "毎日の運動は健康に良い",
    text: "まいにちのうんどうはけんこうによい",
    level: 3,
  }, // 14文字, 漢字3つ
  { label: "図書館で本を借りる", text: "としょかんでほんをかりる", level: 3 }, // 12文字, 漢字2つ
  { label: "新しいスキルを学ぶ", text: "あたらしいすきるをまなぶ", level: 3 }, // 12文字, 漢字1つ
  { label: "桜が満開の公園", text: "さくらがまんかいのこうえん", level: 3 }, // 11文字, 漢字3つ
  { label: "友達と楽しく過ごす", text: "ともだちとたのしくすごす", level: 3 }, // 12文字, 漢字1つ
  { label: "美しい海を見に行く", text: "うつくしいうみをみにいく", level: 3 }, // 12文字, 漢字1つ
  { label: "美味しい料理を作る", text: "おいしいりょうりをつくる", level: 3 }, // 12文字, 漢字2つ
  {
    label: "健康のために運動する",
    text: "けんこうのためにうんどうする",
    level: 3,
  }, // 13文字, 漢字2つ
  {
    label: "素晴らしい景色を楽しむ",
    text: "すばらしいけしきをたのしむ",
    level: 3,
  }, // 13文字, 漢字2つ
  {
    label: "毎日新しいことを学ぶ",
    text: "まいにちあたらしいことをまなぶ",
    level: 3,
  }, // 14文字, 漢字2つ
  { label: "本を読むのが好き", text: "ほんをよむのがすき", level: 3 }, // 11文字, 漢字1つ
  {
    label: "週末は友達と過ごす",
    text: "しゅうまつはともだちとすごす",
    level: 3,
  }, // 13文字, 漢字3つ
  { label: "晴れた日に散歩する", text: "はれたひにさんぽする", level: 3 }, // 11文字, 漢字1つ
  { label: "新しい趣味を始める", text: "あたらしいしゅみをはじめる", level: 3 }, // 13文字, 漢字1つ
  { label: "美味しいコーヒーを飲む", text: "おいしいこーひーをのむ", level: 3 }, // 12文字, 漢字1つ
  {
    label: "季節の変わり目を感じる",
    text: "きせつのかわりめをかんじる",
    level: 3,
  }, // 14文字, 漢字2つ
  { label: "忙しい一日が終わる", text: "いそがしいいちにちがおわる", level: 3 }, // 12文字, 漢字2つ
  { label: "夕焼けが綺麗だった", text: "ゆうやけがきれいだった", level: 3 }, // 12文字, 漢字2つ
  { label: "新しい友達と会う", text: "あたらしいともだちとあう", level: 3 }, // 12文字, 漢字1つ
];

export const challengesLevel4: TypingChallenge[] = [
  {
    label: "持続可能な開発目標を達成するために",
    text: "じぞくかのうなかいはつもくひょうをたっせいするために",
    level: 4,
  }, // 18文字, 漢字5つ
  {
    label: "毎日の練習が成功への近道です",
    text: "まいにちのれんしゅうがせいこうへのちかみちです",
    level: 4,
  }, // 19文字, 漢字3つ
  {
    label: "美味しい食べ物がたくさんあります",
    text: "おいしいたべものがたくさんあります",
    level: 18,
  }, // 18文字, 漢字2つ
  {
    label: "桜の花が満開になる季節です",
    text: "さくらのはながまんかいになるきせつです",
    level: 4,
  }, // 19文字, 漢字3つ
  {
    label: "健康的な食生活を心掛けています",
    text: "けんこうてきなしょくせいかつをこころがけています",
    level: 4,
  }, // 20文字, 漢字5つ
  {
    label: "毎日少しずつ練習を続けることが重要です",
    text: "まいにちすこしずつれんしゅうをつづけることがじゅうようです",
    level: 4,
  }, // 20文字, 漢字5つ
  {
    label: "友達と楽しい時間を過ごすのが好きです",
    text: "ともだちとたのしいじかんをすごすのがすきです",
    level: 4,
  }, // 20文字, 漢字3つ
  {
    label: "新しい場所を訪れるのが趣味です",
    text: "あたらしいばしょをおとずれるのがしゅみです",
    level: 4,
  }, // 18文字, 漢字3つ
  {
    label: "美しい景色を見に行くのが楽しみです",
    text: "うつくしいけしきをみにいくのがたのしみです",
    level: 4,
  }, // 20文字, 漢字3つ
  {
    label: "早起きは三文の得ということわざがあります",
    text: "はやおきはさんもんのとくということわざがあります",
    level: 4,
  }, // 20文字, 漢字3つ
  {
    label: "旅行の計画を立てるのが好きです",
    text: "りょこうのけいかくをたてるのがすきです",
    level: 4,
  }, // 18文字, 漢字4つ
  {
    label: "毎日運動することは健康に良いです",
    text: "まいにちうんどうすることはけんこうによいです",
    level: 4,
  }, // 18文字, 漢字4つ
  {
    label: "新しいスキルを習得することは楽しいです",
    text: "あたらしいすきるをしゅうとくすることはたのしいです",
    level: 4,
  }, // 19文字, 漢字4つ
  {
    label: "美味しい料理を作るのが好きです",
    text: "おいしいりょうりをつくるのがすきです",
    level: 4,
  }, // 16文字, 漢字3つ
  {
    label: "季節の変わり目を感じるのが好きです",
    text: "きせつのかわりめをかんじるのがすきです",
    level: 4,
  }, // 19文字, 漢字4つ
  {
    label: "忙しい一日が終わるとホッとします",
    text: "いそがしいいちにちがおわるとほっとします",
    level: 4,
  }, // 18文字, 漢字3つ
  {
    label: "綺麗な夕焼けを見て感動しました",
    text: "きれいなゆうやけをみてかんどうしました",
    level: 4,
  }, // 19文字, 漢字3つ
  {
    label: "素晴らしい景色を見ることができました",
    text: "すばらしいけしきをみることができました",
    level: 4,
  }, // 20文字, 漢字4つ
  {
    label: "毎日新しいことを学ぶのが楽しいです",
    text: "まいにちあたらしいことをまなぶのがたのしいです",
    level: 4,
  }, // 20文字, 漢字4つ
  {
    label: "友達と一緒に映画を見るのが好きです",
    text: "ともだちといっしょにえいがをみるのがすきです",
    level: 4,
  }, // 19文字, 漢字3つ
  {
    label: "美味しいコーヒーを飲むのが楽しみです",
    text: "おいしいこーひーをのむのがたのしみです",
    level: 4,
  }, // 18文字, 漢字3つ
  {
    label: "健康のために毎日運動しています",
    text: "けんこうのためにまいにちうんどうしています",
    level: 4,
  }, // 20文字, 漢字4つ
  {
    label: "読書は知識を広げる素晴らしい方法です",
    text: "どくしょはちしきをひろげるすばらしいほうほうです",
    level: 4,
  }, // 20文字, 漢字5つ
  {
    label: "季節の移り変わりを楽しんでいます",
    text: "きせつのうつりかわりをたのしんでいます",
    level: 4,
  }, // 19文字, 漢字4つ
  {
    label: "毎日の運動は健康にとても良いです",
    text: "まいにちのうんどうはけんこうにとてもよいです",
    level: 4,
  }, // 20文字, 漢字4つ
  {
    label: "友達と楽しい時間を過ごすのが好きです",
    text: "ともだちとたのしいじかんをすごすのがすきです",
    level: 4,
  }, // 20文字, 漢字4つ
  {
    label: "新しい友達と一緒に過ごす時間",
    text: "あたらしいともだちといっしょにすごすじかん",
    level: 4,
  }, // 20文字, 漢字3つ
  {
    label: "忙しい一日の終わりにはリラックスする",
    text: "いそがしいいちにちのおわりにはりらっくすする",
    level: 4,
  }, // 19文字, 漢字3つ
  {
    label: "健康のためにバランスの取れた食事",
    text: "けんこうのためにばらんすのとれたしょくじ",
    level: 4,
  }, // 18文字, 漢字3つ
  {
    label: "毎日少しずつ練習を続けることが重要です",
    text: "まいにちすこしずつれんしゅうをつづけることがじゅうようです",
    level: 4,
  }, // 20文字, 漢字5つ
];

export const challengesLevel5: TypingChallenge[] = [
  {
    label: "国際連合気候変動枠組条約について勉強しましょう",
    text: "こくさいれんごうきこうへんどうわくぐみじょうやくについてべんきょうしましょう",
    level: 5,
  }, // 33文字, 漢字10つ
  {
    label: "タイピング練習を続けて技術を向上させることが重要です",
    text: "たいぴんぐれんしゅうをつづけてぎじゅつをこうじょうさせることがじゅうようです",
    level: 5,
  }, // 33文字, 漢字5つ
  {
    label: "持続可能な開発目標を達成するためには協力が必要です",
    text: "じぞくかのうなかいはつもくひょうをたっせいするためにはきょうりょくがひつようです",
    level: 5,
  }, // 35文字, 漢字7つ
  {
    label: "プログラミングを学ぶことは将来のために非常に役立ちます",
    text: "ぷろぐらみんぐをまなぶことはしょうらいのためにひじょうにやくだちます",
    level: 5,
  }, // 31文字, 漢字5つ
  {
    label: "新しい技術を習得することで仕事の効率が大幅に向上します",
    text: "あたらしいぎじゅつをしゅうとくすることでしごとのこうりつがおおはばにこうじょうします",
    level: 5,
  }, // 36文字, 漢字7つ
  {
    label: "読書は知識を広げるだけでなく、心の安定にも役立ちます",
    text: "どくしょはちしきをひろげるだけでなく、こころのあんていにもやくだちます",
    level: 5,
  }, // 30文字, 漢字6つ
  {
    label: "健康的な生活習慣を身に付けることは、長寿の秘訣です",
    text: "けんこうてきなせいかつしゅうかんをみにつけることは、ちょうじゅのひけつです",
    level: 5,
  }, // 31文字, 漢字6つ
  {
    label: "毎日少しずつ練習を積み重ねることが、成功への道です",
    text: "まいにちすこしずつれんしゅうをつみかさねることが、せいこうへのみちです",
    level: 5,
  }, // 29文字, 漢字6つ
  {
    label: "友達と一緒に過ごす時間が、最も大切な思い出となります",
    text: "ともだちといっしょにすごすじかんが、もっともたいせつなおもいでとなります",
    level: 5,
  }, // 29文字, 漢字5つ
  {
    label: "持続可能な社会を実現するためには、環境保護が不可欠です",
    text: "じぞくかのうなしゃかいをじつげんするためには、かんきょうほごがふかけつです",
    level: 5,
  }, // 32文字, 漢字7つ
  {
    label: "プログラミングスキルを高めるために、毎日の練習が必要です",
    text: "ぷろぐらみんぐすきるをたかめるために、まいにちのれんしゅうがひつようです",
    level: 5,
  }, // 30文字, 漢字6つ
  {
    label: "新しい友達を作ることで、様々な文化を学ぶことができます",
    text: "あたらしいともだちをつくることで、さまざまなぶんかをまなぶことができます",
    level: 5,
  }, // 31文字, 漢字5つ
  {
    label: "旅行を通じて、新しい経験と知識を得ることができます",
    text: "りょこうをつうじて、あたらしいけいけんとちしきをえることができます",
    level: 5,
  }, // 30文字, 漢字6つ
  {
    label: "美しい自然を守るためには、私たち一人一人の努力が必要です",
    text: "うつくしいしぜんをまもるためには、わたしたちひとりひとりのどりょくがひつようです",
    level: 5,
  }, // 33文字, 漢字7つ
  {
    label: "健康のためにバランスの取れた食事と運動を心掛けましょう",
    text: "けんこうのためにばらんすのとれたしょくじとうんどうをこころがけましょう",
    level: 5,
  }, // 31文字, 漢字6つ
  {
    label: "読書を通じて、自分自身の視野を広げることができます",
    text: "どくしょをつうじて、じぶんじしんのしやをひろげることができます",
    level: 5,
  }, // 30文字, 漢字6つ
  {
    label: "友達と一緒に過ごす時間が、最高のリフレッシュになります",
    text: "ともだちといっしょにすごすじかんが、さいこうのりふれっしゅになります",
    level: 5,
  }, // 30文字, 漢字5つ
  {
    label: "美味しい料理を作ることは、創造力を発揮する素晴らしい方法です",
    text: "おいしいりょうりをつくることは、そうぞうりょくをはっきするすばらしいほうほうです",
    level: 5,
  }, // 35文字, 漢字7つ
  {
    label: "季節の変わり目には、体調管理に特に注意が必要です",
    text: "きせつのかわりめには、たいちょうかんりにとくにちゅういがひつようです",
    level: 5,
  }, // 29文字, 漢字6つ
  {
    label: "読書は新しい世界を広げるだけでなく、心を豊かにします",
    text: "どくしょはあたらしいせかいをひろげるだけでなく、こころをゆたかにします",
    level: 5,
  }, // 30文字, 漢字5つ
  {
    label: "健康的な生活習慣を続けることが、長寿の秘訣です",
    text: "けんこうてきなせいかつしゅうかんをつづけることが、ちょうじゅのひけつです",
    level: 5,
  }, // 29文字, 漢字6つ
  {
    label: "新しいスキルを学ぶことで、自分自身を成長させることができます",
    text: "あたらしいすきるをまなぶことで、じぶんじしんをせいちょうさせることができます",
    level: 5,
  }, // 33文字, 漢字5つ
  {
    label: "友達と楽しい時間を共有することで、絆が深まります",
    text: "ともだちとたのしいじかんをきょうゆうすることで、きずながふかまります",
    level: 5,
  }, // 29文字, 漢字5つ
  {
    label: "新しい技術を学ぶことは、将来の可能性を広げるために重要です",
    text: "あたらしいぎじゅつをまなぶことは、しょうらいのかのうせいをひろげるためにじゅうようです",
    level: 5,
  }, // 34文字, 漢字7つ
  {
    label: "健康のためには、毎日の運動とバランスの取れた食事が必要です",
    text: "けんこうのためには、まいにちのうんどうとばらんすのとれたしょくじがひつようです",
    level: 5,
  }, // 33文字, 漢字7つ
  {
    label: "プログラミングスキルを高めるためには、継続的な練習が重要です",
    text: "ぷろぐらみんぐすきるをたかめるためには、けいぞくてきなれんしゅうがじゅうようです",
    level: 5,
  }, // 32文字, 漢字6つ
  {
    label: "読書は知識を増やすだけでなく、心の健康にも良い影響を与えます",
    text: "どくしょはちしきをふやすだけでなく、こころのけんこうにもよいえいきょうをあたえます",
    level: 5,
  }, // 35文字, 漢字8つ
  {
    label: "友達との時間を大切にすることで、充実した毎日を過ごすことができます",
    text: "ともだちとのじかんをたいせつにすることで、じゅうじつしたまいにちをすごすことができます",
    level: 5,
  }, // 36文字, 漢字7つ
];
