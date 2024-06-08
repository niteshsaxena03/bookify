import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyChLIgTS48izN7zArySRh5fIFYKBehKNYU",
  authDomain: "bookify-ab720.firebaseapp.com",
  projectId: "bookify-ab720",
  storageBucket: "bookify-ab720.appspot.com",
  messagingSenderId: "209630862734",
  appId: "1:209630862734:web:23340ccc82bdee0fb918df",
};

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signUpUserWithEmailAndPassword = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      if (result) alert("Successfully signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    }
  };

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        signInWithGoogle,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
