import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView // Import ScrollView
} from 'react-native';
import axios from 'axios';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import CATTLE_BREEDS from '../data/breeds';

// --- IMPORTANT: MAKE SURE YOUR RENDER URL IS CORRECT ---
const BACKEND_URL = 'https://cowdex-project.onrender.com/predict';

const ResultScreen = ({ route, navigation }) => {
  const { imageUri, imageBase64 } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  useEffect(() => {
    const getPrediction = async () => {
      if (!imageBase64) {
        setError("Image data is missing.");
        setIsLoading(false);
        return;
      }
      try {
        const payload = { image: imageBase64 };
        const response = await axios.post(BACKEND_URL, payload);
        setPrediction(response.data);
      } catch (err) {
        console.error("Error getting prediction:", err);
        setError("Could not get a prediction. The server may be busy or an error occurred.");
      } finally {
        setIsLoading(false);
      }
    };
    getPrediction();
  }, [imageBase64]);

  const handleFindInLibrary = () => {
    if (!prediction) return;
    const foundBreed = CATTLE_BREEDS.find((breed) => breed.name.toLowerCase() === prediction.breed.toLowerCase().replace(/_/g, ' '));
    if (foundBreed) {
      const breedIndex = CATTLE_BREEDS.findIndex(b => b.id === foundBreed.id);
      const cardColor = ['#48D0B0', '#59A8F4', '#F5C54E', '#8D6DE8', '#F7706A', '#F79E4E'][breedIndex % 6];
      navigation.navigate('Detail', { breed: foundBreed, color: cardColor });
    } else {
      alert("This breed could not be found in the CowDex library.");
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.centeredContent}>
          <ActivityIndicator size="large" color="#3498DB" />
          <Text style={styles.loadingText}>Analyzing Image...</Text>
        </View>
      );
    }
    if (error) {
      return (
        <View style={styles.centeredContent}>
          <Ionicons name="alert-circle-outline" size={48} color="#E74C3C" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }
    if (prediction) {
      const confidencePercent = Math.round(prediction.confidence * 100);
      return (
        <View style={styles.centeredContent}>
          <Text style={styles.resultLabel}>PREDICTED BREED</Text>
          <Text style={styles.resultText}>{prediction.breed.replace(/_/g, ' ')}</Text>
          
          <Text style={styles.confidenceLabel}>CONFIDENCE</Text>
          <View style={styles.confidenceBarContainer}>
            <View style={[styles.confidenceBarFill, { width: `${confidencePercent}%` }]} />
          </View>
          <Text style={styles.confidenceText}>{confidencePercent}%</Text>

          <TouchableOpacity style={styles.libraryButton} onPress={handleFindInLibrary}>
            <Ionicons name="library-outline" size={20} color="white" />
            <Text style={styles.libraryButtonText}>View in CowDex Library</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identification Result</Text>
      </View>
      
      <MaterialCommunityIcons name="pokeball" style={styles.backgroundIcon} size={250} />

      {/* Changed View to ScrollView to prevent overflow */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.resultBox}>
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    zIndex: 2,
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#333',
    marginLeft: 15,
  },
  backgroundIcon: {
    position: 'absolute',
    top: -50,
    right: -70,
    color: '#F4F6F7',
    zIndex: 0,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#E0E0E0',
    backgroundColor: '#F9F9F9',
  },
  resultBox: {
    width: '100%',
    marginTop: 25,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20, // <-- THIS IS THE FIX
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  loadingText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#555',
    marginTop: 15,
  },
  errorText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#E74C3C',
    textAlign: 'center',
    marginTop: 10,
  },
  resultLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#7F8C8D',
  },
  resultText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    color: '#2C3E50',
    textAlign: 'center',
    marginVertical: 5,
  },
  confidenceLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 15,
  },
  confidenceBarContainer: {
    height: 10,
    width: '80%',
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 5,
  },
  confidenceBarFill: {
    height: '100%',
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  confidenceText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#2ECC71',
    marginTop: 5,
  },
  libraryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  libraryButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    marginLeft: 10,
  },
});

export default ResultScreen;
