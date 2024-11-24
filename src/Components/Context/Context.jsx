import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const sixJsonData = createContext(null);

const SingInWithGoogle = new GoogleAuthProvider();

const Context = ({ children }) => {
  const [Data, setData] = useState([]);

  const [User, setUser] = useState(null);
  const [UserEnroll, setUserEnroll] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/FakeData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const CreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogInAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, SingInWithGoogle);
  };

  const LogOutAccount = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
      // console.log('Your account created successfully', User);
      setUser(User);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const obj = {
    Data,
    User,
    setUser,
    UserEnroll,
    setUserEnroll,
    CreateNewUser,
    LogInAccount,
    LogInWithGoogle,
    LogOutAccount,
    Loading,
  };

  return (
    <sixJsonData.Provider value={obj}>
      {children}
      <ToastContainer />
    </sixJsonData.Provider>
  );
};

export default Context;
