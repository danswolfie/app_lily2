import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../src/assets/icon.jpg'; // Verifique se o caminho está correto
import Footer from './Footer';

export default function Perfil() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('Nome do Usuário');
  const [email, setEmail] = useState('usuario@email.com');
  const [telefone, setTelefone] = useState('(11) 1234-5678');
  const [endereco, setEndereco] = useState('Rua Flores, 123 - São Paulo, SP');
  const [cartao, setCartao] = useState('Cartão Visa - **** 1234');

  const [modalNomeVisible, setModalNomeVisible] = useState(false);
  const [modalContatoVisible, setModalContatoVisible] = useState(false);
  const [modalEnderecoVisible, setModalEnderecoVisible] = useState(false);
  const [modalPagamentoVisible, setModalPagamentoVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1 }}>
        {/* Foto de Perfil */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image 
            source={Icon} // Imagem de perfil padrão
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <TouchableOpacity>
            <Text style={{ color: '#f7c4c6', marginTop: 10 }}>Alterar Foto</Text>
          </TouchableOpacity>
        </View>

        {/* Nome do Usuário */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{nome}</Text>
          <TouchableOpacity onPress={() => setModalNomeVisible(true)}>
            <Text style={{ color: '#f7c4c6' }}>Editar</Text>
          </TouchableOpacity>
        </View>

        {/* Informações de Contato */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Informações de Contato</Text>
          <Text>Email: {email}</Text>
          <Text>Telefone: {telefone}</Text>
          <TouchableOpacity onPress={() => setModalContatoVisible(true)}>
            <Text style={{ color: '#f7c4c6' }}>Editar Informações</Text>
          </TouchableOpacity>
        </View>

        {/* Endereço de Entrega */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Endereço de Entrega</Text>
          <Text>{endereco}</Text>
          <TouchableOpacity onPress={() => setModalEnderecoVisible(true)}>
            <Text style={{ color: '#f7c4c6' }}>Editar Endereço</Text>
          </TouchableOpacity>
        </View>

        {/* Métodos de Pagamento */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Métodos de Pagamento</Text>
          <Text>{cartao}</Text>
          <TouchableOpacity onPress={() => setModalPagamentoVisible(true)}>
            <Text style={{ color: '#f7c4c6' }}>Gerenciar Métodos</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Sair */}
        <TouchableOpacity 
          style={{ backgroundColor: '#f7c4c6', padding: 10, alignItems: 'center', borderRadius: 5 }} 
          onPress={() => navigation.navigate('index')}>
          <Text style={{ color: '#fff' }}>Sair</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={{ padding: 10, backgroundColor: '#fff' }}>
        <Footer />
      </View>

      {/* Modal para editar Nome */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalNomeVisible}
        onRequestClose={() => setModalNomeVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
          <View style={{ width: 300, backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20 }}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome" // Adicionado placeholder para clareza
            />
            <TouchableOpacity onPress={() => setModalNomeVisible(false)} style={{ backgroundColor: '#f7c4c6', padding: 10, alignItems: 'center', borderRadius: 5, marginBottom: 10, width: '80%' }}>
              <Text style={{ color: '#fff' }}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalNomeVisible(false)}>
              <Text style={{ color: '#f7c4c6' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para editar Informações de Contato */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalContatoVisible}
        onRequestClose={() => setModalContatoVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
          <View style={{ width: 300, backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20, backgroundColor: '#fff' }}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
            <TextInput
              style={{ height: 40, width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20, backgroundColor: '#fff' }}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Telefone"
            />
            <TouchableOpacity onPress={() => setModalContatoVisible(false)} style={{ backgroundColor: '#f7c4c6', padding: 10, alignItems: 'center', borderRadius: 5, marginBottom: 10, width: '80%' }}>
              <Text style={{ color: '#fff' }}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalContatoVisible(false)}>
              <Text style={{ color: '#f7c4c6' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para editar Endereço */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalEnderecoVisible}
        onRequestClose={() => setModalEnderecoVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
          <View style={{ width: 300, backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20, backgroundColor: '#fff' }}
              value={endereco}
              onChangeText={setEndereco}
              placeholder="Endereço"
            />
            <TouchableOpacity onPress={() => setModalEnderecoVisible(false)} style={{ backgroundColor: '#f7c4c6', padding: 10, alignItems: 'center', borderRadius: 5, marginBottom: 10, width: '80%' }}>
              <Text style={{ color: '#fff' }}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalEnderecoVisible(false)}>
              <Text style={{ color: '#f7c4c6' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para editar Métodos de Pagamento */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPagamentoVisible}
        onRequestClose={() => setModalPagamentoVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
          <View style={{ width: 300, backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, width: '100%', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20, backgroundColor: '#fff' }}
              value={cartao}
              onChangeText={setCartao}
              placeholder="Método de Pagamento"
            />
            <TouchableOpacity onPress={() => setModalPagamentoVisible(false)} style={{ backgroundColor: '#f7c4c6', padding: 10, alignItems: 'center', borderRadius: 5, marginBottom: 10, width: '80%' }}>
              <Text style={{ color: '#fff' }}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalPagamentoVisible(false)}>
              <Text style={{ color: '#f7c4c6' }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
