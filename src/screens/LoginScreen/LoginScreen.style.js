import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '85%',
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderRadius: 10,
    },
    appTitle: {
      fontSize: 60,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    subTitle: {
      fontSize: 12,
      color: '#fff',
      marginTop: 5,
    },
    subTitleEnglish: {
      fontSize: 14,
      fontWeight: '600',
      color: '#fff',
      marginBottom: 20,
    },
    signInText: {
      marginTop: 10,
      fontSize: 16,
      color: '#fff',
    },
    signInTextEnglish: {
      fontSize: 12,
      color: '#fff',
      marginBottom: 20,
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      color: '#b6ea27',
    },
    forgotTextContainer:{
          width: '90%',
          alignItems: 'flex-end',
      },
    forgotText: {
      fontSize: 12,
      color: '#fff',
      marginBottom: 10,
      textAlign: 'right',
      width: '90%',
    },
    loginButton: {
      width: '90%',
      backgroundColor: '#b6ea27',
      padding: 10,
      borderRadius: 30,
      alignItems: 'center',
      marginTop: 20,
    },
    loginButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    googleButton: {
      flexDirection: 'row',
      width: '90%',
      backgroundColor: '#4285F4',
      padding: 10,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    googleButtonText: {
      color: '#fff',
      marginLeft: 10,
      fontWeight: 'bold',
    },
    signUpText: {
      fontSize: 12,
      color: '#fff',
      marginTop: 20,
    },
  });

  export default styles;