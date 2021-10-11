import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);
  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 100);
    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar algo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: '10',
    paddingVertical: '25',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default App;
