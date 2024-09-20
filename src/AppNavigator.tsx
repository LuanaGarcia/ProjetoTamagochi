import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator'; // Ajuste o caminho conforme necessário
import PetRegistrationScreen from './screens/PetRegistrationScreen'; // Ajuste o caminho conforme necessário
import PetDetailScreen from './screens/PetDetailScreen'; // Ajuste o caminho conforme necessário
import { RootStackParamList } from './types/navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterPet" component={PetRegistrationScreen} options={{ title: 'Cadastro de Bichinho' }} />
        <Stack.Screen name="PetDetails" component={PetDetailScreen} options={{ title: 'Detalhes do Bichinho' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;



