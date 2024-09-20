// src/screens/GameScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameScreenNavigationProp } from '../types/navigationTypes';

interface GameScreenProps {
  navigation: GameScreenNavigationProp;
}

const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Jogo do Bichinho</Text>
      {/* Implementação do jogo aqui */}
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

export default GameScreen;

