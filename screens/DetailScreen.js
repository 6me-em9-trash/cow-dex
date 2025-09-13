// CattleDexScreen.js (or DetailScreen.js)
import React, { useState, useRef } from 'react'; // <-- IMPORT useRef and Animated
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated, // <-- IMPORT Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import CATTLE_BREEDS from '../data/breeds';

const { width, height } = Dimensions.get('window');

const DetailScreen = ({ route }) => {
  const { breed, color } = route.params;
  const [selectedBreed, setSelectedBreed] = useState(breed);
  const [searchText, setSearchText] = useState('');

  // --- NEW: ANIMATION AND FLIP STATE SETUP ---
  const [isFlipped, setIsFlipped] = useState(false);
  // Use useRef to hold the animated value so it persists across re-renders
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Interpolate the animated value to create the rotation effect
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  // Animation styles to be applied to the front and back views
  const frontAnimatedStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backAnimatedStyle = { transform: [{ rotateY: backInterpolate }] };

  // Function to trigger the flip animation
  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 600, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };
  // --- END OF NEW ANIMATION SETUP ---

  const filteredBreeds = CATTLE_BREEDS.filter(b =>
    b.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderBreedCard = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.smallBreedCard,
        selectedBreed.id === item.id && styles.selectedSmallBreedCard,
      ]}
      onPress={() => {
        // When a new breed is selected, reset the flip state
        if (isFlipped) {
          flipCard();
        }
        setSelectedBreed(item);
      }}>
      <Image source={{ uri: item.image }} style={styles.smallBreedImage} />
      <Text style={styles.smallBreedName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[color, '#16213e']}
      style={styles.container}>
      <Image
        source={require('../assets/adaptive-icon.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Header (No changes here) */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={24} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-outline" size={24} color="#888" />
          </TouchableOpacity>
        </View>
        <View style={styles.notificationDot} />
      </View>

      <Text style={styles.title}>CattleDex</Text>

      {selectedBreed && (
        <View style={styles.contentArea}>
          {/* --- MODIFIED: WRAP CARD IN A TOUCHABLE OPACITY TO TRIGGER FLIP --- */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={flipCard}
            style={styles.flippableView}>
            
            {/* --- CARD FRONT --- */}
            <Animated.View style={[styles.flipCard, styles.flipCardFront, frontAnimatedStyle]}>
              <LinearGradient
                colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.mainBreedCard}>
                <View style={styles.mainBreedHeader}>
                  <View>
                    <Text style={styles.mainBreedLabel}>Origin:</Text>
                    <Text style={styles.mainBreedInfo}>{selectedBreed.origin}</Text>
                  </View>
                  <View style={styles.recentlyAdded}>
                    <Text style={styles.mainBreedLabel}>Recently</Text>
                    <Text style={styles.mainBreedInfo}>Scotland</Text>
                  </View>
                </View>
                <Image
                  source={{ uri: selectedBreed.image }}
                  style={styles.mainBreedImage}
                  resizeMode="contain"
                />
                <Text style={styles.mainBreedName}>{selectedBreed.name}</Text>
                {/* A little prompt to let the user know they can tap */}
                <Text style={styles.tapToFlipText}>Tap for details</Text>
              </LinearGradient>
            </Animated.View>

            {/* --- CARD BACK --- */}
            <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
              <LinearGradient
                colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.mainBreedCard}>
                
                {/* --- NEW: WRAP BACK CONTENT IN SCROLLVIEW --- */}
                <ScrollView contentContainerStyle={styles.backCardContentContainer}>
                  <Text style={styles.mainBreedName}>{selectedBreed.name} Details</Text>
                  <Text style={styles.descriptionText}>
                    {selectedBreed.description}
                  </Text>
                  <View style={styles.mainBreedDetails}>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Weight:</Text>
                      <View style={styles.detailRow}>
                        <Icon name="barbell-outline" size={16} color="#fff" />
                        <Text style={styles.detailValue}>{selectedBreed.stats.weight}</Text>
                      </View>
                    </View>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Height:</Text>
                      <View style={styles.detailRow}>
                        <Icon name="resize-outline" size={16} color="#fff" />
                        <Text style={styles.detailValue}>{selectedBreed.stats.height}</Text>
                      </View>
                    </View>
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Use:</Text>
                      <View style={styles.detailRow}>
                        <Icon name="hammer-outline" size={16} color="#fff" />
                        <Text style={styles.detailValue}>{selectedBreed.stats.use}</Text>
                      </View>
                    </View>
                    {selectedBreed.characteristics.map(char => (
                      <View key={char.key} style={styles.detailItem}>
                        <Text style={styles.detailLabel}>{char.key}:</Text>
                        <View style={styles.detailRow}>
                          <Icon name={char.icon} size={16} color="#fff" />
                          <Text style={styles.detailValue}>{char.value}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
          {/* --- END OF MODIFIED CARD SECTION --- */}
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.smallBreedsScrollView}>
            {filteredBreeds.slice(0, 5).map(item => renderBreedCard(item))}
          </ScrollView>
        </View>
      )}

      
    </LinearGradient>
  );
};


// --- ADD NEW STYLES AND MODIFY EXISTING ONES ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    marginLeft: '20',
    height: '100%',
    opacity: 0.1,
  },
  descriptionText: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
    paddingHorizontal: 15,
    flex: 1,
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
  filterButton: {
    paddingLeft: 10,
  },
  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  contentArea: {
    flex: 1,
    alignItems: 'center',
  },
  // NEW: Container for the flippable view
  flippableView: {
    width: '100%',
    aspectRatio: 0.7,
  },
  // NEW: Base style for both front and back cards
  flipCard: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden', // This is key for the flip effect
  },
  // NEW: Specific style for the front card (not really needed but good for clarity)
  flipCardFront: {
    // Starts visible
  },
  // NEW: Specific style for the back card (initially rotated away)
  flipCardBack: {
    // Starts hidden
  },
  // RENAMED from mainBreedCard (this is now the inner style for the gradient)
  mainBreedCard: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
  },
  // NEW: Content container for the back card's scrollview
  backCardContentContainer: {
    alignItems: 'center',
    paddingBottom: 20, // Add padding to avoid content sticking to the bottom
  },
  mainBreedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  mainBreedLabel: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
  },
  mainBreedInfo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentlyAdded: {
    alignItems: 'flex-end',
  },
  mainBreedImage: {
    width: '120%',
    height: '120%',
    height: '45%',
    borderRadius: 15,
  },
  mainBreedName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  // NEW: A little hint for the user
  tapToFlipText: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  mainBreedDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Changed to space-around for better wrapping
    width: '100%',
  },
  // NEW: Style for each individual detail item on the back
  detailItem: {
    minWidth: '45%',
    marginBottom: 10,
    alignItems: 'center',
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 12, // Increased font size slightly for readability
    marginBottom: 2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailValue: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  smallBreedsScrollView: {
    paddingVertical: 20,
  },
  smallBreedCard: {
    width: 80,
    height: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    padding: 5,
    borderColor: 'transparent',
    borderWidth: 2,
  },
  selectedSmallBreedCard: {
    borderColor: '#FFD700',
  },
  smallBreedImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  smallBreedName: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  bottomRightSparkle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default DetailScreen;