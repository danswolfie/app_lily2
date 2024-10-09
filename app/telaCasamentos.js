import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Car1 from '../src/assets/car1.jpeg';
import Car2 from '../src/assets/car2.jpeg';
import Car3 from '../src/assets/car3.jpeg';
import ProdutoCard from './ProdutoCard';
import Footer from './Footer';

const { width: viewportWidth } = Dimensions.get('window');

const ProdutosCasamentos = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const carouselItems = [
    { title: 'Flores para Seu Casamento', description: 'Explore arranjos e buquês que encantam...', image: Car1 },
    { title: 'Beleza Floral para Casamentos', description: 'Transforme seu casamento com flores especiais...', image: Car2 },
    { title: 'Flores que Falam de Amor', description: 'Encontre as flores ideais para cada momento...', image: Car3 },
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
              placeholder="Pesquisar arranjos para casamentos..."
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
                image={require('../src/assets/casamentos11.png')} 
                productName="Buquê de Lírios" 
                price="R$ 150,00"
                onPress={() => openModal({ name: "Buquê de Lírios", price: "R$ 150,00", description: "Um buquê elegante em tons brancos, simbolizando pureza e amor eterno, envolto em folhagens luxuosas." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/casamentos12.png')} 
                productName="Arranjo de Flores" 
                price="R$ 120,00" 
                onPress={() => openModal({ name: "Arranjo de Flores", price: "R$ 120,00", description: "Um buquê sofisticado feito exclusivamente de orquídeas brancas, criando uma composição luxuosa e etérea. Com suas formas elegantes e um toque de charme, esse arranjo é ideal para uma noiva que busca um visual refinado e atemporal." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/casamentos13.png')} 
                productName="Cesta de Flores" 
                price="R$ 180,00" 
                onPress={() => openModal({ name: "Cesta de Flores", price: "R$ 180,00", description: "Um buquê encantador composto por uma variedade de flores brancas, criando uma composição harmoniosa e delicada. Com texturas diferentes e um toque de folhagens sutis, esse arranjo evoca pureza e elegância, perfeito para qualquer noiva que deseje um estilo clássico e atemporal." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/casamentos14.png')} 
                productName="Buquê de Rosas" 
                price="R$ 130,00" 
                onPress={() => openModal({ name: "Buquê de Rosas", price: "R$ 130,00", description: "Um buquê deslumbrante composto apenas por rosas brancas, simbolizando pureza e amor eterno, elegantemente amarradas com uma fita de cetim, perfeito para uma noiva clássica e romântica." })} 
              />
            </View>
            <Text style={{color: '#f7c4c6', fontSize: 30, fontWeight: 'bold'}}>Recomendados Para Você</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/casamentos15.png')} 
                productName="Orquídea Branca" 
                price="R$ 200,00" 
                onPress={() => openModal({ name: "Orquídea Branca", price: "R$ 200,00", description: "Um arranjo em branco, amarrado com fita de cetim, trazendo um toque de sofisticação e charme atemporal." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/casamentos16.png')} 
                productName="Rosalinda" 
                price="R$ 170,00" 
                onPress={() => openModal({ name: "Rosalinda", price: "R$ 170,00", description: "Delicadas flores em rosa suave, combinadas com brancas, criando um contraste perfeito e um aroma inebriante." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/casamentos17.png')} 
                productName="Jardim Secreto" 
                price="R$ 160,00" 
                onPress={() => openModal({ name: "Jardim Secreto", price: "R$ 160,00", description: "Flores em rosa claro, misturadas com elementos em branco, criando um buquê etéreo e cheio de leveza." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/casamentos18.png')} 
                productName="Arranjo Simples" 
                price="R$ 140,00" 
                onPress={() => openModal({ name: "Arranjo Simples", price: "R$ 140,00", description: "Um arranjo minimalista em rosa claro e branco, amarrado com uma fita delicada, perfeito para uma noiva clássica." })} 
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
