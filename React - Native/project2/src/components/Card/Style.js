import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 20,
  },
});

export default style;
