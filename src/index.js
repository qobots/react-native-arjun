import 'react-native-gesture-handler';

import { persistor, store } from '@app/store';

import { NavigationContainer } from '@react-navigation/native';
import NavigationRoutes from '@app/navigations';
import { PersistGate } from "redux-persist/integration/react";
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { navigationRef } from '@app/navigations/RootNavigation';

const index = () => {

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <NavigationRoutes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default index;

