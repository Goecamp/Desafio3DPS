import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CrearEvento() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [horaEvento, setHoraEvento] = useState('');
  const [duracion, setDuracion] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');

  const handleCrearEvento = () => {
    // Aquí puedes manejar la lógica para crear un nuevo evento
    console.log('Creando evento...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completar el siguiente formulario para crear nuevo evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Descripcion"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline={true}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Imagen"
        value={imagen}
        onChangeText={setImagen}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de evento"
        value={horaEvento}
        onChangeText={setHoraEvento}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Tiempo de duracion"
        value={duracion}
        onChangeText={setDuracion}
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha del evento"
        value={fechaEvento}
        onChangeText={setFechaEvento}
        placeholderTextColor="black"
      />
      <TouchableOpacity style={styles.button} onPress={handleCrearEvento}>
        <Text style={styles.buttonText}>Crear Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: '#B19CD9',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});