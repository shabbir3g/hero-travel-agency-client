import { useEffect, useState } from "react";
import initializeFirebase from "../components/Home/Login/Firebase/Firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // set user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const signInWidthGoogle = (location, navigate) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // obsurve user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email: email, displayName: displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    signInWidthGoogle,
    logOut,
    admin,
    authError,
  };
};

export default useFirebase;
