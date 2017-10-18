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
import Toast, { DURATION } from 'react-native-easy-toast'

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class App extends React.Component {

    constructor() {

        super();

        this.state = {
            scanning: false,
            peripherals: new Map(),
            appState: '',
            discoveries: 0,
            deviceList: '',
        }

        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
        this.handleStopScan = this.handleStopScan.bind(this);

    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);

        BleManager.start().then(() => {
            console.log('BLE Module initialized');
            this.refs.toast.show('BLE Module initialized', 400);
        }).catch(function (e) {
            console.log("ERROR: Couldn't start BleManager: " + e);
            });

        if (Platform.OS = 'android') {
            BleManager.enableBluetooth()
                .then(() => {
                    // Success code
                    console.log('The bluetooth is already enabled or the user confirm');
                })
                .catch((error) => {
                    // Failure code
                    console.log('The user refuse to enable bluetooth');
                });
        }

        this.handlerdiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral);
        this.handlerstop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan);
    }

    componentWillUnmount()
    {
        this.handlerdiscover.remove();
        this.handlerstop.remove();
    }

    handleAppStateChange(nextAppState) {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
            BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
                console.log('Connected peripherals: ' + peripheralsArray.length);
                console.log(peripheralsArray);
            }).catch(function (e) {
                console.log(e); // "oh, no!"
            });
        }
        this.setState({ appState: nextAppState });
    }

    handleDiscoverPeripheral(peripheral)
    {
        var peripherals = this.state.peripherals;
        if (!peripherals.has(peripheral.id)) {
            console.log('Got ble peripheral', peripheral.id);
            peripherals.set(peripheral.id, peripheral);
            this.setState({ peripherals })
        }
    }

    handleStopScan() {
        console.log('Scan is stopped');
        this.setState({ scanning: false});
    }

    startScan() {
        if (!this.state.scanning) {
            BleManager.scan([], 10, true).then((results) => {
                console.log('Scanning...');
                this.setState({ scanning: true });
            }).catch(function (error) {
                console.log('ERROR: There has been a problem with starting the scan: ' + error.message);
            });
        }
    }
    getDiscoveries()
    {
        BleManager.getDiscoveredPeripherals([])
            .then((peripheralsArray) => {
                // Success code
                console.log('Discovered peripherals: ' + peripheralsArray.length);
                console.log(this.state.peripherals.keys().next().value);
                this.setState({ discoveries: peripheralsArray.length });
            }).catch(function (error) {
                console.log('ERROR: There has been a problem with accesing the discovered peripherals: ' + error.message);
            });
        this.getDeviceList();
        this.refs.toast.show('Get discoveries', 400);
    }

    getService(id)
    {
        var reterror = '';
        BleManager.connect(id)
            .then(() => {
                // Success code
                console.log('Connected');
            })
            .catch((error) => {
                // Failure code
                console.log(error);
                reterror += error
            });
        BleManager.retrieveServices(id)
            .then((peripheralInfo) => {
                // Success code
                reterror = "No errors in getService"
                console.log('Peripheral info:', peripheralInfo);
            }).catch(function (error) {
                console.log('ERROR: There has been a problem with accesing  the service at ' + id + ': ' + error);
            });
    }

    getDeviceList()
    {
        var ret;
        ret = '';
        console.log(this.state.peripherals.length);
        this.state.peripherals.forEach(function (element) {
            ret += element.id + ',' + element.rssi + ',' + element.name + '; ';
        });
        this.setState({ deviceList: ret });
        console.log(ret);
    }

  render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={{ marginTop: 40, margin: 20, padding: 20, backgroundColor: '#ccc' }} onPress={() => this.startScan()}>
                <Text>Scan Bluetooth</Text>
            </TouchableHighlight>
            <Text>Scanning {this.state.scanning ? 'on' : 'off'} </Text>
            <TouchableHighlight style={{ marginTop: 40, margin: 20, padding: 20, backgroundColor: '#ccc' }} onPress={() => this.getDiscoveries()}>
                <Text>Get Found Devices</Text>
            </TouchableHighlight>
            <Text>Devices discovered: {this.state.discoveries} </Text>
            <Text>Device List: {this.state.deviceList}</Text>
            
            
            <TouchableHighlight disabled={this.state.discoveries == 0} style={{ marginTop: 40, margin: 20, padding: 20, backgroundColor: '#ccc' }} onPress={() => this.getService(this.state.peripherals.keys().next().value)}>
                <Text>Get Discovered service</Text>
            </TouchableHighlight>
            <Toast ref="toast" />
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
