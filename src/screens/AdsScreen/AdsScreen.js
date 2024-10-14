import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './AdsScreen.style';

const adsData = [
  { id: '1', title: 'DECORATIVE ARTS & CRAFTS', image: require('../../assets/images/example.jpg'), distance: '300 km' },
  { id: '2', title: 'CUBISM', image: require('../../assets/images/example.jpg'), distance: '300 km' },
  { id: '3', title: 'GREEK ANTIQUITIES', image: require('../../assets/images/example.jpg'), distance: '300 km' },
  { id: '4', title: 'GREEK ANTIQUITIES', image: require('../../assets/images/example.jpg'), distance: '300 km' },
];

const AdsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.cardFooter}>
        <Image source={require('../../assets/icons/example.png')} style={styles.truckIcon} />
        <Text style={styles.distanceText}>{item.distance}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ANÚNCIOS</Text>
        <Text style={styles.headerSubText}>ADS</Text>
      </View>

      {/* FlatList to render ads */}
      <FlatList
        data={adsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default AdsScreen;
