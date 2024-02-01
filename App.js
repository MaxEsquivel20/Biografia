import { Text,SafeAreaView,ScrollView,View,StyleSheet,Image }  from "react-native";


const App = () => {
  return(
    <SafeAreaView styles={styles.container}>
    <ScrollView>
      <Text style={styles.title}> Hola Bienvenido a mi biografia </Text>
      <Text>Nombre: Maximiliano Esquivel Sosa </Text>
      <Text>Ocupacion: Estudiante en la UAQ </Text>
      <Text>Edad: 21 años </Text>
      <Text>Fecha de Nacimiento: 20/SEP/2002 </Text>
      <Text>Grado de estudios: Actualmente curso la universidad </Text>
      <Image style={styles.image} source={require('./assets/poo.jpg')} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#dfe6e9',
  }

});

export default App;