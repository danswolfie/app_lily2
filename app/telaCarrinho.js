import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Footer from './Footer';

export default function Carrinho() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100, flexGrow: 1 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#f7c4c6' }}>Itens no Carrinho</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 24, marginBottom: 10,}}>Nenhum item adicionado ainda.</Text>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
