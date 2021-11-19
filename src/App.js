import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import UserForm from './views/UserForm'
import UserList from './views/UserList'

const Stack = createNativeStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
    <StatusBar style="light"/>
      <Stack.Navigator initialRouteName="List" screenOptions={screenOptions}>
        <Stack.Screen 
          name="List"
          component={UserList}
          options={({navigation}) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  type = 'clear'
                  icon = {<Icon name='add' size={25} color='white'/>}
                  onPress={() => navigation.navigate('Form')}
                />
              )
            };
          }}
        />
        <Stack.Screen name="Form" component={UserForm} options={{title: 'Formulário'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#368BB0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}