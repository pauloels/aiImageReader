import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Home} from './src/screens/home';
import {AppProvider} from './src/hooks';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <AppProvider>
        <Home />
      </AppProvider>
    </SafeAreaView>
  );
}

export default App;
