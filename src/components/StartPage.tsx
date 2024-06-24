import { Input } from "@/components/ui/input";
import { Button, Divider } from "@chakra-ui/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import { useUsersOnce } from "../hooks/firestoreDocument/useUser";
import { Timestamp } from "firebase/firestore";
import { formatTimestamp } from "../feature/formatTimestamp";
import useSound from "use-sound";
import { useSoundContext } from "../feature/sound/soundProvider";

export const StartPage = ({
  setState,
}: {
  setState: (newState: "start" | "count" | "game" | "result") => void;
}) => {
  const { users } = useUsersOnce();
  const { isSoundOn } = useSoundContext();
  const [playHover] = useSound("/sounds/hover.mp3");
  const [playClick] = useSound("/sounds/click.mp3");

  const top10Users = users
    .filter((user) => user.bestScore)
    .sort((a, b) => b.bestScore?.score - a.bestScore?.score)
    .slice(0, 10);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="max-w-[90%] w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between my-8 gap-8">
          <div className="text-center ">
            <Image
              src="/title.svg"
              alt="title"
              width={400}
              height={0}
              style={{ height: "auto" }}
            />
          </div>
          <div className="flex items-end justify-end w-full md:w-1/2">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded-lg text-lg w-full"
              onClick={() => {
                if (isSoundOn) playClick();
                setState("count");
              }}
              onMouseEnter={() => {
                if (isSoundOn) playHover();
              }}
            >
              Start
            </button>
          </div>
        </div>
        <div className="bg-white  gap-6 rounded-lg shadow-lg flex justify-between items-center mb-6 flex-col lg:flex-row">
          <Card className="bg-white py-2 md:p-6 border-none shadow-none grow w-[90%]">
            <CardHeader>
              <CardTitle>Global Ranking</CardTitle>
            </CardHeader>
            <CardContent className="mt-6">
              <div className="grid gap-3">
                <RankingCard
                  name={users[0]?.name}
                  score={users[0]?.bestScore?.score}
                  date={users[0]?.bestScore.createdTime}
                  imageUrl={users[0]?.iconImageUrl}
                  rank={1}
                />
                <RankingCard
                  name={users[1]?.name}
                  score={users[1]?.bestScore?.score}
                  imageUrl={users[1]?.iconImageUrl}
                  rank={2}
                />
                <RankingCard
                  name={users[2]?.name}
                  score={users[2]?.bestScore?.score}
                  imageUrl={users[2]?.iconImageUrl}
                  rank={3}
                />
                <RankingCard
                  name={users[3]?.name}
                  score={users[3]?.bestScore?.score}
                  imageUrl={users[3]?.iconImageUrl}
                  rank={4}
                />
                <RankingCard
                  name={users[4]?.name}
                  score={users[4]?.bestScore?.score}
                  imageUrl={users[4]?.iconImageUrl}
                  rank={5}
                />
              </div>
            </CardContent>
          </Card>
          <Divider
            orientation="vertical"
            height={40}
            width={1}
            colorScheme="blackAlpha"
            size={"lg"}
            className="hidden lg:block"
          />
          <Divider
            orientation="horizontal"
            height={1}
            width="80%"
            colorScheme="blackAlpha"
            size={"lg"}
            className="block lg:hidden"
          />
          <Card className="bg-white py-2 md:p-6  border-none shadow-none grow w-[90%]">
            <CardHeader>
              <CardTitle>Friends Ranking</CardTitle>
            </CardHeader>
            <CardContent className="mt-6 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-white z-30 flex items-center justify-center">
                to be continued...
              </div>
              <div className="grid gap-3 z-10 relative">
                <RankingCard name="John Doe" score={100} rank={1} />
                <RankingCard name="Jane Appleseed" score={95} rank={2} />
                <RankingCard name="Lee Robinson" score={92} rank={3} />
                <RankingCard name="Lee Robinson" score={92} rank={3} />
                <RankingCard name="Lee Robinson" score={92} rank={3} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const RankingCard = ({
  name,
  score,
  rank,
  date,
  imageUrl = "default_image_url",
}: {
  name?: string;
  score?: number;
  rank?: number;
  date?: Timestamp;
  imageUrl?: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="font-semibold text-md md:text-xl w-2 md:w-4">
          {rank}
        </div>
        <Avatar
          flexShrink={0}
          width={8}
          height={8}
          src={imageUrl || "default_image_url"}
          className="absolute"
        />
        <div className="font-medium text-sm md:text-lg w-24 md:w-36">
          {name || "------"}
        </div>
        <div className="md:text-xs md:w-20 w-12 text-end text-[10px]">
          {date ? formatTimestamp(date!) : "----"}
        </div>
      </div>
      <div className="text-muted-foreground font-semibold text-md md:text-xl w-20 text-end">
        {score}
      </div>
    </div>
  );
};
