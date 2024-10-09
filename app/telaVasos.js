import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Car4 from '../src/assets/car4.jpeg';
import Car5 from '../src/assets/car5.jpeg';
import Car6 from '../src/assets/car6.jpeg';
import ProdutoCard from './ProdutoCard';
import Footer from './Footer';

const { width: viewportWidth } = Dimensions.get('window');

const ProdutosCasamentos = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const carouselItems = [
    { title: 'Vasos que Encantam', description: 'Transforme seu espaço com vasos que trazem vida e cor.', image: Car4 },
    { title: 'Design Floral Único', description: 'Delve na arte de combinar flores e vasos para um estilo irresistível.', image: Car5 },
    { title: 'Natureza em Casa', description: 'O ultimate toque de frescor e elegância para qualquer ambiente!', image: Car6 },
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
              placeholder="Pesquisar vasos..."
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
                image={require('../src/assets/vasos1.jpeg')} 
                productName="Minimalista" 
                price="R$ 150,00"
                onPress={() => openModal({ name: "Minimalista", price: "R$ 150,00", description: "Um vaso perfeito para ambientes modernos, trazendo um toque de sofisticação com sua forma simples e elegante." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/vasos2.jpeg')} 
                productName="Vibrante" 
                price="R$ 120,00" 
                onPress={() => openModal({ name: "Vibrante", price: "R$ 120,00", description: "Transforme qualquer espaço com cores vivas e formas encantadoras, criando uma atmosfera alegre e revitalizante." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/vasos3.jpeg')} 
                productName="Clássico" 
                price="R$ 180,00" 
                onPress={() => openModal({ name: "Clássico", price: "R$ 180,00", description: "Um vaso atemporal que combina com qualquer estilo, oferecendo um toque de charme e delicadeza ao ambiente." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/vasos4.jpeg')} 
                productName="Tranquilidade" 
                price="R$ 130,00" 
                onPress={() => openModal({ name: "Tranquilidade", price: "R$ 130,00", description: "Proporcione um ambiente de paz e serenidade com este vaso cuidadosamente decorado, ideal para momentos de relaxamento." })} 
              />
            </View>
            <Text style={{color: '#f7c4c6', fontSize: 30, fontWeight: 'bold'}}>Recomendados Para Você</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/vasos5.jpeg')} 
                productName="Artesanal" 
                price="R$ 200,00" 
                onPress={() => openModal({ name: "Artesanal", price: "R$ 200,00", description: "Este vaso une o artesanal com o moderno, trazendo uma sensação de autenticidade e criatividade para qualquer espaço." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/vasos6.jpeg')} 
                productName="Rústico" 
                price="R$ 170,00" 
                onPress={() => openModal({ name: "Rústico", price: "R$ 170,00", description: "Um toque rústico para seu lar, com design natural e texturas que evocam a tranquilidade do campo." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/vasos7.jpeg')} 
                productName="Geometria" 
                price="R$ 160,00" 
                onPress={() => openModal({ name: "Geometria", price: "R$ 160,00", description: "Para quem busca um toque de originalidade, este vaso traz formas geométricas que acrescentam personalidade e estilo." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/vasos8.jpeg')} 
                productName="Urbano" 
                price="R$ 140,00" 
                onPress={() => openModal({ name: "Urbano", price: "R$ 140,00", description: "Um vaso contemporâneo, perfeito para ambientes urbanos, com linhas elegantes e modernas que destacam a leveza do design." })} 
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
