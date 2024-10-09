import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Car7 from '../src/assets/car7.jpeg';
import Car8 from '../src/assets/car8.jpeg';
import Car9 from '../src/assets/car9.jpeg';
import ProdutoCard from './ProdutoCard';
import Footer from './Footer';

const { width: viewportWidth } = Dimensions.get('window');

const ProdutosCasamentos = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const carouselItems = [
    { title: 'Toque de Romance', description: 'Um arranjo de rosas pode transformar qualquer ambiente em algo mágico.', image: Car7 },
    { title: 'Elegância em Rosas', description: 'As rosas, com suas cores e fragrâncias, sempre trazem um toque de romantismo.', image: Car8 },
    { title: 'Beleza Clássica', description: 'Arranjos de rosas são perfeitos para expressar sentimentos profundos e sinceros.', image: Car9 },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
        <View style={{ flex: 1, alignItems: 'center', width: '100%', paddingHorizontal: 10 }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            width: '90%',
            marginBottom: 20,
            marginTop: 20,
          }}>
            <TextInput
              style={{ flex: 1, height: 40, fontSize: 16 }}
              placeholder="Pesquisar rosas..."
              placeholderTextColor="#999"
            />
            <Ionicons name="search" size={24} color='#f7c4c6' />
          </View>

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

          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{color: '#f7c4c6', fontSize: 30, fontWeight: 'bold'}}>Ofertas dessa Semana</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
            <ProdutoCard 
                image={require('../src/assets/rosas1.jpeg')} 
                productName="Romântico" 
                price="R$ 150,00"
                onPress={() => openModal({ name: "Romântico", price: "R$ 150,00", description: "Um arranjo de rosas que simboliza amor e afeto, perfeito para presentear ou decorar em momentos especiais, transmitindo um sentimento de carinho profundo." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/rosas2.jpeg')} 
                productName="Atemporal" 
                price="R$ 120,00" 
                onPress={() => openModal({ name: "Atemporal", price: "R$ 120,00", description: "Com design clássico e elegante, este arranjo traz a sofisticação das rosas para qualquer espaço, tornando-se um destaque em qualquer ambiente." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/rosas3.jpeg')} 
                productName="Simplicidade" 
                price="R$ 180,00" 
                onPress={() => openModal({ name: "Simplicidade", price: "R$ 180,00", description: "Um arranjo delicado e minimalista que transforma o ambiente com sua beleza sutil, ideal para quem aprecia detalhes discretos e elegantes." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/rosas4.jpeg')} 
                productName="Natural" 
                price="R$ 130,00" 
                onPress={() => openModal({ name: "Natural", price: "R$ 130,00", description: "Ricos em beleza e harmonia, esses arranjos combinam a simplicidade das rosas com uma disposição natural, criando uma atmosfera de serenidade e equilíbrio." })} 
              />
            </View>
            <Text style={{color: '#f7c4c6', fontSize: 30, fontWeight: 'bold'}}>Recomendados Para Você</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/rosas5.jpeg')} 
                productName="Harmonia" 
                price="R$ 200,00" 
                onPress={() => openModal({ name: "Harmonia", price: "R$ 200,00", description: "Cada rosa cuidadosamente posicionada neste arranjo transmite paz e suavidade, perfeito para momentos de introspecção e reflexão." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/rosas6.jpeg')} 
                productName="Luxo" 
                price="R$ 170,00" 
                onPress={() => openModal({ name: "Luxo", price: "R$ 170,00", description: "Elegante e refinado, este arranjo de rosas exala sofisticação, sendo uma peça central que impressiona sem exageros, ideal para eventos formais." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/rosas7.jpeg')} 
                productName="Florescer" 
                price="R$ 160,00" 
                onPress={() => openModal({ name: "Florescer", price: "R$ 160,00", description: "Um arranjo vibrante e cheio de vida, criado para celebrar momentos especiais e marcantes, trazendo energia e alegria ao ambiente." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/rosas8.jpeg')} 
                productName="Delicadeza" 
                price="R$ 140,00" 
                onPress={() => openModal({ name: "Delicadeza", price: "R$ 140,00", description: "Com um toque suave e sereno, este arranjo inspira leveza e calma, ideal para criar uma atmosfera relaxante e acolhedora." })} 
              />
            </View>
          </View>

          <Footer />

          <Modal visible={modalVisible} transparent={true}>
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
    <View style={{width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center',}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#f7c4c6'}}>{selectedProduct?.name}</Text>
      <Ionicons name="heart-outline" size={24} style={{marginBottom: 10,}} />
      <Text style={{fontSize: 16, marginVertical: 5,}}>⭐⭐⭐⭐⭐</Text>
      <Text style={{fontSize: 14, marginVertical: 5, color: '#666',}}>10 pessoas visualizaram</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 5,}}>{selectedProduct?.price}</Text>
      <Text style={{textAlign: 'center', marginVertical: 10,}}>{selectedProduct?.description}</Text>
      <TouchableOpacity style={{marginTop: 10, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#f7c4c6', borderRadius: 5,}}>
        <Text>Adicionar ao Carrinho <Ionicons name="cart-outline" size={16} /></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(false)}>
        <Text style={{marginTop: 10, color: '#f7c4c6',}}>Fechar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProdutosCasamentos;
