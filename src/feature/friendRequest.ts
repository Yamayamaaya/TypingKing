import { useSaveDataToFirestore } from "../hooks/firebase/useSaveDataToFirestore";
import { useUserById } from "../hooks/firestoreDocument/useUser";
import { FriendRequest } from "../types/FriendRequest";
import { User } from "../types/user";

const saveDataToFirestore = useSaveDataToFirestore();

export const createFriendRequest = async (userId: string, toUserId: string) => {
  await saveDataToFirestore("friendRequests", {
    fromUserId: userId,
    toUserId,
    status: "pending",
  });
};

export const acceptFriendRequest = async (
  user: User,
  friendRequest: FriendRequest
) => {
  await saveDataToFirestore(
    "friendRequests",
    { status: "accepted" },
    friendRequest.id
  );

  // userIdのユーザーにフレンドを追加
  await saveDataToFirestore(
    "users",
    {
      friends: user.friends.concat(friendRequest.fromUserId),
    },
    user.id
  );

  // fromUserIdのユーザーにフレンドを追加
  const { user: fromUser } = await useUserById(friendRequest.fromUserId);
  if (!fromUser) {
    return;
  }
  await saveDataToFirestore(
    "users",
    {
      friends: fromUser.friends.concat(user.id),
    },
    fromUser.id
  );
};

export const rejectFriendRequest = async (friendRequestId: string) => {
  await saveDataToFirestore(
    "friendRequests",
    { status: "rejected" },
    friendRequestId
  );
};
