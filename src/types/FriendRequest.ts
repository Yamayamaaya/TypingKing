import type { Timestamp } from "firebase/firestore";

export type FriendRequest = {
  id: string;
  fromUserId: string;
  toUserId: string;
  status: "pending" | "accepted" | "rejected";
  createdTime: Timestamp;
  updatedTime: Timestamp;
};
