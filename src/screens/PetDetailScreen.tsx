// src/screens/PetDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { PetDetailScreenNavigationProp } from '../types/navigationTypes';

interface PetDetailScreenProps {
  navigation: PetDetailScreenNavigationProp;
}

const PetDetailScreen: React.FC<PetDetailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Detalhes do Bichinho</Text>
      <Button title="Alimentar" onPress={() => {}} />
      <Button title="Dormir" onPress={() => {}} />
      <Button title="Brincar" onPress={() => navigation.navigate('Game')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PetDetailScreen;
