import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchPets } from '../database';

interface Pet {
  id: number;
  name: string;
  details?: string;
}

const PetListScreen = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetchPets((success: boolean, data: Pet[] | Error) => {
      if (success) {
        setPets(data as Pet[]);
      } else {
        console.log('Failed to fetch pets', data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  }
});

export default PetListScreen;






