import Card from 'components/Card/Card';
import NavBar from 'components/NavBar/NavBar';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" backgroundColor='#006769' />
      <NavBar />
      <Card
        id='12'
        title='title 1'
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        image={<Image source={require('./assets/favicon.png')} style={{ width: 75, height: 75 }} />}
      />
      <Card
        id='13'
        title='title 2'
        description='descricao'
        image={<Image source={require('./assets/favicon.png')} style={{ width: 75, height: 75 }} />}
      />
      <Card
        id='14'
        title='title 3'
        description='descricao'
        image={<Image source={require('./assets/favicon.png')} style={{ width: 75, height: 75 }} />}
      />
    </ View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingVertical: 25,
  }
})