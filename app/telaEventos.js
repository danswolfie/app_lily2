import React, {useState} from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Footer from './Footer'
import OffMae from '../src/assets/offmaes.png'
import Mae from '../src/assets/mae.jpeg'
import Mae2 from '../src/assets/mae2.jpeg'
import Mae3 from '../src/assets/mae3.jpeg'
import Mae4 from '../src/assets/mae4.jpeg'
import OffAmor from '../src/assets/offamor.png'
import Amor from '../src/assets/amor.jpeg'
import Amor2 from '../src/assets/amor2.jpeg'
import Amor3 from '../src/assets/amor3.jpeg'
import Amor4 from '../src/assets/amor4.jpeg'
import OffNatal from '../src/assets/natalll.png'
import Natal from '../src/assets/natal.jpeg'
import Natal2 from '../src/assets/natal2.jpeg'
import Natal3 from '../src/assets/natal3.jpeg'
import Natal4 from '../src/assets/natal4.jpeg'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function EventosPromocoes() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsNamorados = [
    {
      id: 1,
      name: 'Doce Encontro',
      currentPrice: 'R$ 90,00',
      previousPrice: 'R$ 130,00',
      description: 'Um arranjo que simboliza a ternura de momentos compartilhados e sorrisos inesquecíveis.',
      image: Amor,
      views: 120,
    },
    {
      id: 2,
      name: 'Eterno Romance',
      currentPrice: 'R$ 80,00',
      previousPrice: 'R$ 100,00',
      description: 'Expressa o amor que cresce a cada dia, perfeito para quem deseja marcar uma história de carinho.',
      image: Amor2,
      views: 95,
    },
    {
      id: 3,
      name: 'Encontro',
      currentPrice: 'R$ 140,00',
      previousPrice: 'R$ 160,00',
      description: 'Feito para quem ama intensamente, trazendo emoção e cumplicidade em cada detalhe.',
      image: Amor3,
      views: 80,
    },
    {
      id: 4,
      name: 'Paixão',
      currentPrice: 'R$ 150,00',
      previousPrice: 'R$ 180,00',
      description: 'Um arranjo que celebra a união e a promessa de um futuro cheio de amor e felicidade.',
      image: Amor4,
      views: 70,
    },
  ];

  const productsNatal = [
    {
      id: 1,
      name: 'Magia Natalina',
      currentPrice: 'R$ 90,00',
      previousPrice: 'R$ 130,00',
      description: 'Um arranjo que traz o encanto e a alegria típicos dessa época festiva.',
      image: Natal,
      views: 120,
    },
    {
      id: 2,
      name: 'Noite Feliz',
      currentPrice: 'R$ 80,00',
      previousPrice: 'R$ 100,00',
      description: 'Perfeito para celebrar momentos de união e paz ao lado de quem você ama.',
      image: Natal2,
      views: 95,
    },
    {
      id: 3,
      name: 'Mágica Festiva',
      currentPrice: 'R$ 140,00',
      previousPrice: 'R$ 160,00',
      description: 'Simboliza os novos começos e o espírito de renovação que o Natal inspira.',
      image: Natal3,
      views: 80,
    },
    {
      id: 4,
      name: 'Brilho Festivo',
      currentPrice: 'R$ 150,00',
      previousPrice: 'R$ 180,00',
      description: 'Traz a luz e o calor das festas para encher qualquer ambiente de alegria.',
      image: Natal4,
      views: 70,
    },
  ];

  const productsMae = [
    {
      id: 1,
      name: 'Carinho de Mãe',
      currentPrice: 'R$ 90,00',
      previousPrice: 'R$ 130,00',
      description: 'Este encantador arranjo é composto por margaridas brancas e roxas, simbolizando a pureza e a sabedoria que uma mãe oferece. As margaridas, com suas cores vibrantes e frescas, representam a alegria e a luz que ela traz para nossas vidas. Um presente perfeito para celebrar o amor incondicional e a dedicação de todas as mães neste dia especial.',
      image: Mae,
      views: 120,
    },
    {
      id: 2,
      name: 'Beijo de Flor',
      currentPrice: 'R$ 80,00',
      previousPrice: 'R$ 100,00',
      description: 'Este deslumbrante arranjo combina girassóis radiosos com tulipas rosé delicadas, criando uma explosão de cores vibrantes e alegres. Os girassóis representam a adoração e a lealdade, enquanto as tulipas simbolizam a beleza e a graça. Juntas, essas flores transmitem uma mensagem de amor e gratidão, tornando este buquê uma escolha perfeita para homenagear as mães que iluminam nossas vidas como o sol.',
      image: Mae2,
      views: 95,
    },
    {
      id: 3,
      name: 'Luz da Minha Vida',
      currentPrice: 'R$ 140,00',
      previousPrice: 'R$ 160,00',
      description: 'Este sofisticado arranjo combina lírios laranjas vibrantes com orquídeas roxas exóticas, criando uma harmonia única de cores e formas. Os lírios simbolizam a fertilidade e a devoção, enquanto as orquídeas representam o amor e a beleza rara. Juntos, eles formam um buquê que exala elegância e requinte, perfeito para celebrar a força e a beleza das mães em seu dia especial.',
      image: Mae3,
      views: 80,
    },
    {
      id: 4,
      name: 'Abraço Floral',
      currentPrice: 'R$ 150,00',
      previousPrice: 'R$ 180,00',
      description: 'Um arranjo delicado de rosas vermelhas e brancas, simbolizando a união e o amor eterno entre mãe e filho. Este buquê é perfeito para expressar gratidão e carinho.',
      image: Mae4,
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={{ padding: 20, }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#f7c4c6', textAlign: 'center' }}>Promoções para Eventos</Text>
          <Text style={{textAlign: 'center' }}>Confira nossas ofertas para o Dia das Mães e muito mais!</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={OffMae} style={{ width: '100%', height: 200 }} />
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: "#f7c4c6" }}>Ofertas de Dia das Mães!</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {productsMae.map((product) => (
              <TouchableOpacity key={product.id} style={{ width: 150, height: 220, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', margin: 10, position: 'relative', overflow: 'hidden' }} onPress={() => openModal(product)}>
                <Image source={product.image} style={{ width: '100%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, }} resizeMode='cover' />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
                  <Ionicons name="heart-outline" size={24} color="pink" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center', marginTop: 5 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', }}>{product.name}</Text>
                  <Text style={{ textDecorationLine: 'line-through' }}>{product.previousPrice}</Text>
                  <Text style={{ fontSize: 14, color: '#f7c4c6', textAlign: 'center' }}>{product.currentPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={OffAmor} style={{ width: '100%', height: 200 }} />
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: "#f7c4c6" }}>Ofertas de Dia dos Namorados!</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {productsNamorados.map((product) => (
              <TouchableOpacity key={product.id} style={{ width: 150, height: 220, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', margin: 10, position: 'relative', overflow: 'hidden' }} onPress={() => openModal(product)}>
                <Image source={product.image} style={{ width: '100%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, }} resizeMode='cover' />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
                  <Ionicons name="heart-outline" size={24} color="pink" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center', marginTop: 5 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', }}>{product.name}</Text>
                  <Text style={{ textDecorationLine: 'line-through' }}>{product.previousPrice}</Text>
                  <Text style={{ fontSize: 14, color: '#f7c4c6', textAlign: 'center' }}>{product.currentPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={OffNatal} style={{ width: '100%', height: 200 }} />
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: "#f7c4c6" }}>Ofertas de Natal!</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {productsNatal.map((product) => (
              <TouchableOpacity key={product.id} style={{ width: 150, height: 220, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', margin: 10, position: 'relative', overflow: 'hidden' }} onPress={() => openModal(product)}>
                <Image source={product.image} style={{ width: '100%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, }} resizeMode='cover' />
                <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
                  <Ionicons name="heart-outline" size={24} color="pink" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center', marginTop: 5 }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', }}>{product.name}</Text>
                  <Text style={{ textDecorationLine: 'line-through' }}>{product.previousPrice}</Text>
                  <Text style={{ fontSize: 14, color: '#f7c4c6', textAlign: 'center' }}>{product.currentPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Modal visible={modalVisible} transparent={true}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
            <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center', }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#f7c4c6' }}>{selectedProduct?.name}</Text>
              <Text style={{ textDecorationLine: 'line-through' }}>{productsMae.previousPrice}</Text>
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
}
