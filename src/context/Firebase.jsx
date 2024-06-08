import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

export const FirebaseProvider = ({ children }) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  return (
    <FirebaseContext.Provider
      value={{signUpUserWithEmailAndPassword }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
