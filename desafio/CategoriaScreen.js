import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from 'react-native';

export default function EventosScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [categorias, setCategorias] = useState([
    'Conferencias',
    'Reuniones Sociales',
    'Reuniones Escolares',
  ]);
  const [showAgregarCategoria, setShowAgregarCategoria] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const handleSearch = () => {
    if (searchText === '') {
      setResultadosBusqueda([]);
      return;
    }

    const resultados = categorias.filter((categoria) =>
      categoria.toLowerCase().includes(searchText.toLowerCase())
    );

    if (resultados.length === 0) {
      setResultadosBusqueda(['No hay resultados']);
    } else {
      setResultadosBusqueda(resultados);
    }
  };

  const handleAgregarCategoria = () => {
    setShowAgregarCategoria(true);
  };

  const handleConfirmarCategoria = () => {
    setCategorias([...categorias, nuevaCategoria]);
    setShowAgregarCategoria(false);
    setNuevaCategoria('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar categoría"
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch();
        }}
      />
      <FlatList
        data={searchText === '' ? categorias : resultadosBusqueda}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EventosConferenciasScreen', { categoria: item })}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        style={styles.buttonsContainer}
      />
      {showAgregarCategoria && (
        <View style={styles.agregarCategoriaContainer}>
          <TextInput
            style={styles.input}
            placeholder="Agregar Nombre"
            value={nuevaCategoria}
            onChangeText={setNuevaCategoria}
          />
          <TouchableOpacity style={styles.agregarButton} onPress={handleConfirmarCategoria}>
            <Text style={styles.agregarButtonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.agregarCategoriaButton} onPress={handleAgregarCategoria}>
        <Text style={styles.agregarCategoriaButtonText}>Agregar categoría</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '80%',
    flex: 1,
  },
  button: {
    backgroundColor: '#B19CD9',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  agregarCategoriaButton: {
    backgroundColor: '#B19CD9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  agregarCategoriaButtonText: {
    color: 'white',
    fontSize: 16,
  },
  agregarCategoriaContainer: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  agregarButton: {
    backgroundColor: '#B19CD9',
    padding: 15,
    borderRadius: 5,
  },
  agregarButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
