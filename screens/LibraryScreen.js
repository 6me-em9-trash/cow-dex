import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Platform, StatusBar, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import CATTLE_BREEDS from '../data/breeds';

const CARD_COLORS = ['#48d0b069' ];

const LibraryScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({ Poppins_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  const renderItem = ({ item, index }) => {
    const cardColor = CARD_COLORS[index % CARD_COLORS.length];
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: cardColor }]}
        // --- THE CHANGE IS HERE ---
        // We now pass the 'cardColor' as a route parameter
        onPress={() => navigation.navigate('Detail', { breed: item, color: cardColor })}>
        
        <MaterialCommunityIcons name="pokeball" size={100} style={styles.cardBackgroundIcon} />
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.headerTop}>Cow-dex</Text>
          <FlatList
            data={CATTLE_BREEDS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.list}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

// No changes to styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  screenBackgroundIcon: { position: 'absolute', top: -10, right: -70, color: '#F4F6F7', zIndex: 0 },
  contentContainer: { flex: 1, zIndex: 1 },
  list: { paddingHorizontal: 8 },
  header: { fontFamily: 'Poppins_700Bold', fontSize: 32, color: '#ffffffff', margin: 16, marginBottom: 10 },
  headerTop: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    color: '#ffffffff',
    marginTop: -15,
    marginBottom: 10,
    marginLeft: 20,
    zIndex: 2,
  },
  card: { flex: 1, margin: 8, height: 140, borderRadius: 20, padding: 10, },
  cardTitle: { fontFamily: 'Poppins_700Bold', color: 'white', fontSize: 18, zIndex: 3 },
  cardBackgroundIcon: { position: 'absolute', bottom: -10, right: -10, color: 'rgba(255, 255, 255, 0.2)', zIndex: 1 },
  cardImage: { position: 'absolute', bottom: 5, left: 5, width: '90%', height: '90%', resizeMode: 'contain', zIndex: 2 }
});

export default LibraryScreen;