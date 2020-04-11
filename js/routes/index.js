import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import FirstScreen from '../Screens/FirstScreen/container';

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FirstScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator;