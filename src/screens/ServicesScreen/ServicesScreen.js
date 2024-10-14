import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ServicesScreen.style';

const servicesData = [
  { id: '1', title: 'LIMPEZA', subtitle: 'CLEANING', icon: require('../../assets/icons/example.png') },
  { id: '2', title: 'TRANSPORTE', subtitle: 'TRANSPORT', icon: require('../../assets/icons/example.png') },
  { id: '3', title: 'Adminstrativo', subtitle: 'PAPERWORK', icon: require('../../assets/icons/example.png') },
  { id: '4', title: 'INFORMÁTICA', subtitle: 'COMPUTER', icon: require('../../assets/icons/example.png') },
  { id: '5', title: 'ANIMAIS', subtitle: 'PETS', icon: require('../../assets/icons/example.png') },
  { id: '6', title: 'REPARAÇÕES', subtitle: 'REPAIRS', icon: require('../../assets/icons/example.png') },
  { id: '7', title: 'AUTO', subtitle: 'AUTO-REPAIR', icon: require('../../assets/icons/example.png') },
  { id: '8', title: 'BEM ESTAR', subtitle: 'WELLNESS', icon: require('../../assets/icons/example.png') },
];

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PROCURAR SERVIÇOS</Text>
        <Text style={styles.headerSubText}>SEARCH SERVICES</Text>
      </View>

      <View style={styles.servicesContainer}>
        {servicesData.map((service) => (
          <TouchableOpacity key={service.id} style={styles.serviceButton}>
            <Image source={service.icon} style={styles.serviceIcon} />
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ServicesScreen;
