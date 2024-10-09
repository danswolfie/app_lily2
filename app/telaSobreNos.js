import React, {useState} from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import Lily from '../src/assets/lily2.jpeg'
import Membro from '../src/assets/dani.jpeg'
import Footer from './Footer'
import { Ionicons } from '@expo/vector-icons';

const Pergunta = ({ pergunta, resposta }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{pergunta}</Text>
        <Ionicons name={isVisible ? 'chevron-up' : 'chevron-down'} size={24} color="#f7c4c6" />
      </TouchableOpacity>
      {isVisible && (
        <Text style={{ marginTop: 5 }}>{resposta}</Text>
      )}
    </View>
  );
};

const SobreNos = () => {

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre os produtos da Lily Bloom.";
    const phoneNumber = "+5512982039142"; 
    const url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=${phoneNumber}`;
  
    Linking.openURL(url).catch((err) => console.error("Error opening WhatsApp:", err));
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{ backgroundColor: '#fff' }}>

        {/* Imagem principal acima do título */}
        <View style={{ alignItems: 'center', }}>
          <Image
            source={Lily}
            style={{ width: '100%', height: 200, }}
          />
        </View>

        {/* Título e Introdução */}
        <View style={{ backgroundColor: '#fff', padding: 15, }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', }}>Sobre Nós</Text>
          <Text style={{ fontSize: 16, lineHeight: 22, }}>
            Nós somos a Lily Bloom, dedicados a oferecer as mais belas flores para todas as ocasiões.
            Nossa paixão por flores e nosso compromisso com a qualidade nos tornam a escolha ideal para
            seus momentos especiais.
          </Text>
        </View>

        <ImageBackground
          source={require('../src/assets/historiaa.jpeg')}
          style={{
            borderRadius: 20,
            marginBottom: 20,
            overflow: 'hidden',
            margin: 10
          }}
          imageStyle={{ opacity: 0.3 }}
        >
          <View style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: 20,
            padding: 15,
          }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#fff' }}>Nossa História</Text>
            <Text style={{ fontSize: 16, lineHeight: 22, color: '#fff' }}>
              Fundada em 2021, a Lily Bloom começou como uma pequena floricultura local e, desde então,
              crescemos para nos tornar um dos principais fornecedores de flores da região. Nossa jornada
              tem sido marcada pela dedicação e amor pelas flores.
            </Text>
          </View>
        </ImageBackground>

        <View style={{ backgroundColor: '#fff', padding: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            Nossos Valores
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <View style={{ alignItems: 'center', margin: 10 }}>
              <Ionicons name="flower" size={40} color="#f7c4c6" />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Qualidade</Text>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>Nosso compromisso com flores frescas e bem cuidadas.</Text>
            </View>
            <View style={{ alignItems: 'center', margin: 10 }}>
              <Ionicons name="heart" size={40} color="#f7c4c6" />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Paixão</Text>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>Amamos o que fazemos e isso se reflete em nosso trabalho.</Text>
            </View>
            <View style={{ alignItems: 'center', margin: 10 }}>
              <Ionicons name="star" size={40} color="#f7c4c6" />
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Dedicação</Text>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>Nos dedicamos a oferecer o melhor para nossos clientes.</Text>
            </View>
          </View>
        </View>

        <View style={{
          width: '100%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />

        {/* Equipe */}
        <View style={{ backgroundColor: '#fff', padding: 15, }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Nossa Equipe</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', margin: 10, width: '30%' }}>
              <Image
                source={Membro}
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 5 }}
              />
              <Text style={{ fontWeight: 'bold' }}>Daniela Paiva</Text>
              <Text style={{ color: '#555', textAlign: 'center' }}>Administradora</Text>
            </View>
          </View>
        </View>

        <View style={{
          width: '100%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />

        {/* Nossos Produtos/Serviços */}
        <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Nossos Produtos</Text>
          <Text style={{ fontSize: 16, lineHeight: 22 }}>
            Oferecemos uma variedade de flores frescas, arranjos personalizados e serviços para
            casamentos e eventos. Trabalhamos com as melhores floriculturas locais para garantir
            a frescura e qualidade de nossas flores.
          </Text>
        </View>

        <View style={{
          width: '100%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />

        {/* Perguntas Frequentes */}
        <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Perguntas Frequentes (FAQ)</Text>
          
          <Pergunta 
            pergunta="1. Como posso fazer um pedido?" 
            resposta="Para fazer um pedido, basta visitar nosso site, navegar pelas categorias de flores e arranjos, e selecionar os produtos que deseja. Em seguida, adicione-os ao seu carrinho e siga o processo de checkout para finalizar sua compra."
          />
          <Pergunta 
            pergunta="2. A Lily Bloom tem uma loja física?" 
            resposta="Não, somos uma floricultura exclusivamente virtual. Isso nos permite oferecer uma ampla gama de produtos sem as limitações de uma loja física, além de garantir que nossos clientes possam acessar nossas flores e arranjos de qualquer lugar."
          />
          <Pergunta 
            pergunta="3. Como as flores são entregues?" 
            resposta="Trabalhamos com floriculturas locais que cuidam do cultivo e envio das flores. Assim que seu pedido é feito, as flores são cuidadosamente embaladas e entregues diretamente na sua porta, garantindo frescor e qualidade."
          />
          <Pergunta 
            pergunta="4. É possível personalizar meu pedido?" 
            resposta="Sim! Oferecemos opções de personalização para arranjos de flores. Você pode escolher as flores que deseja incluir e adicionar uma mensagem especial. Entre em contato conosco para saber mais sobre como personalizar seu pedido."
          />
          <Pergunta 
            pergunta="5. Qual é a política de devolução?" 
            resposta="Nossa prioridade é a satisfação do cliente. Se você não estiver satisfeito com o seu pedido, entre em contato conosco em até 7 dias após a entrega, e faremos o nosso melhor para resolver a situação."
          />
        </View>

        <View style={{
          width: '100%', // Largura da linha
          height: 2, // Altura da linha
          backgroundColor: '#f7c4c6', // Cor da linha
          marginVertical: 10, // Margem vertical para espaçamento
        }} />

        {/* Chamada para Ação */}
        <View style={{ marginBottom: 20, backgroundColor: '#fff', borderRadius: 10, padding: 15, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>Entre em Contato</Text>
          <Text style={{ fontSize: 16, lineHeight: 22 }}>
            Para dúvidas ou consultas, clique no botão abaixo para entrar em contato conosco pelo WhatsApp.
          </Text>
          <TouchableOpacity
            onPress={openWhatsApp}
            style={{
              marginTop: 10,
              backgroundColor: '#f7c4c6',
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: '#fff', fontSize: 16 }}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SobreNos;
