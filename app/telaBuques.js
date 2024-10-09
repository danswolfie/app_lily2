import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Dimensions, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Car10 from '../src/assets/car10.jpeg';
import Car11 from '../src/assets/car11.jpeg';
import Car12 from '../src/assets/car12.jpeg';
import ProdutoCard from './ProdutoCard';
import Footer from './Footer';

const { width: viewportWidth } = Dimensions.get('window');

const ProdutosCasamentos = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const carouselItems = [
    { title: 'Flores que Encantam', description: 'Um buquê tem o poder de transformar gestos simples em momentos inesquecíveis, trazendo alegria e beleza a qualquer ocasião.', image: Car10 },
    { title: 'Presente Perfeito', description: 'Buquês são a escolha ideal para celebrar aniversários, casamentos ou simplesmente para expressar carinho, proporcionando uma surpresa encantadora para quem os recebe.', image: Car11 },
    { title: 'A Magia das Flores', description: 'Com sua beleza e fragrância únicas, um buquê não apenas alegra o ambiente, mas também expressa sentimentos profundos de amor e amizade de maneira inigualável.', image: Car12 },
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
              placeholder="Pesquisar buquês..."
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
                image={require('../src/assets/buques1.jpeg')} 
                productName="Amor" 
                price="R$ 150,00"
                onPress={() => openModal({ name: "Amor", price: "R$ 150,00", description: "Um buquê que captura a essência do amor, ideal para expressar sentimentos sinceros em ocasiões especiais." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/buques2.jpeg')} 
                productName="Celebração" 
                price="R$ 120,00" 
                onPress={() => openModal({ name: "Celebração", price: "R$ 120,00", description: "Este buquê é perfeito para comemorar momentos importantes, trazendo alegria e um toque de frescor a qualquer celebração." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/buques3.jpeg')} 
                productName="Harmonia" 
                price="R$ 180,00" 
                onPress={() => openModal({ name: "Harmonia", price: "R$ 180,00", description: "Com uma combinação perfeita de formas e texturas, este buquê cria uma sensação de tranquilidade e bem-estar." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/buques4.jpeg')} 
                productName="Elegância" 
                price="R$ 130,00" 
                onPress={() => openModal({ name: "Elegância", price: "R$ 130,00", description: "Um buquê sofisticado que adiciona charme e estilo a qualquer ambiente, sendo uma excelente escolha para presentear." })} 
              />
            </View>
            <Text style={{color: '#f7c4c6', fontSize: 30, fontWeight: 'bold'}}>Recomendados Para Você</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/buques5.jpeg')} 
                productName="Felicidade" 
                price="R$ 200,00" 
                onPress={() => openModal({ name: "Felicidade", price: "R$ 200,00", description: "Este buquê traz um sorriso instantâneo, ideal para alegrar o dia de alguém especial e espalhar boas vibrações." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/buques6.jpeg')} 
                productName="Simplicidade" 
                price="R$ 170,00" 
                onPress={() => openModal({ name: "Simplicidade", price: "R$ 170,00", description: "Com um design clean e delicado, este buquê é perfeito para quem aprecia a beleza na simplicidade e na sutileza." })} 
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20 }}>
              <ProdutoCard 
                image={require('../src/assets/buques7.jpeg')} 
                productName="Riqueza" 
                price="R$ 160,00" 
                onPress={() => openModal({ name: "Riqueza", price: "R$ 160,00", description: "Este buquê destaca a beleza natural das flores, criando uma composição exuberante que transforma qualquer espaço." })} 
              />
              <ProdutoCard 
                image={require('../src/assets/buques8.jpeg')} 
                productName="Emoções" 
                price="R$ 140,00" 
                onPress={() => openModal({ name: "Emoções", price: "R$ 140,00", description: "Um buquê que expressa uma variedade de sentimentos, tornando-se um presente atemporal que toca o coração de quem o recebe." })} 
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
