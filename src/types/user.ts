import type { Timestamp } from "firebase/firestore";

export type User = {
  id: string;
  name: string;
  email: string;
  iconImageUrl: string;
  // 最高スコア時のスコア、WPM、ミス数、正確性
  bestScore: {
    score: number;
    wpm: number;
    mistakes: number;
    accuracy: number;
    createdTime: Timestamp;
  };
  // 各指標の自己ベスト
  bestWpm: number;
  bestMistakes: number;
  bestAccuracy: number;
  createdTime: Timestamp;
  updatedTime: Timestamp;
};

export const userPropertiesLabel = {
  id: "ID",
  name: "名前",
  email: "メールアドレス",
  iconImageUrl: "アイコン画像",
  bestScore: {
    score: "スコア",
    wpm: "WPM",
    mistakes: "ミス数",
    accuracy: "正確性",
    createdTime: "日時",
  },
  bestWpm: "WPM",
  bestMistakes: "ミス数",
  bestAccuracy: "正確性",
  createdTime: "作成日",
  updatedTime: "更新日",
};
