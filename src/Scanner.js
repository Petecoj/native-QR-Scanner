import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, WebBrowser } from 'expo';


class Scanner extends React.Component {
  static navigationOptions = {
    title: 'Scanner',
  }

  state = {
    scanSuccess: false,
  }
 isUrl(string) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(string)
 }

handleBarCodeRead = (result) => {
  console.log(result.data);
  this.setState({ scanSuccess: true})
  if(this.isUrl(result.data)){
    WebBrowser.openBrowserAsync(result.data)
  } else {
   this.props.navigation.navigate('home', {
    secret: result.data,
  })
}
}
returnBarCodeProps() {
  if (!this.state.scanSuccess) {
    return { onBarCodeRead: this.handleBarCodeRead}
  } else {
    return null
  }
}
  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          style={styles.scanner} 
          {...this.returnBarCodeProps()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  scanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  barCodeArea: {
    width: 180,
    height: 180,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'white',
    borderStyle: 'dashed'
  }
});


export default Scanner;