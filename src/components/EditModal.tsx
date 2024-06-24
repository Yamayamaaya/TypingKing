import { useEffect, useState, ChangeEvent, FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { initializeFirebaseApp } from "@src/lib/firebase/firebase";
import { useUpdateDataOnFirestore } from "@src/hooks/firebase/useUpdateDataOnFirestore";
import { useCustomToast } from "@src/hooks/useCustomToast";
import Image from "next/image";
import { Timestamp } from "firebase/firestore";

type inputType =
  | "text"
  | "textarea"
  | "file"
  | "timestamp"
  | "checkbox"
  | "number";

// 共通の値の型を定義
type CommonValueType =
  | string
  | number
  | boolean
  | Timestamp
  | undefined
  | object;

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentId: string;
  updateField: string;
  collectionName: string;
  label: string | object;
  inputType?: inputType;
  selectOptions?: { key: string; value: string }[];
  onUpdated?: () => void;
  currentValue?: CommonValueType;
}

interface CommonInputProps {
  formValue?: CommonValueType;
  setFormValue?: (value: CommonValueType) => void;
  currentValue?: CommonValueType;
  selectOptions?: { key: string; value: string }[];
  setPreviewUrl?: (url: string | null) => void;
}

const TextInput: FC<CommonInputProps> = ({
  formValue = "",
  setFormValue = () => {},
  currentValue = "",
}) => (
  <Input
    value={formValue as string}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setFormValue(e.target.value)
    }
    placeholder={currentValue as string}
  />
);

const TextAreaInput: FC<CommonInputProps> = ({
  formValue = "",
  setFormValue = () => {},
  currentValue = "",
}) => (
  <Textarea
    value={formValue as string}
    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
      setFormValue(e.target.value)
    }
    placeholder={currentValue as string}
  />
);

interface FileInputProps extends CommonInputProps {
  previewUrl?: string | null;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: FC<FileInputProps> = ({ previewUrl, handleImageUpload }) => {
  return (
    <>
      <Input type="file" onChange={handleImageUpload} size="sm" />
      {previewUrl && (
        <div
          style={{
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Image
            src={previewUrl}
            alt="プレビュー画像"
            width={500}
            height={300}
          />
        </div>
      )}
    </>
  );
};

const TimestampInput: FC<CommonInputProps> = ({
  formValue,
  setFormValue = () => {},
}) => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;

  const localISOTime = (date: Date) =>
    new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 16);

  return (
    <Input
      type="datetime-local"
      value={
        formValue instanceof Timestamp ? localISOTime(formValue.toDate()) : ""
      }
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setFormValue(
          Timestamp.fromDate(new Date(e.target.valueAsNumber + timezoneOffset))
        )
      }
    />
  );
};

const CheckboxInput: FC<CommonInputProps> = ({
  formValue = false,
  setFormValue = () => {},
}) => (
  <Checkbox
    isChecked={formValue as boolean}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setFormValue(e.target.checked)
    }
  />
);

const NumberInput: FC<CommonInputProps> = ({
  formValue = 0,
  setFormValue = () => {},
  currentValue = 0,
}) => (
  <ChakraNumberInput
    value={formValue as number}
    onChange={(valueString) => setFormValue(Number(valueString))}
    step={5}
  >
    <NumberInputField placeholder={currentValue as string} />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </ChakraNumberInput>
);

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  documentId,
  updateField,
  collectionName,
  label,
  inputType = "text",
  onUpdated,
  currentValue,
}) => {
  const [formValue, setFormValue] = useState<CommonValueType>(currentValue);
  useEffect(() => {
    setFormValue(currentValue);
  }, [updateField, currentValue]);
  const { storage } = initializeFirebaseApp();
  const toast = useCustomToast();
  const updateDataOnFirestore = useUpdateDataOnFirestore();

  const handleFormSubmit = async () => {
    try {
      await updateDataOnFirestore(
        collectionName,
        documentId,
        updateField,
        formValue
      );

      onClose();
      toast("success", "更新が完了しました", `${label}を更新しました`);
      if (onUpdated) onUpdated();
    } catch (error) {
      console.error(error);
      toast("error", "エラーが発生しました", "更新に失敗しました");
    }
  };

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false); // アップロード中の状態を追跡するステート

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    if (!e.target.files || e.target.files.length === 0) {
      setIsUploading(false);
      return;
    }
    const file = e.target.files[0];

    if (!file) {
      setIsUploading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    const fileRef = ref(
      storage,
      `images/${collectionName}/${updateField}/${documentId}/${file.name}`
    );
    try {
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);
      setFormValue(fileUrl);
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setIsUploading(false);
  };

  // 入力コンポーネントのマッピングオブジェクト
  const inputTypeComponents = {
    text: TextInput,
    textarea: TextAreaInput,
    file: FileInput,
    timestamp: TimestampInput,
    checkbox: CheckboxInput,
    number: NumberInput, // 数値入力用のコンポーネントを追加
  };

  // 選択された入力タイプに対応するコンポーネント
  const InputComponent = inputTypeComponents[inputType];
  console.log("isUploading", isUploading);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="90vw">
        <ModalHeader>編集</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>{label instanceof Object ? "" : label}</FormLabel>
            {isOpen && (
              <InputComponent
                formValue={formValue}
                setFormValue={setFormValue}
                currentValue={currentValue}
                handleImageUpload={handleImageUpload}
                previewUrl={previewUrl}
              />
            )}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3 disabled:bg-blue-300"
            onClick={handleFormSubmit}
            disabled={
              formValue === "" || formValue === currentValue || isUploading
            }
          >
            保存
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300"
            onClick={() => {
              onClose();
              setFormValue(undefined);
            }}
          >
            キャンセル
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
