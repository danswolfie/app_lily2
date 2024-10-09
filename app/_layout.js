import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="home" 
        options={{
          headerShown: false,
          headerTitle: "Home",
        }} 
      />
      <Stack.Screen 
        name="telaCasamentos" 
        options={{
          title: 'Produtos para Casamentos',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' }, 
        }} 
      />

      <Stack.Screen 
        name="telaBuques" 
        options={{
          title: 'Buquês de Flores',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },   
        }} 
      />
      <Stack.Screen 
        name="telaRosas" 
        options={{
          title: 'Produtos para Rosas',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
        }} 
      />
      <Stack.Screen 
        name="telaVasos" 
        options={{
          title: 'Vasos de Flores',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
      <Stack.Screen 
        name="telaCarrinho" 
        options={{
          title: 'Carrinho de Produtos',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
      <Stack.Screen 
        name="telaSobreNos" 
        options={{
          title: 'Sobre Nós',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
      <Stack.Screen 
        name="telaPerfil" 
        options={{
          title: 'Perfil do Usuário',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
      <Stack.Screen 
        name="telaEventos" 
        options={{
          title: 'Eventos',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
      <Stack.Screen 
        name="telaPromocoes" 
        options={{
          title: 'Promoções de Hoje',
          headerShown: true,
          headerStyle: { backgroundColor: '#f7c4c6' },
          headerTintColor: '#fff', 
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },  
        }} 
      />
    </Stack>

    
  );
}