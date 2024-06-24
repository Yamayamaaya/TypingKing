import { useState, useEffect } from "react";
import type { User } from "@src/types/user";
import { getFirestore, doc } from "@firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

export const useUserById = (id?: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    const db = getFirestore();
    const userDocRef = doc(db, "users", id);

    const unsubscribe = onSnapshot(
      userDocRef,
      (doc) => {
        if (doc.exists()) {
          setUser({ ...doc.data(), id: doc.id } as User);
        } else {
          setUser(null);
        }
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [id]);

  return { user, loading, error };
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const db = getFirestore();
    const usersCollectionRef = collection(db, "users");

    const unsubscribe = onSnapshot(
      usersCollectionRef,
      (snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as User;
          })
        );
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  return { users, loading, error };
};

export const useUsersOnce = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const db = getFirestore();
        const usersCollectionRef = collection(db, "users");
        const snapshot = await getDocs(usersCollectionRef);
        setUsers(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as User;
          })
        );
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};
