import React from "react";
import CustomPage from "../../components/CustomPage";
import { Avatar } from "@chakra-ui/react";
import { User } from "../../types/user";

const FriendsPage: React.FC = () => {
  return (
    <CustomPage
      title="トップページ"
      isSetUpOGP={false}
      isTitleHidden={true}
      isAuthPageHidden={false}
      loading={false}
      isLimitWidth={false}
    >
      <div className="flex flex-col h-full bg-white w-[80%] my-6 rounded-lg shadow-lg">
        <div className="bg-primary text-primary-foreground p-4 flex items-center">
          <h2 className="text-xl font-bold">Friends</h2>
          <div className="ml-auto flex items-center gap-2">
            <input
              className="flex h-10 w-full border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-primary-foreground/20 text-primary-foreground rounded-md px-3 py-2 text-sm"
              placeholder="Search friends..."
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-5 h-5"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="sr-only">Add Friend</span>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="grid gap-4">
            <FriendItem
              name="John Doe"
              status="Online"
              statusColor="bg-green-500"
              badgeText="Friend request pending"
            />
            <FriendItem
              name="Jane Appleseed"
              status="Online"
              statusColor="bg-green-500"
            />
            <FriendItem
              name="Michael Jackson"
              status="Offline"
              statusColor="bg-gray-500"
              badgeText="Request sent"
            />
            <FriendItem
              name="Emily Smith"
              status="Online"
              statusColor="bg-green-500"
            />
            <FriendItem
              name="David Wilson"
              status="Offline"
              statusColor="bg-gray-500"
            />
            <FriendItem name="Sarah Anderson" status="" statusColor="" />
          </div>
        </div>
      </div>
    </CustomPage>
  );
};

export default FriendsPage;

const FriendItem: React.FC<{
  // user: User;
  name: string;
  status: string;
  statusColor: string;
  badgeText?: string;
  showButtons?: boolean;
}> = ({ name, status, statusColor, badgeText, showButtons }) => (
  <div className="flex items-center gap-3">
    <Avatar
      flexShrink={0}
      width={8}
      height={8}
      // src={user?.iconImageUrl || "default_image_url"}
      src={"default_image_url"}
      className="absolute"
    />
    <div className="flex-1 grid gap-1">
      <div className="flex items-center justify-between">
        <div className="font-medium">
          {name}
          {badgeText && (
            <div
              className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors  bg-green-300 border-transparent self-center ml-4`}
              data-v0-t="badge"
            >
              {badgeText}
            </div>
          )}
        </div>
      </div>
    </div>
    {showButtons && (
      <div className="flex gap-2">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
          Approve
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
          Reject
        </button>
      </div>
    )}
  </div>
);
