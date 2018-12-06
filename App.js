import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Button';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scanner from './src/Scanner';

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  onButtonPress = () => {
    this.props.navigation.navigate('scanner');
    
  }
  render() {
    const secret = this.props.navigation.getParam('secret')
    return (
      <View style={styles.container}>
        <Text>Whats The Secret?</Text>
        <Button title="Hello Tyler" onPress={this.onButtonPress}/>
        <Text>{secret}</Text>
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
    fontSize: 48,
  },
});

// Navigation Stuff
const Navigation = createStackNavigator ({
  home: App,
  scanner: Scanner,
})

export default createAppContainer(Navigation);