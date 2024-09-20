import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PetListScreen from './screens/PetListScreen';
import GameScreen from './screens/GameScreen';
import PetDetailScreen from './screens/PetDetailScreen';

type IconName = keyof typeof Ionicons.glyphMap;

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName;
          switch (route.name) {
            case 'Listagem':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'Jogos':
              iconName = focused ? 'game-controller' : 'game-controller-outline';
              break;
            case 'Detalhes':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            default:
              iconName = 'alert'; // Ícone padrão
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false
      })}
    >
      <Tab.Screen name="Listagem" component={PetListScreen} />
      <Tab.Screen name="Jogos" component={GameScreen} />
      <Tab.Screen name="Detalhes" component={PetDetailScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;








