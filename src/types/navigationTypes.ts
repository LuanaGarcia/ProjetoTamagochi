// src/types/navigationTypes.ts
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;  // Adicionando 'Home' para o BottomTabNavigator
  PetList: undefined;
  RegisterPet: undefined;
  PetDetails: undefined;
  Game: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type PetListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PetList'>;
export type PetRegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterPet'>;
export type PetDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PetDetails'>;
export type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;


