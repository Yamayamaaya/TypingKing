import Lottie from "lottie-react";
import React, { useCallback, useEffect, useState } from "react";
import countDownAnimation from "../../public/count-animation.json";
import { User } from "../types/user";
import { useRouter } from "next/router";

export const CountDownPage = ({
  setState,
  user,
}: {
  setState: (newState: "start" | "count" | "game" | "result") => void;
  user?: User;
}) => {
  const Router = useRouter();

  if (!user) {
    Router.push("/signin");
    return null;
  }

  const [isVisible, setIsVisible] = useState(true);

  const countDown = useCallback(() => {
    setTimeout(() => {
      setState("game");
    }, 2800);
  }, [setState]);

  useEffect(() => {
    countDown();
  }, []);

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-start h-full w-full">
      {isVisible && (
        <Lottie
          animationData={countDownAnimation}
          loop={false}
          style={{
            height: "90vh",
          }}
          onComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
};
