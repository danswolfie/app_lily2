import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, Animated, Modal, TextInput, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useRouter } from 'expo-router';

const slides = [
  {
    key: '1',
    title: 'Bem-Vindo à Lily Bloom!',
    text: 'Descubra a beleza das flores com o nosso app de floricultura! Aqui, você encontra uma variedade encantadora de arranjos e plantas para todas as ocasiões.',
    image: require('../src/assets/buquezaosemfundo.png'),
  },
  {
    key: '2',
    title: 'Explore o Mundo das Flores!',
    text: 'Mergulhe em uma experiência única de compra de flores! No nosso app, você pode escolher entre arranjos personalizados e muito mais para deixar sua casa ainda mais bonita ou presentear alguém que você ama!',
    image: require('../src/assets/buquezao2semfundo.png'),
  },
  {
    key: '3',
    title: 'Flores que Encantam!',
    text: 'Deixe seu dia mais alegre com nossas flores frescas e vibrantes! Navegue por nossas coleções e encontre o presente perfeito para cada momento especial.',
    image: require('../src/assets/buquezao3semfundo.png'),
  },
];

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: -1000,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setShowSplash(false);
      });
    }, 2000);
  }, []);

  function renderSlides({ item }) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 50,
      }}>
        <Image
          source={item.image}
          style={{
            marginTop: 20,
            width: 300,
            height: 300,
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <Text style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 24,
          fontWeight: 'bold',
          color: '#f7c4c6',
        }}>
          {item.title}
        </Text>
        <Text style={{
          fontSize: 18,
          textAlign: 'center',
          paddingHorizontal: 10,
        }}>
          {item.text}
        </Text>
      </View>
    );
  }

  const handleLogin = () => {
    console.log("Login:", email, password);
    setModalVisible(false);
    router.push('/home');
  };

  const handleRegister = () => {
    // Lógica de cadastro aqui
    console.log("Registro:", name, email, password);
    setModalVisible(false);
    // Passa os dados para a tela de perfil
    router.push({
      pathname: '/telaPerfil',
      params: { name, email },
    });
  };
  

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setEmail('');
    setPassword('');
    setName('');
  };

  if (showSplash) {
    return (
      <Animated.View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateX: slideAnim }],
        backgroundColor: '#f7c4c6',
      }}>
        <Image
          source={require('../src/assets/LilyBloom4.png')}
          style={{
            width: 300,
            height: 300,
            resizeMode: 'absolute',
          }}
        />
      </Animated.View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <AppIntroSlider
          renderItem={renderSlides}
          data={slides}
          activeDotStyle={{
            backgroundColor: '#f7c4c6',
            width: 30,
          }}
          renderNextButton={() => <Text>PRÓXIMO</Text>}
          renderDoneButton={() => (
            <TouchableOpacity onPress={toggleModal}>
              <Text>EXPLORAR</Text>
            </TouchableOpacity>
          )}
          onDone={() => { router.push('/home'); }}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ width: 300, backgroundColor: 'white', borderRadius: 20, padding: 20 }}>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>{isLogin ? 'Login' : 'Cadastro'}</Text>

              {!isLogin && (
                <TextInput
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}
                  placeholderTextColor="#333" // Cor do placeholder
                />
              )}

              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}
                placeholderTextColor="#333" // Cor do placeholder
              />
              <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}
                placeholderTextColor="#333" // Cor do placeholder
              />

              <TouchableOpacity onPress={isLogin ? handleLogin : handleRegister} style={{ backgroundColor: '#f7c4c6', padding: 10, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center' }}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 10 }}>
                <Text style={{ color: '#f7c4c6' }}>
                  {isLogin ? 'Não tem uma conta ainda? Cadastre-se!' : 'Já possui uma conta? Fazer login!'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}
