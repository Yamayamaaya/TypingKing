import { Avatar, Badge } from "@chakra-ui/react";
import { User } from "../types/user";

interface ScoreCardProps {
  user: User;
  result?: {
    score: number;
    wpm: number;
    mistakes: number;
    accuracy: number;
  };
  setState?: (newState: "start" | "count" | "game" | "result") => void;
  isHiddenUser?: boolean;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  user,
  result,
  setState,
  isHiddenUser,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full mb-12">
      {!isHiddenUser && (
        <div className="flex flex-col items-center justify-center gap-8 text-2xl">
          <div className="flex flex-col items-center gap-1 mb-4">
            <Avatar
              flexShrink={0}
              width={14}
              height={14}
              src={user?.iconImageUrl || "default_image_url"}
              className="absolute"
            />
            <div className="text-lg font-semibold">{user?.name}</div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center gap-12 mb-16">
        {!result && (
          <div className="text-3xl font-bold -mb-6 mt-6 text-accent">
            Best Score
          </div>
        )}
        <div className="flex flex-col items-center gap-2">
          <div className="text-6xl font-bold">
            {result ? result.score : user?.bestScore.score}
          </div>
          {result && result.score >= user?.bestScore.score && (
            <div className="flex items-center gap-2 bg-[#37a16a] px-4 py-1 rounded-full">
              <TrophyIcon className="w-5 h-5 text-white" />
              <span className="text-lg font-medium text-white">Best</span>
            </div>
          )}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center w-1/3">
            <ClockIcon className="w-6 h-6 text-muted-foreground" />
            <div className="text-sm font-medium">
              <span className="text-lg font-bold mr-1">
                {result ? result.wpm : user?.bestScore.wpm}
              </span>
              WPM
            </div>
            {result && result.wpm >= user?.bestWpm && (
              <Badge
                variant="solid"
                colorScheme="green"
                className="text-xs"
                size="sm"
              >
                BEST
              </Badge>
            )}
          </div>
          <div className="flex flex-col items-center w-1/3">
            <XIcon className="w-6 h-6 text-muted-foreground" />
            <div className="text-sm font-medium">
              <span className="text-lg font-bold mr-1">
                {result ? result.mistakes : user?.bestScore.mistakes}
              </span>
              Mistakes
            </div>
            {result && result.mistakes <= user?.bestMistakes && (
              <Badge
                variant="solid"
                colorScheme="green"
                className="text-xs"
                size="sm"
              >
                BEST
              </Badge>
            )}
          </div>
          <div className="flex flex-col items-center w-1/3">
            <PercentIcon className="w-6 h-6 text-muted-foreground" />
            <div className="text-sm font-medium">
              <span className="text-lg font-bold mr-1">
                {(result ? result.accuracy : user?.bestScore.accuracy) || "--"}%
              </span>
              Accuracy
            </div>
            {result && result.accuracy >= user?.bestAccuracy && (
              <Badge
                variant="solid"
                colorScheme="green"
                className="text-xs"
                size="sm"
              >
                BEST
              </Badge>
            )}
          </div>
        </div>
      </div>
      {setState && (
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setState("start")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            ホームへ戻る
          </button>
          <button
            onClick={() => setState("count")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            もう一度遊ぶ
          </button>
        </div>
      )}
    </div>
  );
};

export default ScoreCard;

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PercentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
