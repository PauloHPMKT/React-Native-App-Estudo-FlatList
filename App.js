import { useState } from 'react'
import { FlatList, StyleSheet, View, StatusBar } from 'react-native'
import Pessoa from './src/components/Pessoa'

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function App() {

  const [feed, setFeed] = useState([
    {id: '1', name: 'Paulo', idade: 20, email: 'paulo@example.com'},
    {id: '2', name: 'Sergio', idade: 27, email: 'sergio@example.com'},
    {id: '3', name: 'Santos', idade: 31, email: 'santos@example.com'},
    {id: '4', name: 'Nascimento', idade: 22, email: 'nascimento@example.com'},
    {id: '5', name: 'José', idade: 35, email: 'jose@example.com'},
    {id: '6', name: 'Mario', idade: 34, email: 'mario@example.com'},
  ])

  return (
    <View style={styles.container}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={feed} // recebe os dados dinamicos
        renderItem={({ item }) => <Pessoa data={item} />} // é responsável por renderizar os itens
        keyExtractor={ item => item.id }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: statusBarHeigth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
