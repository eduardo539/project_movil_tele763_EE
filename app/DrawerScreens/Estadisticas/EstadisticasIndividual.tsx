import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EstadisticasIndividual() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estadisticas Individual</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
