// ../my-app/Components/Novo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Novo = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Novo Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Novo;
