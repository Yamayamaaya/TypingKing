import {
  Avatar,
  chakra,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuGroup,
} from "@chakra-ui/react";
import { useAuthContext } from "@src/feature/auth/provider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "@src/components/Navigate";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVolumeUp,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import type { User } from "@src/types/user";
import { useUserById } from "@/src/hooks/firestoreDocument/useUser";
import { pagesPath } from "@src/lib/pathpida/$path";
import { useCustomToast } from "@src/hooks/useCustomToast";
import { useSoundContext } from "@src/feature/sound/soundProvider";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { user: authUser } = useAuthContext();
  const { user } = useUserById(authUser?.uid);
  const toast = useCustomToast();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useCycle(false, true);
  const { isSoundOn, toggleSound } = useSoundContext();

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      toast("success", "サインアウトしました。");
      push(pagesPath.signin.$url());
    } catch (e) {
      console.error("Firebase Authentication Error", e);
    }
  };

  const handleToggle = () => {
    setIsOpen();
  };

  return (
    <chakra.header
      py={4}
      className={`sticky top-0 z-50 bg-white left-0 shadow-lg`}
    >
      <div className="flex items-center justify-end w-full px-8">
        <Navigate href={pagesPath.$url()}>
          <div
            className={`w-[190px] md:w-[250px] bg-no-repeat bg-center bg-cover image-rendering-auto`}
            style={{
              backgroundImage: `url( '/title.png')`,
              imageRendering: "auto",
              paddingTop: "31.25%", // 16:5のアスペクト比を維持
            }}
          />
        </Navigate>

        <button onClick={toggleSound} className="mx-6 ">
          {isSoundOn ? (
            <FontAwesomeIcon
              icon={faVolumeUp}
              className="w-8 h-8  text-black"
            />
          ) : (
            <FontAwesomeIcon
              icon={faVolumeXmark}
              className="w-8 h-8 text-black"
            />
          )}
        </button>
        <UserMenu user={user} handleSignOut={handleSignOut} />
      </div>
      <UserDrawer isOpen={isOpen} handleToggle={handleToggle} />
    </chakra.header>
  );
};

interface UserDrawerProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const sidebarVariants = {
  open: {
    clipPath: `circle(1500px at 50px 55px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(20px at 50px 55px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const UserDrawer: React.FC<UserDrawerProps> = ({ isOpen, handleToggle }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "300px",
          backgroundColor: "white",
          zIndex: 50, // ここを変更
          padding: "35px 30px",
        }}
      >
        <MenuToggle toggle={handleToggle} isOpen={isOpen} />
        <div className="flex flex-col items-start ml-1.5 mt-4 z-100">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <Navigate href={pagesPath.$url()}>
              <p className="text-gray-700 hover:text-black hover:font-semibold my-2 ">
                トップページ
              </p>
            </Navigate>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <Navigate href={pagesPath.mypage.profile.$url()}>
              <p className="text-gray-700 hover:text-black hover:font-semibold my-2">
                設定
              </p>
            </Navigate>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: -1, // ここを変更
        }}
        onClick={handleToggle}
      ></motion.div>
    </>
  );
};

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="w-10 h-10 flex items-center justify-center"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);

interface UserMenuProps {
  user: User | null;
  handleSignOut: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, handleSignOut }) => {
  const { push } = useRouter();
  return (
    <>
      {user ? (
        <Menu>
          <MenuButton>
            <Avatar
              flexShrink={0}
              width={10}
              height={10}
              src={user.iconImageUrl || "default_image_url"}
            />
          </MenuButton>
          <MenuList py={0}>
            <h4 className="px-3 pt-2 text-sm font-semibold text-gray-700">
              {user.name}
            </h4>
            <MenuDivider />
            <MenuGroup title="マイページ">
              <MenuItem
                onClick={() => push(pagesPath.mypage.profile.$url())}
                className="text-sm"
              >
                設定
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="アカウント">
              <MenuItem
                onClick={handleSignOut}
                className="text-sm"
                cursor={"pointer"}
              >
                サインアウト
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      ) : (
        <Menu>
          <MenuButton>
            <Avatar flexShrink={0} width={10} height={10} />
          </MenuButton>
          <MenuList py={0}>
            <h4 className="px-3 pt-2 text-sm font-semibold text-gray-700">
              ゲスト
            </h4>
            <MenuDivider />
            <MenuItem onClick={() => push(pagesPath.signin.$url())}>
              サインイン
            </MenuItem>
            <MenuItem onClick={() => push(pagesPath.signin.$url())}>
              サインアップ
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};
