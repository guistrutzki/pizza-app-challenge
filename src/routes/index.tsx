import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from './utils/Constants';
import SCREENS from '../screens';

const { ROUTES } = Constants;

const Stack = createStackNavigator();

const AppContainer: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.PRELOAD} component={SCREENS.PRELOAD} />
        <Stack.Screen
          name={ROUTES.CHOOSE_SIZE}
          component={SCREENS.CHOOSE_SIZE}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
