import React, {useState} from 'react';
import MainPage from './MainPage';
import LoginPage from "./LoginPage";



function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
      setIsLoggedIn(true);
  }

  return(
     <>
     <div>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>

     </>
  );

}


export default App

