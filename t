const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    marginLeft: 20, // ✅ fixed (number, not string)
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
  flippableView: {
    width: '100%',
    aspectRatio: 0.7,
  },
  flipCard: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  flipCardFront: {},
  flipCardBack: {},
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
  backCardContentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
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
    width: '100%',
    height: '45%', // ✅ fixed (removed duplicate)
    borderRadius: 15,
  },
  mainBreedName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  tapToFlipText: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
  mainBreedDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  detailItem: {
    minWidth: '45%',
    marginBottom: 10,
    alignItems: 'center',
  },
  detailLabel: {
    color: '#aaa',
    fontSize: 12,
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
});