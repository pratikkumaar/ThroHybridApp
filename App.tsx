import React from 'react';
import { View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {
  return (
    <>
    <AppNavigation/>
    <FlashMessage position="top" />
    </>
  );
}

export default App;
