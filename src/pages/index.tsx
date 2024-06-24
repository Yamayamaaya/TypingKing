import React, { useState, useEffect, useCallback } from "react";
import CustomPage from "../components/CustomPage";
import { GamePage } from "../components/GamePage";
import { StartPage } from "../components/StartPage";
import { CountDownPage } from "../components/CountDownPage";
import { ResultPage } from "../components/ResultPage";
import Image from "next/image";
import { useAuthContext } from "../feature/auth/provider/AuthProvider";
import { useUserById } from "../hooks/firestoreDocument/useUser";
import useSound from "use-sound";
import { useSoundContext } from "../feature/sound/soundProvider";

const TopPage: React.FC = () => {
  const [state, setState] = useState<"start" | "count" | "game" | "result">(
    "start"
  );
  const [showAnimation, setShowAnimation] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    wpm: 0,
    mistakes: 0,
    accuracy: 0,
  });

  const { user: authUser } = useAuthContext();
  const { user } = useUserById(authUser?.uid);
  const { isSoundOn } = useSoundContext();

  const handleStateChange = (
    newState: "start" | "count" | "game" | "result"
  ) => {
    setShowAnimation(true);
    setTimeout(() => {
      setState(newState);
    }, 900);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1600); // アニメーションの時間と一致させる
  };

  const [playStartSound] = useSound("/sounds/start.mp3"); // スタート時の効果音
  const [playFinishSound] = useSound("/sounds/finish.mp3"); // 終了時の効果音

  useEffect(() => {
    if (state === "game") {
      if (isSoundOn) playStartSound();
    }
    if (state === "result") {
      if (isSoundOn) playFinishSound();
    }
  }, [state, playStartSound, playFinishSound, isSoundOn]);

  return (
    <CustomPage
      title="トップページ"
      isSetUpOGP={false}
      isTitleHidden={true}
      isAuthPageHidden={false}
      loading={false}
      isLimitWidth={false}
    >
      {state === "start" && <StartPage setState={handleStateChange} />}
      {state === "count" && (
        <CountDownPage setState={handleStateChange} user={user || undefined} />
      )}
      {state === "game" && (
        <GamePage
          setState={handleStateChange}
          setResult={setResult}
          user={user!}
        />
      )}
      {state === "result" && (
        <ResultPage setState={handleStateChange} result={result} user={user!} />
      )}
      {showAnimation && (
        <Image
          src="/wave.svg"
          alt="wave"
          width={0}
          height={0}
          className="absolute top-0 left-0 w-full z-50"
          style={{
            animation: "slideTopFadeOut 1.6s forwards",
          }}
        />
      )}
      <style>
        {`
          @keyframes slideTopFadeOut {
            0% {
              transform: translateY(100%);
              opacity: 1;
            }
            40% {
              transform: translateY(5%);
              opacity: 1;
            }
            60% {
              transform: translateY(-5%);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 1;
            }
          }

        `}
      </style>
    </CustomPage>
  );
};

export default TopPage;
