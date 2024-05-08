import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';

export default function EventosConferenciasScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [eventos, setEventos] = useState([
    { id: 1, nombre: 'Evento 1', imageSource: require('./assets/reunion1.jpg'), routeName: 'InformacionEventos2' },
    { id: 2, nombre: 'Evento 2', imageSource: require('./assets/reunion2.jpg'), routeName: 'InformacionEventos' },
    { id: 3, nombre: 'Evento 3', imageSource: require('./assets/reunion3.jpg'), routeName: 'InformacionEventos3' },
    { id: 4, nombre: 'Evento 4', imageSource: require('./assets/reunion5.jpg'), routeName: 'InformacionEventos4' },
  ]);

  const handleNavigation = () => {
    navigation.navigate('CrearEvento');
  };

  const filteredEvents = eventos.filter(evento =>
    evento.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredEvents.length === 0 && searchText.trim() !== '') {
      Alert.alert('El evento no existe');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar a un evento</Text>

      {/* Panel de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar evento"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />

      {/* Lista de eventos */}
      <View style={styles.gridContainer}>
        {filteredEvents.map(evento => (
          <TouchableOpacity key={evento.id} style={styles.gridItem} onPress={() => navigation.navigate(evento.routeName)}>
            <Image source={evento.imageSource} style={styles.image} />
            <Text style={styles.imageText}>{evento.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleNavigation}
      >
        <Text style={styles.addButtonText}>Agregar un nuevo evento</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#B19CD9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  gridItem: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#B19CD9',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
