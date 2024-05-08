import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function InformacionEventos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Evento</Text>
      <Image source={require('./assets/reunion3.jpg')} style={styles.image} />
      <View style={styles.colorBox}>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Nombre:</Text> Algebra Y matrices</Text>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Descripción:</Text> Estudiaremos los temas vistos en la clase la semana pasada</Text>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Precio:</Text> $5.25</Text>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Hora de evento:</Text> 3:00 pm</Text>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Tiempo de duración:</Text> 2 horas</Text>
        <Text style={styles.eventInfo}><Text style={styles.boldText}>Fecha:</Text> 10-05-2024</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Aceptar Invitación")}>
          <Text style={styles.buttonText}>Aceptar Invitación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  colorBox: {
    backgroundColor: '#CDC7D9',
    width: 350,
    borderRadius: 20,
    padding: 20,
  },
  eventInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#B19CD9',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
