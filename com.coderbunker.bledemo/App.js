import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppState,
    Platform,
    PermissionsAndroid,
    TouchableHighlight,
    NativeAppEventEmitter,
    NativeEventEmitter,
    NativeModules,
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import Permissions from 'react-native-permissions';

export default class App extends React.Component {

    constructor() {

        super();

        this.state = {
            scanning: false,
            peripherals: new Map(),
            appState: ''
        }

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);

        BleManager.start().then(() => {
            console.log('BLE Module initialized');
        }).catch(function (e) {
            console.log("ERROR: Couldn't start BleManager: " + e)
        });
    }

    handleAppStateChange(nextAppState) {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
            BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
                console.log('Connected peripherals: ' + peripheralsArray.length);
            }).catch(function (e) {
                console.log(e); // "oh, no!"
            });
        }
        this.setState({ appState: nextAppState });
    }

    startScan() {
        if (!this.state.scanning) {
            BleManager.scan([], 3, true).then((results) => {
                console.log('Scanning...');
                this.setState({ scanning: true });
            }).catch(function (error) {
                console.log('ERROR: There has been a problem with your fetch operation: ' + error.message);
            });
        }
    }
  render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={{ marginTop: 40, margin: 20, padding: 20, backgroundColor: '#ccc' }} onPress={() => this.startScan()}>
                <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
            </TouchableHighlight>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Test Message</Text>
            <Text>Shake your phone to open the developer menu.</Text>
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
