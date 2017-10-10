import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BleManager from 'react-native-ble-manager';

export default class App extends React.Component {
    constructor() {

        super();
        BleManager.start()
        .then(() => {
            // Success code
            console.log('Module initialized');
            });
}
    startScan() {
        if (!this.state.scanning) {
            BleManager.scan([], 3, true).then((results) => {
                console.log('Scanning...');
                this.setState({ scanning: true });
            });
        }
    }
    render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Test Message</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
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
