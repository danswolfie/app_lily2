import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, SafeAreaView, ScrollView, Dimensions, ImageBackground, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Carrossel1 from '../src/assets/carrossel1.jpg';
import Carrossel2 from '../src/assets/carrossel2.jpg';
import Carrossel3 from '../src/assets/carrossel3.jpg';
import GaleriaImagens from './GaleriaImagens';
import DicasEscolhaFlores from './DicasEscolhaFlores';
import Avaliacoes from './Avaliacoes';
import Footer from './Footer';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  { title: 'A Beleza das Flores', description: 'As flores encantam com suas cores vibrantes e aromas delicados, trazendo alegria e beleza ao nosso dia a dia.', image: Carrossel1 },
  { title: 'Flores e Emoções', description: 'Presentes simbólicos, as flores transmitem sentimentos como amor, amizade e gratidão, tornando momentos especiais ainda mais memoráveis.', image: Carrossel2 },
  { title: 'Ciclos da Natureza', description: 'As flores representam a transitoriedade da vida, florescendo e murchando em ciclos que nos lembram da beleza efêmera da natureza.', image: Carrossel3 },
];

export default function Home() {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const filters = ["Casamentos", "Vasos", "Rosas", "Buquês"];

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
    if (filter === "Casamentos") {
      navigation.navigate("telaCasamentos");
    } else if (filter === "Vasos") {
      navigation.navigate("telaVasos");
    } else if (filter === "Rosas") {
      navigation.navigate("telaRosas");
    } else if (filter === "Buquês") {
      navigation.navigate("telaBuques");
    }
  };

  const floresDestaque = [
    { nome: 'Lírios', image: require('../src/assets/lirio.jpeg') },
    { nome: 'Rosas', image: require('../src/assets/rosa.jpeg') },
    { nome: 'Tulipas', image: require('../src/assets/tulipa.jpeg') },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#f7c4c6" />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20, paddingTop: StatusBar.currentHeight }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingHorizontal: 20, marginBottom: 20 }}>

          <TouchableOpacity onPress={() => setModalVisible(true)} style={{ padding: 10 }}>
            <Ionicons name="menu" size={24} color="#f7c4c6" />
          </TouchableOpacity>


          {/* Texto centralizado */}
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' }}>Bem-Vindo à</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#f7c4c6', textAlign: 'center' }}>Lily Bloom!</Text>
          </View>

          {/* Ícone do carrinho */}
          <TouchableOpacity onPress={() => navigation.navigate('telaCarrinho')} style={{ padding: 10 }}>
            <Ionicons name="cart" size={28} color="#f7c4c6" />
          </TouchableOpacity>
        </View>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 5,
          width: '90%',
          marginBottom: 20,
        }}>
          <TextInput
            style={{ flex: 1, height: 40, fontSize: 16 }}
            placeholder="Pesquisar flores..."
            placeholderTextColor="#999"
          />
          <Ionicons name="search" size={24} color='#f7c4c6' />
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleFilterPress(filter)}
              style={{ marginHorizontal: 10 }}>
              <Text style={{
                fontSize: selectedFilter === filter ? 20 : 18,
                fontWeight: selectedFilter === filter ? 'bold' : 'normal',
                color: selectedFilter === filter ? 'pink' : 'black',
              }}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ marginBottom: 10, height: 200 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
          >
            {carouselItems.map((item, index) => (
              <ImageBackground
                key={index}
                source={item.image}
                style={{
                  borderRadius: 10,
                  height: 150,
                  width: viewportWidth * 0.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 10,
                  padding: 10,
                }}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 10,
                }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>{item.title}</Text>
                <Text style={{ color: 'white' }}>{item.description}</Text>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>



        <View style={{ width: '90%', marginBottom: 20 }}>
          <GaleriaImagens />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            Flores em Destaque
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {floresDestaque.map((flor, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <Image
                  source={flor.image}
                  style={{ width: 100, height: 100, borderRadius: 20, marginBottom: 5, margin: 10 }}
                />
                <Text style={{ fontSize: 16, color: '#333' }}>{flor.nome}</Text>
              </View>
            ))}
          </View>
        </View>

        <ImageBackground
          source={require('../src/assets/lilyyys2.jpeg')}
          style={{
            borderRadius: 20,
            marginBottom: 20,
            overflow: 'hidden',
          }}
          imageStyle={{ opacity: 0.4 }}
        >
          <View style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 20,
            padding: 15,
          }}>
            <Text style={{ fontSize: 20, fontStyle: 'italic', color: '#fff', textAlign: 'center', padding: 5 }}>
              "A beleza das flores é a poesia da natureza. Elas nos lembram que a vida é efêmera e cheia de significados."
            </Text>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'right', // Para alinhar o texto do autor à direita
              marginTop: 10, // Adiciona espaço entre a citação e o autor
            }}>
              — Autor Desconhecido
            </Text>
          </View>
        </ImageBackground>


        <View style={{
          width: '90%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />


        <View style={{ width: '90%', marginBottom: 20 }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
          }}>
            Depoimentos
          </Text>

          <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 16,
              fontStyle: 'italic',
              color: '#333',
              textAlign: 'center',
              marginBottom: 5,
            }}>
              "As flores da Lily Bloom transformaram meu evento em algo mágico!"
            </Text>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#f7c4c6',
              textAlign: 'center',
            }}>
              — Ana Silva
            </Text>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 16,
              fontStyle: 'italic',
              color: '#333',
              textAlign: 'center',
              marginBottom: 5,
            }}>
              "Ótimo atendimento e flores lindas! Super recomendo!"
            </Text>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#f7c4c6',
              textAlign: 'center',
            }}>
              — João Pereira
            </Text>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 16,
              fontStyle: 'italic',
              color: '#333',
              textAlign: 'center',
              marginBottom: 5,
            }}>
              "As melhores flores da cidade! Sempre voltarei!"
            </Text>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#f7c4c6',
              textAlign: 'center',
            }}>
              — Maria Oliveira
            </Text>
          </View>
        </View>

        <View style={{
          width: '90%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />

        <View style={{ width: '90%', marginBottom: 20 }}>
          <DicasEscolhaFlores />
        </View>




        <View style={{
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: '#f7c4c6',
          }}>
            1200
          </Text>
          <Text style={{
            fontSize: 18,
            color: '#333',
          }}>
            Clientes Satisfeitos
          </Text>
        </View>


        <View style={{
          width: '90%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />



        <View>
          <Avaliacoes />
        </View>

        <View style={{
          width: '90%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
          marginBottom: 20
        }} />



        <Footer />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.sidebar}>
              <TouchableOpacity onPress={() => { navigation.navigate('telaSobreNos'); setModalVisible(false); }} style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Sobre Nós</Text>
                <Ionicons name="information-circle-outline" size={20} color="#f7c4c6" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('telaPromocoes'); setModalVisible(false); }} style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Promoções</Text>
                <Ionicons name="pricetag-outline" size={20} color="#f7c4c6" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('telaEventos'); setModalVisible(false); }} style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Eventos</Text>
                <Ionicons name="calendar-outline" size={20} color="#f7c4c6" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('telaPerfil'); setModalVisible(false); }} style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Perfil</Text>
                <Ionicons name="person-outline" size={20} color="#f7c4c6" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
                <Text style={{ color: '#f7c4c6', fontSize: 20 }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    backgroundColor: 'white',
    height: '40%', // Ajuste conforme necessário
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  sidebarText: {
    fontSize: 20,
  },
  icon: {
    marginLeft: 10,
  },
});