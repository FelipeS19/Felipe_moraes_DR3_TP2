import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Inicial = () => {
 
  return (
    <View style={styles.container}>
        <Text>Tela de Login</Text>
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
export default Inicial;
