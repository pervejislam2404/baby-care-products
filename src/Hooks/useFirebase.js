import { useState,useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,getIdToken } from "firebase/auth";
import axios from 'axios';
import swal from "sweetalert";
import firebaseInitialize from '../Firebase/Firebase.init';

firebaseInitialize();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoading,setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false);
  const [token,setToken] = useState(''); 

  const auth = getAuth();

  // login-with-google-method
  const loginWithGoogle = (location,history) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const redirect_url = location?.state?.from || '/';
        const user = result.user;
        setUser(user);
        saveUsers(user?.email,user?.displayName,'PUT')
        swal({
          title: "Login successful!",
          icon: "success",
        });
        history.replace(redirect_url)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
          setIsLoading(false);
      })
  };


// create-user-with-email-and-password
  const makeUserWithEmailPass = (email,password,name,history) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {        
        setError("");
        const newUser = { email, displayName: name };
        saveUsers(email, name, "POST");
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        swal({
          title: "Account created successful successful!",
          icon: "success",
        });
      })
      .catch((error) => {       
        const errorMessage = error.message;
        setError(errorMessage)
      })
      .finally(() => setIsLoading(false))
  }


// login-method-with-email-and-password
  const logInWithEmailAndPassword = (email, password,location,history) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {  
      const redirect_url = location?.state?.from || '/';    
      const user = userCredential.user;
      setError('')
      setUser(user)
      history.replace(redirect_url)
      swal({
        title: "Login successful!",
        icon: "success",
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    })
    .finally(() => setIsLoading(false))
  }

// saving-each-user-to-database
  const saveUsers= (email,name,method) => {
    const saveUser= {email,name};
    fetch('https://secure-sierra-71840.herokuapp.com/users',{
      method: method,
      headers: {
        'Content-Type': 'application/json'        
      },
      body: JSON.stringify(saveUser)
    })
  }



// logout-method
  const logOut= ()=>{
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
      
  }

// checking-the-user-is-admin-or-not
  useEffect(() => {
    axios(`https://secure-sierra-71840.herokuapp.com/checkAdmin/${user?.email}`)
    .then(res=>{
     setAdmin(res.data.admin);
    })
  },[user?.email])



// user-state-monitoring-function
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          getIdToken(user)
          .then((idToken) => {
           setToken(idToken);
          })
        } else {
          setUser({})
        }
        setIsLoading(false);
    });
    return unsubscribe;
  },[])



  return {
    loginWithGoogle,
    token,
    admin,
    user,
    setError,
    error,
    isLoading,
    logOut,
    makeUserWithEmailPass,
    logInWithEmailAndPassword
  };
};

export default useFirebase;
