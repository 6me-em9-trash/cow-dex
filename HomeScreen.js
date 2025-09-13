import React, { useState } from 'react';
import { Image, ImageBackground } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  TextInput,
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as ImagePicker from 'expo-image-picker';
import CATTLE_BREEDS from '../data/breeds'; // Assuming this path is correct

// A new, more flexible component for the grid buttons
const GridButton = ({ onPress, color, text, icon, iconSet, image }) => {
  const IconComponent = iconSet === 'Feather' ? Feather : MaterialCommunityIcons;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.gridButton, { backgroundColor: color }]}> 
      {/* Image Size Change: Adjust width/height below to change image size */}
      {image && <Image source={image} style={{ width: 150, height: 150, marginBottom: text ? 8 : 0 }} resizeMode="contain" />}
      {!image && icon && <IconComponent name={icon} size={36} color="white" />}
      {text && <Text style={styles.gridButtonText}>{text}</Text>}
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  // --- No changes to any of the logic/functions ---
  const [searchQuery, setSearchQuery] = useState('');
  let [fontsLoaded] = useFonts({ Poppins_700Bold, Poppins_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  const handleCameraPress = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) { Alert.alert("Permission Required", "Please allow camera access."); return; }
    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true, aspect: [4, 3], quality: 0.5, base64: true });
    if (!result.canceled) { navigation.navigate('Result', { imageUri: result.assets[0].uri, imageBase64: result.assets[0].base64 }); }
  };

  const handleUploadPress = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert("Permission Required", "Please allow photo library access.");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        base64: true,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        navigation.navigate('Result', {
          imageUri: result.assets[0].uri,
          imageBase64: result.assets[0].base64,
        });
      } else if (result.canceled) {
        Alert.alert("Upload Cancelled", "No image was selected.");
      } else {
        Alert.alert("Error", "No image asset found. Please try again.");
      }
    } catch (error) {
      Alert.alert("Upload Error", error.message || "Something went wrong while uploading.");
      console.error("Upload Error:", error);
    }
  };

  const handleSearchSubmit = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;
    const foundBreed = CATTLE_BREEDS.find((breed) => breed.name.toLowerCase() === query);
    if (foundBreed) { navigation.navigate('Detail', { breed: foundBreed }); setSearchQuery(''); }
    else { Alert.alert("Not Found", `The breed "${searchQuery}" was not found.`); }
  };

  // --- JSX and UI Structure Updated ---
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
      pointerEvents="box-none"
    >
      <SafeAreaView style={styles.container} pointerEvents="box-none">
        <View style={styles.contentContainer}>
          <View style={styles.header}>
              <Text style={styles.title}>CattleDex</Text>
          </View>

          <Text style={styles.subtitle}>What cattle breed are you looking for?</Text>

          <View style={styles.searchContainer}>
            <Feather name="search" size={22} color="#f8f6f691" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="rgba(255, 255, 255, 0.59)"
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearchSubmit}
              returnKeyType="search"
            />
          </View>

          {/* ...existing code... */}
        </View>
      </SafeAreaView>
      {/* Bottom Navigation Bar - moved outside SafeAreaView for touch priority */}
      <View style={styles.navBar} pointerEvents="auto">
        {/* Upload button replaces Home icon button */}
        <TouchableOpacity style={styles.navItem} onPress={handleUploadPress}>
          <Feather name="upload" size={24} color="#555" />
          <Text style={styles.navText}>UPLOAD</Text>
        </TouchableOpacity>

        {/* Center Camera Button */}
        <View style={styles.navCenterItem}>
          <TouchableOpacity
            onPress={handleCameraPress}
            style={{ justifyContent: 'center', alignItems: 'center', width: '300%', height: '300%'}} // Enlarged touch area
            activeOpacity={0.7}
          >
            <Image source={require('../assets/camera.png')} style={{ width: 150, height: 150  }} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Library Button on the right */}
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Library')}>
          <MaterialCommunityIcons name="book-open-variant" size={24} color="#555" />
          <Text style={styles.navText}>LIBRARY</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// --- Styles updated to match the new design ---
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 500,
    backgroundColor: 'rgba(67, 189, 172, 0.15)',
    zIndex: 0,
  },
  circleOne: {
    width: 200,
    height: 200,
    top: -50,
    left: -80,
  },
  circleTwo: {
    width: 300,
    height: 300,
    top: 150,
    right: -150,
  },
  grid1:{
    borderRadius : 20,
  },
  circleThree: {
    width: 150,
    height: 150,
    bottom: 50,
    left: -50,
  },
  contentContainer: {
    flex: 1,
    zIndex: 1,
    paddingHorizontal: 25,
    paddingBottom: 100, // Prevents content from overlapping navBar
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 40,
    color: '#f8f8f8ff', // Darker teal
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    color: 'rgba(0, 105, 92, 1)',
    textAlign: 'center',
    marginBottom: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.64)',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#020101ff',
  },
  gridWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    // HEight Change: Adjust the marginTop or marginBottom below to move the grid up or down
    // Example: marginTop: 40,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  gridButtonText: {
    fontFamily: 'Poppins_700Bold',
    color: 'white',
    fontSize: 22,
  },
  navBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    color: '#555',
    marginTop: 4,
  },
  navCenterItem: {
    width: 130,
    height: 130,
    borderRadius: 75,
    backgroundColor: '#0a2c3aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80, // Lifts the button up

  },
  navCenterText: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 10,
      color: 'white',
      position: 'absolute',
      bottom: -18,
  },

  uploadButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default HomeScreen;
