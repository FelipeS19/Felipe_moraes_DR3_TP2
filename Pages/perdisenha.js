// ../my-app/Components/Perdisenha.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Perdisenha = () => {
  return (
    <View style={styles.container}>
      <Text>Tela de Esqueci Minha Senha</Text>
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

export default Perdisenha;
