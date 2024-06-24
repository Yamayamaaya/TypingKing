import { User } from "../types/user";
import { ScoreCard } from "./ScoreCard";

export const ResultPage = ({
  setState,
  result,
  user,
}: {
  setState: (newState: "start" | "count" | "game" | "result") => void;
  result: {
    score: number;
    wpm: number;
    mistakes: number;
    accuracy: number;
  };
  user: User;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ScoreCard user={user} result={result} setState={setState} />
    </div>
  );
};
