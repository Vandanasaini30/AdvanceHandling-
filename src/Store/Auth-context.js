import React, { useState,useEffect} from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin:(email,password)=>{}
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLogged] = useState(false);

  useEffect(()=>{ const storeduser=localStorage.getItem('isLoggedIn');
  if (storeduser==='1'){
   setIsLogged(true);
    }},[]);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLogged(false);
  };
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn','1');

    setIsLogged(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
