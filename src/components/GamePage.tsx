import React, { useState, useEffect, useCallback, useRef, use } from "react";
import { Input } from "@/components/ui/input";
import { generateAllRomajiCombinations } from "../feature/generateAllRomajiCombinations";
import Lottie from "lottie-react";
import fireAnimation from "../../public/fire-animation.json";
import {
  challengesLevel1,
  challengesLevel2,
  challengesLevel3,
  challengesLevel4,
  challengesLevel5,
} from "../feature/challenges";
import type { TypingChallenge } from "../feature/challenges";
import { User } from "../types/user";
import { useSaveDataToFirestore } from "../hooks/firebase/useSaveDataToFirestore";
import useSound from "use-sound";
import { useSoundContext } from "../feature/sound/soundProvider";

export const GamePage = ({
  setState,
  setResult,
  user,
}: {
  setState: (newState: "start" | "count" | "game" | "result") => void;
  setResult: React.Dispatch<
    React.SetStateAction<{
      score: number;
      wpm: number;
      mistakes: number;
      accuracy: number;
    }>
  >;
  user: User;
}) => {
  const INITIAL_TIME = 60;

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME);
  const [totalTime, setTotalTime] = useState(INITIAL_TIME);

  const [currentChallenge, setCurrentChallenge] =
    useState<TypingChallenge | null>(null);
  const [consecutiveSuccess, setConsecutiveSuccess] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentChallengeRomajiList, setCurrentChallengeRomajiList] = useState<
    string[]
  >([]);

  const [totalInputCount, setTotalInputCount] = useState(0);
  const [correctInputCount, setCorrectInputCount] = useState(0);
  const [mistypeCount, setMistypeCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const [scoreDelta, setScoreDelta] = useState<number | null>(null);
  const [timeDelta, setTimeDelta] = useState<number | null>(null);

  const saveDataToFirestore = useSaveDataToFirestore();

  const { isSoundOn } = useSoundContext();
  const [playSuccess] = useSound("/sounds/type.mp3");
  const [playError] = useSound("/sounds/miss.mp3");
  const [playPoint] = useSound("/sounds/point.mp3");

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(timer);
    } else {
      handleFinish();
    }
  }, [time]);

  const getNextChallenge = useCallback(() => {
    const getLevel = (successCount: number) => {
      if (successCount >= 40) return 5;
      if (successCount >= 25) return 4;
      if (successCount >= 15) return 3;
      if (successCount >= 5) return 2;
      return 1;
    };

    const level = getLevel(consecutiveSuccess);
    const availableChallenges = (() => {
      switch (level) {
        case 1:
          return challengesLevel1;
        case 2:
          return challengesLevel2;
        case 3:
          return challengesLevel3;
        case 4:
          return challengesLevel4;
        case 5:
          return challengesLevel5;
        default:
          return challengesLevel1;
      }
    })();

    const randomChallenge =
      availableChallenges[
        Math.floor(Math.random() * availableChallenges.length)
      ];
    setCurrentChallenge(randomChallenge);
    const romajiList = generateAllRomajiCombinations(randomChallenge.text);
    setCurrentChallengeRomajiList(romajiList);
  }, [consecutiveSuccess]);

  useEffect(() => {
    getNextChallenge();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const inputChar = event.key;
    setTotalInputCount(totalInputCount + 1);

    if (currentChallenge) {
      const expectedChars = currentChallengeRomajiList.map(
        (romaji) => romaji[inputValue.length]
      );

      if (inputChar === "'" || expectedChars.includes(inputChar)) {
        setInputValue(inputValue + inputChar);
        setConsecutiveSuccess(consecutiveSuccess + 1);
        setCorrectInputCount(correctInputCount + 1);
        if (isSoundOn) playSuccess();

        // 基礎得点として10点を追加
        setScore(score + 5);

        const updatedRomajiList = currentChallengeRomajiList.filter((romaji) =>
          romaji.startsWith(inputValue + inputChar)
        );

        setCurrentChallengeRomajiList(updatedRomajiList);
        if (
          consecutiveSuccess + 1 >= 60 &&
          (consecutiveSuccess + 1 - 60) % 30 === 0
        ) {
          setTime((prevTime) => prevTime + 1);
          setTotalTime((prevTotalTime) => prevTotalTime + 1);
          setTimeDelta(1);
          setTimeout(() => setTimeDelta(null), 1000);
        }

        if (
          updatedRomajiList.length > 0 &&
          inputValue + inputChar === updatedRomajiList[0]
        ) {
          let points = currentChallenge.text.length * 10;

          if (consecutiveSuccess + 1 === 5) points += 20;
          if (consecutiveSuccess + 1 === 10) points += 50;
          if (
            consecutiveSuccess + 1 === 20 ||
            (consecutiveSuccess + 1 > 20 && (consecutiveSuccess + 1) % 10 === 0)
          )
            points += 100;

          switch (currentChallenge.level) {
            case 1:
              points += 50;
              break;
            case 2:
              points += 100;
              break;
            case 3:
              points += 200;
              break;
            case 4:
              points += 300;
              break;
            case 5:
              points += 500;
              break;
          }

          setScore(score + points);
          setScoreDelta(points);
          if (isSoundOn) playPoint();
          setTimeout(() => setScoreDelta(null), 1000);
          setInputValue("");
          getNextChallenge();
        }
      } else {
        setMistypeCount(mistypeCount + 1);
        setConsecutiveSuccess(0);
        if (isSoundOn) playError();
      }
    }
  };

  const handleFinish = async () => {
    const resultData = {
      score,
      wpm: Math.floor((totalInputCount / 5 / totalTime) * 60),
      mistakes: mistypeCount,
      accuracy: Math.floor(
        ((totalInputCount - mistypeCount) / totalInputCount) * 100
      ),
    };

    setResult(resultData);
    setState("result");

    const userData = {
      bestScore: {
        score:
          resultData.score >= (user.bestScore?.score || 0)
            ? resultData.score
            : user.bestScore?.score || 0,
        wpm:
          resultData.score >= (user.bestScore?.score || 0)
            ? resultData.wpm
            : user.bestScore?.wpm || 0,
        mistakes:
          resultData.score >= (user.bestScore?.score || 0)
            ? resultData.mistakes
            : user.bestScore?.mistakes || 0,
        accuracy:
          resultData.score >= (user.bestScore?.score || 0)
            ? resultData.accuracy
            : user.bestScore?.accuracy || 0,
        createdTime: new Date(),
      },
      bestWpm: Math.max(user.bestWpm || 0, resultData.wpm),
      bestMistakes: Math.min(
        user.bestMistakes != null ? user.bestMistakes : Infinity,
        resultData.mistakes
      ),
      bestAccuracy: Math.max(user.bestAccuracy || 0, resultData.accuracy),
      updatedTime: new Date(),
    };

    try {
      await saveDataToFirestore("users", userData, user.id);
    } catch (error) {
      console.error("Error saving game result to Firestore:", error);
    }
  };

  const renderRomajiWithHighlight = () => {
    if (!currentChallengeRomajiList || currentChallengeRomajiList.length === 0)
      return "...loading";
    const romaji = currentChallengeRomajiList[0];
    const nextCharIndex = inputValue.length;
    return (
      <>
        {romaji.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color:
                index < nextCharIndex
                  ? "black"
                  : index === nextCharIndex
                  ? "red"
                  : "gray",
            }}
          >
            {char}
          </span>
        ))}
      </>
    );
  };

  const ProgressBar = ({
    time,
    initialTime,
  }: {
    time: number;
    initialTime: number;
  }) => {
    const progress = (time / initialTime) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-md h-4 mb-4">
        <div
          className="bg-green-500 h-4 rounded-md"
          style={{ width: `${100 - progress}%` }}
        ></div>
      </div>
    );
  };

  const getBackgroundColor = (score: number) => {
    const maxScore = 100; // 最大スコアを設定
    const intensity = Math.min(score / maxScore, 1);
    const red = Math.floor(255 * intensity);
    return `rgb(255, ${255 - red}, ${255 - red})`;
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full overflow-hidden
    w-full "
    >
      <div className="flex items-center justify-between w-full max-w-4xl px-4 mb-4 ">
        <div className="text-3xl font-bold text-white flex items-center">
          Combo:
          <span
            className="w-20 inline-block relative flex items-center justify-center"
            style={{
              color: getBackgroundColor(consecutiveSuccess),
            }}
          >
            {consecutiveSuccess}
            {timeDelta !== null && (
              <div className="absolute scaleUpFadeOut">
                {consecutiveSuccess}
              </div>
            )}
          </span>
        </div>
        <div className="text-3xl font-bold text-white">
          Score:
          <span className="w-28 inline-block text-end text-4xl relative">
            {score}
            {scoreDelta !== null && (
              <div
                className="absolute w-full text-end text-green-500 text-4xl"
                style={{
                  animation: "slideUpFadeOut 1s forwards",
                }}
              >
                +{scoreDelta}
              </div>
            )}
          </span>
        </div>
        <div className="text-3xl font-bold text-white relative">
          Time: <span className="w-20 inline-block text-end">{time}s</span>
          {timeDelta !== null && (
            <div className="absolute w-full text-end text-green-500 text-3xl scaleUpFadeOut">
              +{timeDelta}s
            </div>
          )}
          <ProgressBar time={time} initialTime={INITIAL_TIME} />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl z-10">
        <p className="text-xl font-medium mb-4 text-gray-800">
          {currentChallenge ? currentChallenge.label : "Loading..."}
        </p>
        <p className="text-lg font-medium mb-4 text-gray-800">
          {renderRomajiWithHighlight()}
        </p>
        <div className="relative">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Start typing..."
            className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            onKeyPress={handleTyping}
            value={inputValue}
            readOnly
          />
        </div>
      </div>
      <div
        className="fixed bottom-[49px] left-0 right-0 w-full flex justify-center z-0 transition-opacity duration-1000 ease-in-out"
        style={{ opacity: consecutiveSuccess > 66 ? 1 : 0 }}
      >
        <Lottie
          animationData={fireAnimation}
          loop={true}
          style={{
            width: "100%",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes slideUpFadeOut {
          0% {
            transform: translateY(-40px);
            opacity: 1;
          }
          70% {
            transform: translateY(-70px);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }

        @keyframes scaleUpFadeOut {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          70% {
            transform: scale(2);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        .slideUpFadeOut {
          animation: slideUpFadeOut 0.7s forwards;
        }

        .scaleUpFadeOut {
          animation: scaleUpFadeOut 0.7s forwards;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
};
