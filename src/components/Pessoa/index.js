import { View, Text, StyleSheet } from "react-native"

function Pessoa({ data }) {
  return(
    <View style={styles.area_pessoa}>
      <Text style={styles.texto_pessoa}>{ data.name }</Text>
      <Text style={styles.texto_pessoa}>{ data.email }</Text>
      <Text style={styles.texto_pessoa}>{ data.idade }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  area_pessoa: {
    width: 500, 
    backgroundColor: '#123123',
    height: 200,
    marginBottom: 15,
    color: '#fff',
    justifyContent: 'center',
  },

  texto_pessoa: {
    color: '#fff',
    fontSize: 20, 
  }
})

export default Pessoa


  