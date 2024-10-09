// DicasEscolhaFlores.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import DicaImagem from '../src/assets/flor1.png'; // Substitua pelo caminho da sua imagem

export default function DicasEscolhaFlores() {
  return (
    <View style={styles.container}>
      <Image source={DicaImagem} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Dicas para Escolher Flores</Text>
        <Text style={styles.tip}>
          1. Considere a estação: algumas flores são sazonais.
        </Text>
        <Text style={styles.tip}>
          2. Pense na cor: escolha flores que combinem com a paleta.
        </Text>
        <Text style={styles.tip}>
          3. Consulte um florista: eles têm ótimas sugestões.
        </Text>
        <Text style={styles.tip}>
          4. Lembre-se do significado: cada flor tem seu simbolismo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f7c4c6',
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 100, 
    height: 100, 
    marginRight: 10,
    borderRadius: 10, 
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
  },
});
