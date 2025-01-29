import React, {useEffect} from 'react';
import {View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';
import {NetworkProvider} from './src/context/NetworkContext';
import messaging from '@react-native-firebase/messaging';

function App(): React.JSX.Element {
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      //console.log("message handled in background:",remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //console.log("Message handled on foreground",remoteMessage)
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <NetworkProvider>
        <AppNavigation />
      </NetworkProvider>
      <FlashMessage position="top" />
    </>
  );
}

export default App;
