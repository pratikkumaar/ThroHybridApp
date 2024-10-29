import React from 'react';
import {View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';
import {NetworkProvider} from './src/context/NetworkContext';

function App(): React.JSX.Element {
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
