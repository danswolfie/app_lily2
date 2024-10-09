import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../src/assets/galeria1.jpeg'),
  require('../src/assets/galeria2.jpeg'),
  require('../src/assets/galeria3.jpeg'),
  require('../src/assets/galeria4.jpeg'),
  require('../src/assets/galeria5.jpeg'),
  require('../src/assets/galeria6.jpeg'),
];

export default function GaleriaImagens() {
  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryTitle}>Galeria de Imagens</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {images.reduce((rows, image, index) => {
          if (index % 2 === 0) rows.push([]); 
          rows[rows.length - 1].push(image); 
          return rows;
        }, []).map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.row, rowIndex % 2 === 0 ? styles.rowRight : styles.rowLeft]}>
            {row.map((image, index) => (
              <Image
                key={index}
                source={image}
                style={styles.image}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rowLeft:{
    marginLeft: 40,
  },
  rowRight:{
    marginLeft: 10,
    marginRight: 40,
  },
  image: {
    width: '48%', 
    height: 150,
    borderRadius: 10,
  },
});
