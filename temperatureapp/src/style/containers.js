import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center'
    },
    header: {
        height: 200,
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: 'blue',
        alignSelf: 'stretch'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        height: 150,
        width: 150,
        borderWidth: 10,
        borderRadius: 100,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });