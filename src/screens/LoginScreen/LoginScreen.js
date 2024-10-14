import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './LoginScreen.style';
import { CommonActions } from '@react-navigation/native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      })
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpeg')} // Path to your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.appTitle}>Tã</Text>

        {/* Taglines */}
        <Text style={styles.title}>TUDO RESOLVIDO!</Text>
        <Text style={styles.subTitle}>Serviços rápidos e confiáveis entre particulares</Text>
        <Text style={styles.subTitleEnglish}>ALL GETS SOLVED!</Text>

        {/* Sign-in Labels */}
        <Text style={styles.signInText}>Entrar como profissional</Text>
        <Text style={styles.signInTextEnglish}>Sign in as Helper</Text>

        {/* Username & Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Google Sign In */}
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="#fff" />
          <Text style={styles.googleButtonText}>Entrar pelo Google</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <TouchableOpacity>
          <Text style={styles.signUpText}>Don’t have an account?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
