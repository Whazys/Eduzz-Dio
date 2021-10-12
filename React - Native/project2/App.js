import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './src/assets/foto.jpg';
import Card from './src/components/Card/Index';

const App = () => {
  function handleRedeSocial(redes_sociais) {
    switch (redes_sociais) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'linkedin.com/in/rafael-santos');
        break;
      case 'github':
        Alert.alert('Meu Github', 'github.com/whazys');
        break;
      case 'instagram':
        Alert.alert('Meu Instragram', 'instagram.com/afarsantos');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Rafael Santos</Text>
          <Text style={style.funcao}>Analista Administrativo</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>
            Estácio: Bacharel Administração
          </Text>
          <Text style={style.card_content_text}>Senai: Téc Automação</Text>
        </Card>
        <Card titulo="Aprendizados">
          <Text style={style.card_content_text}>
            HTML & CSS - Nível: Básico
          </Text>
          <Text style={style.card_content_text}>Cursando Bootcamp: Eduzz</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#2F4F4F',
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: 'white',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '35%',
    marginTop: 20,
  },
});

export default App;
