import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Share, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CinquentaOff from '../src/assets/50off.jpeg';
import Off1 from '../src/assets/rosaa.jpeg';
import Off2 from '../src/assets/rosaa2.jpeg';
import Off3 from '../src/assets/rosaa3.jpeg';
import Off4 from '../src/assets/rosaa4.jpeg';
import Footer from './Footer';
import OffTulipas from '../src/assets/offtulipas.png'
import Tulipa from '../src/assets/tulipa1.jpeg'
import Tulipa2 from '../src/assets/tulipa2.jpeg'
import Tulipa3 from '../src/assets/tulipa3.jpeg'
import Tulipa4 from '../src/assets/tulipa4.jpeg'

const Promocoes = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Amor',
      currentPrice: 'R$ 84,00',
      previousPrice: 'R$ 120,00',
      description: 'Uma flor que simboliza o amor.',
      image: Off1,
      views: 120,
    },
    {
      id: 2,
      name: 'Esperança',
      currentPrice: 'R$ 160,00',
      previousPrice: 'R$ 200,00',
      description: 'Uma flor que simboliza a esperança.',
      image: Off2,
      views: 95,
    },
    {
      id: 3,
      name: 'Alegria',
      currentPrice: 'R$ 120,00',
      previousPrice: 'R$ 150,00',
      description: 'Uma flor que simboliza a alegria.',
      image: Off3,
      views: 80,
    },
    {
      id: 4,
      name: 'Gratidão',
      currentPrice: 'R$ 135,00',
      previousPrice: 'R$ 180,00',
      description: 'Uma flor que simboliza a gratidão.',
      image: Off4,
      views: 70,
    },
  ];

  const productsTulips = [
    {
      id: 1,
      name: 'Aurora Suave',
      currentPrice: 'R$ 79,00',
      previousPrice: 'R$ 100,00',
      description: 'Um arranjo delicado que traz serenidade e harmonia ao ambiente.',
      image: Tulipa,
      views: 120,
    },
    {
      id: 2,
      name: 'Calor do Sol',
      currentPrice: 'R$ 90,00',
      previousPrice: 'R$ 110,00',
      description: 'Transmite energia e alegria, perfeito para iluminar qualquer espaço.',
      image: Tulipa2,
      views: 95,
    },
    {
      id: 3,
      name: 'Amor Puro',
      currentPrice: 'R$ 95,00',
      previousPrice: 'R$ 115,00',
      description: 'Uma escolha romântica e envolvente, ideal para ocasiões especiais.',
      image: Tulipa3,
      views: 80,
    },
    {
      id: 4,
      name: 'Primavera Leve',
      currentPrice: 'R$ 100,00',
      previousPrice: 'R$ 120,00',
      description: 'Reflete renovação e frescor, simbolizando novos começos.',
      image: Tulipa4,
      views: 70,
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Confira essas ofertas incríveis na Lily Bloom! Acesse: https://linkparafloricultura.com', // Substitua pelo link da sua floricultura
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Compartilhado com: ${result.activityType}`);
        } else {
          console.log('Compartilhado com sucesso!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Compartilhamento cancelado.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={CinquentaOff} style={{ width: '100%', height: 200 }} />
        </View>

        {/* Cards de Produtos com Desconto */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: "#f7c4c6" }}>Ofertas para Rosas!</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {products.map((product) => (
              <TouchableOpacity key={product.id} style={{ width: 150, height: 220, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', margin: 10, position: 'relative', overflow: 'hidden' }} onPress={() => openModal(product)}>
                <Image source={product.image} style={{ width: '100%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, }} resizeMode='cover' />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
                  <Ionicons name="heart-outline" size={24} color="pink" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{product.name}</Text>
                  <Text style={{ textDecorationLine: 'line-through' }}>{product.previousPrice}</Text>
                  <Text style={{ fontSize: 14, color: '#f7c4c6', textAlign: 'center' }}>{product.currentPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={OffTulipas} style={{ width: '100%', height: 200 }} />
        </View>

        {/* Cards de Produtos com Desconto */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: "#f7c4c6" }}>Ofertas para Tulipas!</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {productsTulips.map((product) => (
              <TouchableOpacity key={product.id} style={{ width: 150, height: 220, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', margin: 10, position: 'relative', overflow: 'hidden' }} onPress={() => openModal(product)}>
                <Image source={product.image} style={{ width: '100%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, }} resizeMode='cover' />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
                  <Ionicons name="heart-outline" size={24} color="pink" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center' }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{product.name}</Text>
                  <Text style={{ textDecorationLine: 'line-through' }}>{product.previousPrice}</Text>
                  <Text style={{ fontSize: 14, color: '#f7c4c6', textAlign: 'center' }}>{product.currentPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Seção de Cupom */}
        <View style={{ padding: 20, backgroundColor: "#f7c4c6" }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Insira seu cupom de desconto</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 10, padding: 10, marginTop: 10 }}
            placeholder="Digite o código do cupom"
            placeholderTextColor={'#fff'}
          />
        </View>

        {/* Depoimentos */}
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#f7c4c6", textAlign: 'center' }}>Depoimentos</Text>
          <View style={{ borderWidth: 1, borderColor: '#f7c4c6', borderRadius: 10, padding: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Ana Clara</Text>
            <Text>"Adorei as promoções, comprei um buquê lindo para o aniversário da minha mãe!"</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: '#f7c4c6', borderRadius: 10, padding: 10, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>João Silva</Text>
            <Text>"Os produtos são de excelente qualidade e a entrega foi super rápida!"</Text>
          </View>
        </View>

        {/* Botões de Compartilhamento */}
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#f7c4c6", textAlign: 'center' }}>Compartilhe suas Ofertas!</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <TouchableOpacity style={{ margin: 5 }} onPress={handleShare}>
              <Ionicons name="logo-facebook" size={30} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }} onPress={handleShare}>
              <Ionicons name="logo-instagram" size={30} color="#1DA1F2" />
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }} onPress={handleShare}>
              <Ionicons name="logo-whatsapp" size={30} color="#25D366" />
            </TouchableOpacity>
          </View>
        </View>

        <Modal visible={modalVisible} transparent={true}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
            <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center', }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#f7c4c6' }}>{selectedProduct?.name}</Text>
              <Text style={{ textDecorationLine: 'line-through' }}>{products.previousPrice}</Text>
              <Ionicons name="heart-outline" size={24} style={{ marginBottom: 10, }} />
              <Text style={{ fontSize: 16, marginVertical: 5, }}>⭐⭐⭐⭐⭐</Text>
              <Text style={{ fontSize: 14, marginVertical: 5, color: '#666', }}>10 pessoas visualizaram</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 5, }}>{selectedProduct?.currentPrice}</Text>
              <Text style={{ fontSize: 14, textDecorationLine: 'line-through', marginVertical: 5, }}>{selectedProduct?.previousPrice}</Text>
              <Text style={{ textAlign: 'center', marginVertical: 10, }}>{selectedProduct?.description}</Text>
              <TouchableOpacity style={{ marginTop: 10, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#f7c4c6', borderRadius: 5, }}>
                <Text>Adicionar ao Carrinho <Ionicons name="cart-outline" size={16} /></Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ marginTop: 10, color: '#f7c4c6', }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Promocoes;
