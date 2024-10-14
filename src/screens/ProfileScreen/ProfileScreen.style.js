import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubText: {
    fontSize: 12,
    color: '#888',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc', // Placeholder color
  },
  optionButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 15,
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  professionalContainer: {
    margin: 20,
    position: 'relative',
  },
  professionalImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  professionalOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#64dd17',
    padding: 5,
    borderRadius: 5,
  },
  professionalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  professionalSubText: {
    fontSize: 12,
    color: '#000',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tabLabel: {
    fontSize: 12,
    color: '#000',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#ff3b30',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
