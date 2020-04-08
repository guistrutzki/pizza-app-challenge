import React, { FC, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from './utils/Constants';
import SCREENS from '../screens';

const { ROUTES } = Constants;

const Stack = createStackNavigator();

const AppContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name={ROUTES.PRELOAD} component={SCREENS.PRELOAD} />
        ) : (
          <>
            <Stack.Screen
              options={{
                animationTypeForReplace: 'push',
                animationEnabled: false,
              }}
              name={ROUTES.CHOOSE_SIZE}
              component={SCREENS.CHOOSE_SIZE}
            />
            <Stack.Screen
              name={ROUTES.CHOOSE_TOPPINGS}
              component={SCREENS.CHOOSE_TOPPINGS}
            />
            <Stack.Screen
              name={ROUTES.CHECK_ORDER}
              component={SCREENS.CHECK_ORDER}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
