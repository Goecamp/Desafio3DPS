// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterForm from './RegisterForm';
import EventosScreen from './CategoriaScreen.js'; // Asegúrate de que esta importación sea correcta y apunte al archivo adecuado
import EventosConferenciasScreen from './EventosConferenciasScreen';
import CrearEvento from './CrearEvento';
import InformacionEventos from './InformacionEventos';
import InformacionEventos2 from './InformacionEventos2';
import InformacionEventos3 from './InformacionEventos3';
import InformacionEventos4 from './InformacionEventos4';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterForm} options={{ title: 'Crear cuenta' }} />
        <Stack.Screen name="Eventos" component={EventosScreen} options={{ title: 'Eventos' }} />
        <Stack.Screen name="EventosConferenciasScreen" component={EventosConferenciasScreen} />
        <Stack.Screen name="CrearEvento" component={CrearEvento} />
        <Stack.Screen name="InformacionEventos" component={InformacionEventos} />
        <Stack.Screen name="InformacionEventos2" component={InformacionEventos2} />
        <Stack.Screen name="InformacionEventos3" component={InformacionEventos3} />
        <Stack.Screen name="InformacionEventos4" component={InformacionEventos4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}