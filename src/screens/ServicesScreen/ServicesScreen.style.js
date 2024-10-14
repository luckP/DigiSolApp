import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
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
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  serviceButton: {
    alignItems: 'center',
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#64dd17',
    borderRadius: 50,
    justifyContent: 'center',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  serviceSubtitle: {
    fontSize: 10,
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
});
