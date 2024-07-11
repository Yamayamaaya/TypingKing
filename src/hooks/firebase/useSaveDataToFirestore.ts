import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  runTransaction,
} from "firebase/firestore";
import { useCallback } from "react";

export const useSaveDataToFirestore = () => {
  const saveDataToFirestore = useCallback(
    async (
      collectionName: string,
      data: any,
      id?: string,
      subCollectionName?: string,
      subCollectionData?: any[]
    ): Promise<string> => {
      const db = getFirestore();
      let docRef: any;
      const timestamp = new Date();
      const timestampData = {
        createdTime: timestamp,
        updatedTime: timestamp,
      };

      if (id) {
        docRef = doc(db, collectionName, id);
        await runTransaction(db, async (transaction) => {
          const docSnapshot = await transaction.get(docRef);
          if (docSnapshot.exists()) {
            transaction.update(docRef, { ...data, updatedTime: timestamp });
          } else {
            transaction.set(docRef, { ...timestampData, ...data });
          }
        });
      } else {
        docRef = doc(collection(db, collectionName));
        await setDoc(docRef, { ...timestampData, ...data });
      }

      if (subCollectionName && subCollectionData) {
        const subCollectionRef = collection(docRef, subCollectionName);
        for (const item of subCollectionData) {
          await addDoc(subCollectionRef, { ...timestampData, ...item });
        }
      }

      return docRef.id;
    },
    []
  );

  return saveDataToFirestore;
};
