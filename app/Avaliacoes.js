import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Avaliacoes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliações</Text>
      <Text style={styles.rating}>4,9/5</Text>

      <View style={styles.card}>
        {renderRating('Qualidade do serviço', 5)}
        {renderRating('Qualidade/preço', 4)}
        {renderRating('Qualidade/flexível', 5)}
      </View>
    </View>
  );
};

const renderRating = (label, stars) => (
  <View style={styles.ratingContainer}>
    <Text style={styles.ratingLabel}>{label}</Text>
    <View style={styles.starsContainer}>
      {[...Array(5)].map((_, index) => (
        <Ionicons
          key={index}
          name={index < stars ? "star" : "star-outline"}
          size={16}
          color={index < stars ? '#f7c4c6' : '#999'}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  rating: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingLabel: {
    fontSize: 16,
  },
  starsContainer: {
    flexDirection: 'row',
  },
});

export default Avaliacoes;
