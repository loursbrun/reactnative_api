import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import { getFilmsFromApiWithSearchedText } from './API/TMDBAApi'

export default class App extends React.Component {
  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => console.log(data.results))
  }

  render() {
    return (
      <View style={styles.container}>
         <Button style={{ height: 50 }} title="Rechercher" onPress={() => this._loadFilms()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
