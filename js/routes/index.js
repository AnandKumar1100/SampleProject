import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

import HomeScreen from '../Screens/HomeScreen/container';

function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Discover',
              headerTitleAlign:'center',
              headerStyle:{shadowOffset: {
                width: 0,
                height: 2
              }
              },
              headerRightContainerStyle: { marginRight: 2 },
              headerLeftContainerStyle: {marginLeft: 12},
              headerLeft: () => (<Icon name="settings" size={20} color={'#379aff'}/>),
              headerRight: () => (
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize: 16}}>My Feed</Text>
                  <Icon name="chevron-right" size={22} color={'#379aff'}/>
                  </View>
              )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default AppNavigator;