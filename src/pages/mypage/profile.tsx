import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  useBreakpointValue,
  Avatar,
} from "@chakra-ui/react";
import { useAuthContext } from "@src/feature/auth/provider/AuthProvider";
import { useUserById } from "@/src/hooks/firestoreDocument/useUser";
import CustomPage from "@src/components/CustomPage";
import { userPropertiesLabel, type User } from "@src/types/user";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { EditModal } from "@src/components/EditModal";
import { ScoreCard } from "@src/components/ScoreCard";

export const ProfilePage = () => {
  const { user: authUser } = useAuthContext();
  const { user, loading } = useUserById(authUser?.uid);

  const tableSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [updateProperty, setUpdateProperty] = useState<keyof User>("name");

  const EditButton = ({ property }: { property: keyof User }) => {
    return (
      <button
        onClick={() => {
          setUpdateProperty(property);
          onOpen();
        }}
        className="flex items-center justify-center w-4 h-4"
      >
        <FontAwesomeIcon icon={faPen} size="sm" width="12" height="12" />
      </button>
    );
  };

  return (
    <CustomPage
      title="Setting"
      isTitleHidden={true}
      isAuthPageHidden={true}
      loading={loading}
    >
      <div className="w-full flex my-14 flex-col border border-gray-200 rounded-md shadow-sm bg-white">
        <h2 className="font-bold p-4 w-full text-xl text-center">Setting</h2>
        <div className="md:p-12 md:pt-0 w-full flex flex-col items-center">
          <div className="mt-6 relative">
            <Avatar
              flexShrink={0}
              width={20}
              height={20}
              src={user?.iconImageUrl || "default_image_url"}
              className="absolute"
            />
            <div className="absolute bottom-0 right-1">
              <EditButton property="iconImageUrl" />
            </div>
          </div>
          <TableContainer className="mt-8 mb-4 w-[90%] mx-[5%]">
            <Table variant="simple" size={tableSize}>
              <Thead></Thead>
              <Tbody>
                <Tr>
                  <Td>{userPropertiesLabel.name}</Td>
                  <Td>{user?.name}</Td>
                  <Td>
                    <EditButton property="name" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>{userPropertiesLabel.email}</Td>
                  <Td>{user?.email}</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <ScoreCard user={user!} isHiddenUser={true} />
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        documentId={authUser?.uid || ""}
        updateField={updateProperty}
        collectionName="users"
        label={userPropertiesLabel[updateProperty]}
        inputType={updateProperty === "iconImageUrl" ? "file" : "text"}
        currentValue={
          typeof user?.[updateProperty] === "string"
            ? user?.[updateProperty]
            : ""
        }
      />
    </CustomPage>
  );
};

export default ProfilePage;
