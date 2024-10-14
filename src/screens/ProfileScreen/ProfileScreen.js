import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ProfileScreen.style';
import { CommonActions } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  // Logout function to reset the stack and go back to the Login screen
  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>CONTA</Text>
        <Text style={styles.headerSubText}>ACCOUNT</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/icons/example.png')} style={styles.profileImage} />
      </View>

      {/* Account Options */}
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Account information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Public profile info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>History</Text>
      </TouchableOpacity>

      {/* Professional Login Section */}
      <View style={styles.professionalContainer}>
        <Image source={require('../../assets/images/example.jpg')} style={styles.professionalImage} />
        <View style={styles.professionalOverlay}>
          <Text style={styles.professionalText}>ENTRAR COMO PROFISSIONAL</Text>
          <Text style={styles.professionalSubText}>SIGN IN AS HELPER</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
