// src/screens/PetRegistrationScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { PetRegistrationScreenNavigationProp } from '../types/navigationTypes';

interface PetRegistrationScreenProps {
  navigation: PetRegistrationScreenNavigationProp;
}

const PetRegistrationScreen: React.FC<PetRegistrationScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Cadastro de Bichinho</Text>
      <TextInput placeholder="Nome do Bichinho" />
      <Button title="Salvar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default PetRegistrationScreen;

