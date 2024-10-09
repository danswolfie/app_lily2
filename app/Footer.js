// Footer.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.footerCol}>
          <Text style={styles.header}></Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Quem somos</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Nossos serviços</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Política de Privacidade</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Programa de afiliados</Text>
        </View>

        <View style={styles.footerCol}>
          <Text style={styles.header}>Ajuda</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>FAQ</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Produtos</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Devoluções</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Status de Pedido</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('#')}>Opções de Pagamento</Text>
        </View>

        <View style={styles.footerCol}>
          <Text style={styles.header}>Cadastre-se</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o seu e-mail"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={styles.socialMedia}>
            <Ionicons name="logo-facebook" size={24} />
            <Ionicons name="logo-instagram" size={24} />
            <Ionicons name="logo-twitter" size={24} />
            <Ionicons name="logo-linkedin" size={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7c4c6',
    padding: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerCol: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  link: {
    color: 'white',
    marginVertical: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default Footer;
