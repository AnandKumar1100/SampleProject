import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../Screens/HomeScreen/container';
import Dropdown from '../commonComponents/Dropdown/container';

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Home',
              headerStyle:{shadowOffset: {
                width: 0,
                height: 2
              }
              },
              headerRightContainerStyle:{marginRight:16},
              headerRight: () => (
                <Dropdown/>
              )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator;