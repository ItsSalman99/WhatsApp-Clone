import React, { useEffect } from "react";
import MainNavigation from "./src/navigations/MainNavigation";
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return(
    <MainNavigation/>
    )
}

export default App;