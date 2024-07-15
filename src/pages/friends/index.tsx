import React from "react";
import CustomPage from "../../components/CustomPage";
import { Avatar } from "@chakra-ui/react";
import { User } from "../../types/user";
import { useSaveDataToFirestore } from "@/src/hooks/firebase/useSaveDataToFirestore";
import { useAuthContext } from "@/src/feature/auth/provider/AuthProvider";
import {
  useUserById,
  useUsersOnce,
} from "@/src/hooks/firestoreDocument/useUser";
import { FriendRequest } from "@/src/types/FriendRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faSearch } from "@fortawesome/free-solid-svg-icons";
import Fuse from "fuse.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// テスト用のUserデータ
const testUsers: any[] = [
  {
    id: 1,
    name: "John Doe",
    status: "pending",
  },
  {
    id: 2,
    name: "Jane Appleseed",
  },
  {
    id: 3,
    name: "Michael Jackson",
    status: "sent",
  },
  { id: 4, name: "Emily Smith" },
  {
    id: 5,
    name: "David Wilson",
  },
  { id: 6, name: "Sarah Anderson" },
];

const FriendsPage: React.FC = () => {
  const { user: authUser, loading: authLoading } = useAuthContext();
  const { user, loading: userLoading } = useUserById(authUser?.uid || "");
  const { users, loading: usersLoading } = useUsersOnce();
  const [searchResults, setSearchResults] = React.useState<any[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const fuse = new Fuse(users, {
    keys: ["id", "name"],
  });

  const handleSearch = (pattern: string) => {
    const result = fuse.search(pattern);
    setSearchResults(result.map((res) => res.item));
    setIsPopoverOpen(true);
  };

  const handleClickOutside = () => {
    setIsPopoverOpen(false);
  };

  return (
    <CustomPage
      title="トップページ"
      isSetUpOGP={false}
      isTitleHidden={true}
      isAuthPageHidden={false}
      loading={false}
      isLimitWidth={false}
    >
      <div
        className="flex flex-col h-full bg-white w-[80%] my-6 rounded-lg shadow-lg"
        onClick={handleClickOutside}
      >
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Friends</h2>
          <div
            className="relative flex items-center w-[35%] min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
            >
              <PopoverTrigger>
                <input
                  className="h-10 w-full border rounded-md pl-3 pr-3 py-2 text-sm"
                  placeholder="Search friends..."
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {searchResults.length > 0 ? (
                    searchResults.map((user) => (
                      <div key={user.id} className="p-2 border-b">
                        <p className="text-sm">{user.name}</p>
                        <p className="text-[0.6rem]">id: {user.id}</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-2">No results found</div>
                  )}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <Tabs>
            <TabList>
              <Tab>通常フレンド</Tab>
              <Tab>フレンドリクエスト</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="grid gap-4">
                  {testUsers
                    .filter((user) => !user.status)
                    .map((user) => (
                      <FriendItem key={user.id} name={user.name} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid gap-4">
                  {testUsers
                    .filter(
                      (user) =>
                        user.status === "sent" || user.status === "pending"
                    )
                    .map((user) => (
                      <FriendItem
                        key={user.id}
                        name={user.name}
                        status={user.status}
                      />
                    ))}
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </CustomPage>
  );
};

export default FriendsPage;

const FriendItem: React.FC<{
  name: string;
  status?: string;
}> = ({ name, status }) => {
  const getStatusText = (status: string | undefined) => {
    switch (status) {
      case "pending":
        return "Friend request pending";
      case "sent":
        return "Request sent";
      default:
        return null;
    }
  };

  const statusText = getStatusText(status);

  return (
    <div className="flex items-center gap-3">
      <Avatar
        flexShrink={0}
        width={8}
        height={8}
        src={"default_image_url"}
        className="absolute"
      />
      <div className="flex-1 grid gap-1">
        <div className="flex items-center justify-between">
          <div className="font-medium">
            {name}
            {statusText && (
              <div
                className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors  bg-green-300 border-transparent self-center ml-8`}
                data-v0-t="badge"
              >
                {statusText}
              </div>
            )}
          </div>
        </div>
      </div>
      {status === "pending" && (
        <div className="flex gap-2 mr-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-2">
            Approve
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-2">
            Reject
          </button>
        </div>
      )}
    </div>
  );
};
