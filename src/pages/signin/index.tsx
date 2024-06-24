import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Image from "next/image";
import { Button, Input } from "@chakra-ui/react"; // Added useToast import here
import { useSaveDataToFirestore } from "@src/hooks/firebase/useSaveDataToFirestore";
import { useRouter } from "next/router";
import { useCustomToast } from "@src/hooks/useCustomToast";
import { FirebaseError } from "firebase/app";
import { useSignInWithGoogle } from "@src/hooks/firebase/useSignInWithGoogle";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const saveDataToFirestore = useSaveDataToFirestore();
  const toast = useCustomToast();
  const { push } = useRouter();
  const signInWithGoogle = useSignInWithGoogle();

  const [mode, setMode] = useState<"signin" | "signup">("signup");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      if (mode === "signup") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await saveDataToFirestore(
          "users",
          {
            email,
            name: user,
            createdTime: new Date(),
            updatedTime: new Date(),
          },
          userCredential.user.uid
        );
        toast("success", "新規登録に成功しました。");
        push("/");
      } else if (mode === "signin") {
        await signInWithEmailAndPassword(auth, email, password);
        toast("success", "サインインに成功しました。");
        push("/");
      }
    } catch (error) {
      const firebaseError = error as FirebaseError; // エラーをFirebaseErrorにキャスト
      console.error(error);
      if (firebaseError.code) {
        switch (firebaseError.code) {
          case "auth/invalid-email":
            toast("error", "メールアドレスの形式が正しくありません。");
            break;
          case "auth/user-disabled":
            toast("error", "このユーザーは無効にされています。");
            break;
          case "auth/email-already-in-use":
            toast("error", "このメールアドレスは既に使用されています。");
            break;
          case "auth/user-not-found":
            toast("error", "ユーザーが見つかりません。");
            break;
          case "auth/wrong-password":
            toast("error", "パスワードが間違っています。");
            break;
          case "auth/too-many-requests":
            toast(
              "error",
              "リクエストが多すぎます。後ほど再試行してください。"
            );
            break;
          default:
            toast("error", "ログインに失敗しました。もう一度お試しください。");
        }
      } else {
        toast("error", "ログインに失敗しました。もう一度お試しください。");
      }
    }
  };

  const handleGoogleSignInOrUp = async () => {
    try {
      await signInWithGoogle();
      toast("success", "サインインしました。 ");
      return push("/");
    } catch (e) {
      toast("error", "エラーが発生しました。");
      if (e instanceof FirebaseError) {
        console.error("Firebase Authentication Error", e);
      }
      return null;
    }
  };

  return (
    <div className="w-[100%] flex  flex-col  items-center h-[100%] overflow-y-hidden">
      <div className="md:w-3/5 rounded-lg shadow-xl flex pt-8 w-4/5 md:mt-36 mt-40 flex-col items-center justify-center bg-white">
        <Image
          src="/title-rv.svg"
          width="380"
          height="50"
          alt="Title"
          className="md:block hidden"
        />
        <Image
          src="/title-rv.svg"
          width="270"
          height="50"
          alt="Title"
          className="md:hidden block"
        />
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center mt-8 w-4/5"
        >
          {mode === "signup" && (
            <Input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="ユーザーネーム"
              variant="filled"
              mb={4}
              size="xs"
              required
            />
          )}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレス"
            variant="filled"
            mb={4}
            size="xs"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワード"
            variant="filled"
            mb={4}
            size="xs"
            required
          />
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-2 md:gap-4 w-full items-center">
            <button
              className="bg-black text-white px-4 py-2 rounded border-none cursor-pointer text-sm font-bold "
              type="submit"
            >
              {mode === "signup" ? "新規登録" : "サインイン"}
            </button>
            <p className="text-xs">または</p>

            <button
              className="bg-gray-50 text-black px-4 py-2 rounded border border-black border-opacity-5 border-solid border-0.5
              cursor-pointer text-sm font-bold flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault(); // フォーム送信を防止
                handleGoogleSignInOrUp();
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                width="16"
                height="16"
                className="md:block hidden"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                width="12"
                height="12"
                className="md:hidden block"
              />
              <p className="text-sm">
                Googleで{mode === "signin" ? "サインイン" : "新規登録"}
              </p>
            </button>
          </div>
        </form>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="my-4"
        >
          {mode === "signin" ? "新規登録はこちら" : "サインインはこちら"}
        </button>
      </div>
    </div>
  );
};
export default SignInPage;
